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
} 
$varun = str_rot13($_POST['un']);
$varup = str_rot13($_POST['up']);
$sql = "SELECT UserID,FirstName,LastName,MajorID,SemesterStart FROM Student WHERE Username='$varun' AND Password='$varup'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 $rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);
} else {
    echo "{\"first\":{\"response\": \"error\"}}";
}
$conn->close();




?>