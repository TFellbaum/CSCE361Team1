<?
$uid = $_POST['uid'];
$reqID = $_POST['reqID'];
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
if($reqID == '-1'){
    $sql = "SELECT ClassID,Credits,EquivalentID,PreReqIDs,CourseTitle,CourseDelivery,CourseDescription FROM Class";
    $result = $conn->query($sql);
if ($result->num_rows > 0) {
 $rows = array();
while($r = mysqli_fetch_assoc($result)) {
    if (in_array($r, $rows)) {
    }else{
        $rows[] = $r;
    }
}
$classesTaken = array();
$sql = "SELECT ClassID FROM EnrollmentSchedule WHERE UserID='$uid'";
$result = $conn->query($sql);
if($result->num_rows > 0){
    while($r = mysqli_fetch_assoc($result)){
        if(in_array($r, $classesTaken)){

        }else{
            $classesTaken[] = $r;
        }
    }
}

$finalClassesWithInfo = array();
$counter = 0;
foreach ($rows as &$key) {
    $foundit = 0;
    foreach ($classesTaken as $keytwo) {
         if(($keytwo['ClassID'] == $key['ClassID'])){
            $foundit = 1;
            break;
         }
     } 
     if($foundit == 0){
        $key['modalNameTarget'] = '#ModalToDo' . $counter;
        $key['modalName'] = 'ModalToDo' . $counter;
        if($key['PreReqIDs'] == '$'){
            $key['PreReqIDs'] = 'None';
        }
        $key['ClassOfferings'] = array();
        $finalClassesWithInfo[] = $key;
     }
     $counter++;
}

$akld = $_POST['ter'];
foreach ($finalClassesWithInfo as &$key) {
    $ade = $key['ClassID'];
    $sql = "SELECT ClassID,SectionID,ClassTime,ClassLocation,ClassInstructor,Semester,ClassCapacity,SeatsTaken FROM ClassSection WHERE ClassID='$ade' AND Semester='$akld'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($r = mysqli_fetch_assoc($result)){
                $key['ClassOfferings'][] = $r;
        }
    }
}
print json_encode($finalClassesWithInfo);
} else {
    echo "{\"first\":{\"response\": \"error\"}}";
}


//end
}else{
$sql = "SELECT ClassID,Credits,EquivalentID,PreReqIDs,CourseTitle,CourseDelivery,CourseDescription FROM Class WHERE ReqID='$reqID'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 $rows = array();
while($r = mysqli_fetch_assoc($result)) {
    if (in_array($r, $rows)) {
    }else{
        $rows[] = $r;
    }
}


$classesTaken = array();
$sql = "SELECT ClassID FROM EnrollmentSchedule WHERE UserID='$uid'";
$result = $conn->query($sql);
if($result->num_rows > 0){
    while($r = mysqli_fetch_assoc($result)){
        if(in_array($r, $classesTaken)){

        }else{
            $classesTaken[] = $r;
        }
    }
}
//make it so you do if not in classesTaken, then add to classesNotTakenWithInfo
$classesTakenWithInfo = array();
foreach ($classesTaken as $hehe) {
    $ade = $hehe['ClassID'];
    $sql = "SELECT ClassID,ReqID,EquivalentID FROM Class WHERE ClassID='$ade' AND ReqID='$reqID'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($r = mysqli_fetch_assoc($result)){
            if(in_array($r, $classesTakenWithInfo)){

            }else{
                $classesTakenWithInfo[] = $r;
            }
        }
    }
}

$finalClassesWithInfo = array();
$counter = 0;
foreach ($rows as &$key) {
    $foundit = 0;
    foreach ($classesTakenWithInfo as $keytwo) {
         if(($keytwo['EquivalentID'] == $key['EquivalentID'] && $keytwo['EquivalentID'] != '$') || ($keytwo['ClassID'] == $key['ClassID'])){
            $foundit = 1;
            break;
         }
     } 
     if($foundit == 0){
        $key['modalNameTarget'] = '#ModalToDo' . $counter;
        $key['modalName'] = 'ModalToDo' . $counter;
        if($key['PreReqIDs'] == '$'){
            $key['PreReqIDs'] = 'None';
        }
        $key['ClassOfferings'] = array();
        $finalClassesWithInfo[] = $key;
     }
     $counter++;
}
$akld = $_POST['ter'];
foreach ($finalClassesWithInfo as &$key) {
    $ade = $key['ClassID'];
    $sql = "SELECT ClassID,SectionID,ClassTime,ClassLocation,ClassInstructor,Semester,ClassCapacity,SeatsTaken FROM ClassSection WHERE ClassID='$ade' AND Semester='$akld'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($r = mysqli_fetch_assoc($result)){
                $key['ClassOfferings'][] = $r;
        }
    }
}
print json_encode($finalClassesWithInfo);
} else {
    echo "{\"first\":{\"response\": \"error\"}}";
}
}
$conn->close();


?>