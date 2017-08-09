<?


$servername = "cse.unl.edu:3306/tfellbaum";
$username = "tfellbaum";
$password = "8H]qJf";
$dbname = "tfellbaum";
$classID = $_POST['classID'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("{\"first\":{\"response\": \"error\"}}");
} else{

        
            $credits = intval($_POST['classCredits']);
            $req = intval($_POST['req']);
            $eid = $_POST['eqID'];
            $credallowed = intval($_POST['reqCreds']);
            $prereq = $_POST['preReqs'];
            $courset = $_POST['classTitle'];
            $courseDev = $_POST['classDelivery'];
            $courseDes = $_POST['classDescription'];
            $sql = "INSERT IGNORE INTO Class (ClassID,Credits,ReqID,EquivalentID,CreditsAllowed,PreReqIDs,CourseTitle,CourseDelivery,CourseDescription) VALUES ('$classID', $credits, $req, '$eid', '$credallowed', '$prereq', '$courset', '$courseDev','$courseDes')";
        $result = $conn->query($sql);
        //add check for if result failed
        //TODO: Check to make sure user has time slot open, also check to make sure if update is successful this is a hack!
        if($conn->affected_rows >= 0){
                echo "{\"SECOND\":{\"response\": \"" . $conn->affected_rows."\"}}";

        }else{
            echo "{\"first\":{\"response\": \"error\"}}";
        }
        
        
}

$conn->close();


































?>