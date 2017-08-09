<?

$dbID = $_POST['uid'];
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


    $sql = "SET SQL_SAFE_UPDATES = 0;";
            $result = $conn->query($sql);
        $sql = "UPDATE Student SET Username='$un',Password='$pass',FirstName='$fname',LastName='$lname',MajorID='$maj',SemesterStart='$term',MinorID='$min' WHERE UserID='$dbID'";
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