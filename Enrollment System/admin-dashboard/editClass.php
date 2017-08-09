<?


$servername = "cse.unl.edu:3306/tfellbaum";
$username = "tfellbaum";
$password = "8H]qJf";
$dbname = "tfellbaum";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("{\"first\":{\"response\": \"error\"}}");
} else{

    $ct = $_POST['ct'];
    $ce = $_POST['ce'];
    $eq = $_POST['eq'];
    $preq = $_POST['preq'];
    $cdev = $_POST['cdev'];
    $cd = $_POST['cd'];
    $dbID = $_POST['classID'];
    $sql = "SET SQL_SAFE_UPDATES = 0;";
            $result = $conn->query($sql);
        $sql = "UPDATE Class SET CourseTitle='$ct',Credits='$ce',EquivalentID='$eq',PreReqIDs='$preq',CourseDelivery='$cdev',CourseDescription='$cd' WHERE ClassID='$dbID'";
        $result = $conn->query($sql);
        //add check for if result failed
        //TODO: Check to make sure user has time slot open, also check to make sure if update is successful this is a hack!
        if($conn->affected_rows >= 0){
                echo "{\"SECOND\":{\"response\": \"" . $conn->affected_rows."\"}}";

        }else{
            echo "{\"first\":{\"response\": \"error\"}}";
        }
                
            $sql = "SET SQL_SAFE_UPDATES = 1;";
            $result = $conn->query($sql);
}

$conn->close();



?>