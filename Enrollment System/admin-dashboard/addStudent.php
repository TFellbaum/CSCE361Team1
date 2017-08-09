<?

$dbID = intval($_POST['uid']);
$term = $_POST['ter'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$pass = $_POST['pass'];
$maj = $_POST['maj'];
$min = $_POST['min'];
$un = $_POST['username'];
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

        $sql = "SELECT * FROM Student WHERE UserID='$dbID'";
            $result = $conn->query($sql);
        if($result->num_rows > 0){
            echo "{\"first\":{\"response\": \"error\"}}";
        }else{
            $sql = "INSERT INTO Student (UserID,Username,Password,FirstName,LastName,MajorID,SemesterStart,MinorID) VALUES ($dbID, '$un', '$pass', '$fname', '$lname', '$maj', '$term', '$min')";
        $result = $conn->query($sql);
        //add check for if result failed
        //TODO: Check to make sure user has time slot open, also check to make sure if update is successful this is a hack!
        if($conn->affected_rows >= 0){
                echo "{\"SECOND\":{\"response\": \"" . $conn->affected_rows."\"}}";

        }else{
            echo "{\"first\":{\"response\": \"error\"}}";
        }
        }
        
}

$conn->close();



?>