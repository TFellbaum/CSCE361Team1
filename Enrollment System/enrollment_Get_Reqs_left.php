<?

$majID = $_POST['majID'];
$uID = $_POST['uid'];
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

$sql = "SELECT ReqID FROM Major WHERE MajorID='$majID'";
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
$sql = "SELECT ClassID FROM EnrollmentSchedule WHERE UserID='$uID'";
$result = $conn->query($sql);
if($result->num_rows > 0){
    while($r = mysqli_fetch_assoc($result)){
        if(in_array($r, $classesTaken)){

        }else{
            $classesTaken[] = $r;
        }
    }
}
$classesTakenWithInfo = array();
foreach ($classesTaken as $hehe) {
    $ade = $hehe['ClassID'];
    $sql = "SELECT ClassID,Credits,ReqID,EquivalentID,CreditsAllowed FROM Class WHERE ClassID='$ade'";
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
foreach ($classesTakenWithInfo as $key) {
    $foundit = 0;
    foreach ($finalClassesWithInfo as $keytwo) {
         if($keytwo['ReqID'] == $key['ReqID'] && $keytwo['EquivalentID'] == $key['EquivalentID'] && $keytwo['EquivalentID'] != '$'){
            $foundit = 1;
         }
     } 
     if($foundit == 0){
        $finalClassesWithInfo[] = $key;
     }
}


foreach ($rows as &$ri) {
    $ri['TotalCreditsTaken'] = 0;
    foreach ($finalClassesWithInfo as $ked) {
        if($ked['ReqID'] == $ri['ReqID']){
            $ri['TotalCreditsTaken'] += $ked['CreditsAllowed'];
        }
    }
}


$rowsFinal = array();

foreach($rows as $re){
	$kl = $re['ReqID'];
	$sql = "SELECT CollegeReqID,Requirement,CreditsNeeded FROM CollegeRequirements WHERE CollegeReqID='$kl'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
while($rFinal = mysqli_fetch_assoc($result)) {
    if (in_array($rFinal, $rowsFinal)) {
    }else{
        if($re['TotalCreditsTaken'] < intval($rFinal['CreditsNeeded'])){
            $rowsFinal[] = $rFinal;
        }
    }
}
}
}
$adf = array('Requirement' => 'Electives/All Classes', 'TotalCreditsTaken' => '0', 'CollegeReqID' => '-1');
$rowsFinal[] = $adf;
print json_encode($rowsFinal);
} else {
    echo "{\"first\":{\"response\": \"error\"}}";
}
$conn->close();


?>