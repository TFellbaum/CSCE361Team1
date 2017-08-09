<?

$dbID = $_POST['uid'];
$term = $_POST['ter'];
$sectionToAdd = $_POST['secID'];
$classIDToAdd = $_POST['clID'];
$classToAddCredits = $_POST['crDT'];

$servername = "cse.unl.edu:3306/tfellbaum";
$username = "tfellbaum";
$password = "8H]qJf";
$dbname = "tfellbaum";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    echo "error";
    die("{\"first\":{\"response\": \"error\"}}");
} 

$sql = "SELECT SectionID,ClassID,ClassTime,ClassLocation,ClassInstructor,Semester,ClassCapacity,SeatsTaken FROM ClassSection WHERE SectionID='$sectionToAdd' AND Semester='$term' AND ClassID='$classIDToAdd'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 $rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
    break;
}
foreach ($rows as $key) {
    $cap = (int)$key['ClassCapacity'];
    $taken  = (int)$key['SeatsTaken'];
    $taken = $taken + 1;
    $takenm = $taken-1;
    if( $cap >= $taken){
        $adf = $key['ClassTime'];
        $fdf = $key['ClassLocation'];
        $adff = $key['ClassInstructor'];
        $sql = "SET SQL_SAFE_UPDATES = 0;";
        $result = $conn->query($sql);
        $sql = "UPDATE ClassSection SET SeatsTaken='$taken' WHERE SectionID='$sectionToAdd' AND ClassID='$classIDToAdd' AND ClassTime='$adf' AND ClassLocation='$fdf' AND ClassInstructor='$adff' AND Semester='$term' AND ClassCapacity='$cap' AND SeatsTaken='$takenm'";
        $result = $conn->query($sql);
                $sql = "UPDATE ClassSection SET SeatsTaken='$taken' WHERE SectionID='$sectionToAdd' AND ClassID='$classIDToAdd' AND ClassTime='$adf' AND ClassLocation='$fdf' AND ClassInstructor='$adff' AND Semester='$term' AND ClassCapacity='$cap' AND SeatsTaken='$takenm'";
        $result = $conn->query($sql);
        //add check for if result failed
        //TODO: Check to make sure user has time slot open, also check to make sure if update is successful this is a hack!
        if($conn->affected_rows >= 0){
            $sql = "INSERT INTO EnrollmentSchedule (UserID, SectionID, ClassID, Grade, Semester) VALUES ('$dbID', '$sectionToAdd', '$classIDToAdd', 'IP', '$term');";
        $result = $conn->query($sql);
        }
        echo $conn->affected_rows;
                
            $sql = "SET SQL_SAFE_UPDATES = 1;";
            $result = $conn->query($sql);

    }else{
        echo "{\"first\":{\"response\": \"Class Full\"}}";
    }
}
} else {
    echo "{\"first\":{\"response\": \"error\"}}";
}
$conn->close();



?>