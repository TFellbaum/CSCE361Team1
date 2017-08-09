<?

$dbID = $_POST['dbID'];
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

$sql = "SELECT Semester FROM EnrollmentSchedule WHERE UserID='$dbID'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 $rows = array();
while($r = mysqli_fetch_assoc($result)) {
    if (in_array($r, $rows)) {
        
    }else{
        $rows[] = $r;
    }
}
print json_encode($rows);
} else {
    echo "{\"first\":{\"response\": \"error\"}}";
}
$conn->close();


?>