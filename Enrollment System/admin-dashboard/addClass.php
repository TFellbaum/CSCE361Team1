<?


$servername = "cse.unl.edu:3306/tfellbaum";
$username = "tfellbaum";
$password = "8H]qJf";
$dbname = "tfellbaum";
$classID = $_POST['classID'];
$credits = intval($_POST['classCredits']);
            $req = intval($_POST['req']);
            $eid = $_POST['eqID'];
            $credallowed = intval($_POST['reqCreds']);
            $prereq = $_POST['preReqs'];
            $courset = $_POST['classTitle'];
            $courseDev = $_POST['classDelivery'];
            $courseDes = $_POST['classDescription'];
            $sectionID = intval($_POST['sectionNumber']);
            $classTime = $_POST['classTime'];
            $classLoc = $_POST['classLocation'];
            $classInstruct = $_POST['instructor'];
            $sem = $_POST['term'];
            $cap = intval($_POST['ccap']);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("{\"first\":{\"response\": \"error\"}}");
} else{

        $sql = "SELECT * FROM Class WHERE ClassID='$classID'";
            $result = $conn->query($sql);
        if($result->num_rows > 0){
            //do add section only

          
            $sql = "INSERT IGNORE INTO ClassSection (SectionID,ClassID,ClassTime,ClassLocation,ClassInstructor,Semester,ClassCapacity,SeatsTaken) VALUES ($sectionID,'$classID','$classTime','$classLoc','$classInstruct','$sem',$cap,0)";
            $result = $conn->query($sql);
            if($conn->affected_rows >= 0){
                echo "{\"SECOND\":{\"response\": \"SUCCESS\"}}";
            }else{
                echo "{\"first\":{\"response\": \"error\"}}";
            }
        }else{
            
            $sql = "INSERT IGNORE INTO Class (ClassID,Credits,ReqID,EquivalentID,CreditsAllowed,PreReqIDs,CourseTitle,CourseDelivery,CourseDescription) VALUES ('$classID', $credits, $req, '$eid', '$credallowed', '$prereq', '$courset', '$courseDev','$courseDes')";
        $result = $conn->query($sql);
        //add check for if result failed
        //TODO: Check to make sure user has time slot open, also check to make sure if update is successful this is a hack!
        if($conn->affected_rows >= 0){
            //do add section 
            $sql = "INSERT IGNORE INTO ClassSection (SectionID,ClassID,ClassTime,ClassLocation,ClassInstructor,Semester,ClassCapacity,SeatsTaken) VALUES ($sectionID,'$classID','$classTime','$classLoc','$classInstruct','$sem',$cap,0)";
            $result = $conn->query($sql);
            if($conn->affected_rows >= 0){

                echo "{\"SECOND\":{\"response\": \"" . $conn->affected_rows."\"}}";
            }else{
                echo "{\"first\":{\"response\": \"error\"}}";
            }

        }else{
            echo "{\"first\":{\"response\": \"error\"}}";
        }
        }
        
}

$conn->close();


































?>