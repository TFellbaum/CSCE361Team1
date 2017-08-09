<?

$dbID = $_POST['majIDToRemove'];
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
        $sql = "DELETE FROM Major WHERE MajorID='$dbID'";
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