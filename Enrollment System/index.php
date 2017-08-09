<?

$dbID = $_POST['dbID'];
$term = $_POST['term'];

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

$sql = "SELECT SectionID,ClassID,Grade FROM EnrollmentSchedule WHERE UserID='$dbID' AND Semester='$term'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 $rows = array();
 $classTimes = array(
    '8am' =>
    array(array(),array(),array(),array(),array()),
    '9am' =>
    array(array(),array(),array(),array(),array()),
    '10am' =>
    array(array(),array(),array(),array(),array()),
    '11am' =>
    array(array(),array(),array(),array(),array()),
    '12pm' =>
    array(array(),array(),array(),array(),array()),
    '1pm' =>
    array(array(),array(),array(),array(),array()),
    '2pm' =>
    array(array(),array(),array(),array(),array()),
    '3pm' =>
    array(array(),array(),array(),array(),array()),
    '4pm' =>
    array(array(),array(),array(),array(),array())
    );
 $classInfo = array(
    'color' => 'orange',
    'tooltip' => 'This is a class',
    'ClassID' => 'ID34',
    'grade' => ' Grade: IP',
    'ClassLoc' => 'Loc 180',
    'ClassSectionID' => '823',
    'ClassTime' => '0'
    );
 $classColors = array(
    'orange','purple','blue','green'
    );
 $returnJSON = array(
    'classList' => array(),
    'timeSched' => array()
    );
 $tem = 0;
while($r = mysqli_fetch_assoc($result)) {
    $temp = $classInfo;
    $temp['color'] = $classColors[$tem%4];
    $temp['tooltip'] = $r['ClassID'];
    $temp['ClassID'] = $r['ClassID'];
    $temp['grade'] = " Grade: " . $r['Grade'];
    $temp['ClassLoc'] = "NF";
    $temp['ClassSectionID'] = $r['SectionID'];
    $temp['ClassTime'] = "";  
    $rows[] = $temp;
    $tem = $tem + 1;
    if($tem > 50){
        $tem = 0;
    }
}
foreach($rows as &$classToCheck) {
    $secID = $classToCheck['ClassSectionID'];
    $claID = $classToCheck['ClassID'];
    $sql = "SELECT ClassTime,ClassLocation,ClassInstructor FROM ClassSection WHERE SectionID='$secID' AND ClassID='$claID' AND Semester='$term'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($r = mysqli_fetch_assoc($result)) {
        $classToCheck['ClassTime'] = $r['ClassTime'];
        $classToCheck['ClassLoc'] = $r['ClassLocation'];
        $classToCheck['tooltip'] = $classToCheck['ClassID'] . " " . $classToCheck['ClassTime'] . " " . $r['ClassInstructor'];
        $pieces = explode(" ", trim($classToCheck['ClassTime']));
        $classStartTime = substr($pieces[0],0,strpos($pieces[0],':'));
        $classDays = explode("/",trim($pieces[1]));
        if(strpos($classStartTime, '8') !== false){
            foreach($classDays as $day){
                if($day == 'M'){
                    $classTimes['8am'][0] = $classToCheck; 
                }else if($day == 'T'){
                    $classTimes['8am'][1] = $classToCheck; 
                }else if($day == 'W'){
                    $classTimes['8am'][2] = $classToCheck; 
                }else if($day == 'Th'){
                    $classTimes['8am'][3] = $classToCheck;
                }else if($day == 'F'){
                    $classTimes['8am'][4] = $classToCheck;
                }
            }
        }else if(strpos($classStartTime, '9') !== false){
            foreach($classDays as $day){
                if($day == 'M'){
                    $classTimes['9am'][0] = $classToCheck; 
                }else if($day == 'T'){
                    $classTimes['9am'][1] = $classToCheck; 
                }else if($day == 'W'){
                    $classTimes['9am'][2] = $classToCheck; 
                }else if($day == 'Th'){
                    $classTimes['9am'][3] = $classToCheck;
                }else if($day == 'F'){
                    $classTimes['9am'][4] = $classToCheck;
                }
            }
        }else if(strpos($classStartTime, '10') !== false){
            foreach($classDays as $day){
                if($day == 'M'){
                    $classTimes['10am'][0] = $classToCheck; 
                }else if($day == 'T'){
                    $classTimes['10am'][1] = $classToCheck; 
                }else if($day == 'W'){
                    $classTimes['10am'][2] = $classToCheck; 
                }else if($day == 'Th'){
                    $classTimes['10am'][3] = $classToCheck;
                }else if($day == 'F'){
                    $classTimes['10am'][4] = $classToCheck;
                }
            }
        }else if(strpos($classStartTime, '11') !== false){
            foreach($classDays as $day){
                if($day == 'M'){
                    $classTimes['11am'][0] = $classToCheck; 
                }else if($day == 'T'){
                    $classTimes['11am'][1] = $classToCheck; 
                }else if($day == 'W'){
                    $classTimes['11am'][2] = $classToCheck; 
                }else if($day == 'Th'){
                    $classTimes['11am'][3] = $classToCheck;
                }else if($day == 'F'){
                    $classTimes['11am'][4] = $classToCheck;
                }
            }
        }else if(strpos($classStartTime, '12') !== false){
            foreach($classDays as $day){
                if($day == 'M'){
                    $classTimes['12pm'][0] = $classToCheck; 
                }else if($day == 'T'){
                    $classTimes['12pm'][1] = $classToCheck; 
                }else if($day == 'W'){
                    $classTimes['12pm'][2] = $classToCheck; 
                }else if($day == 'Th'){
                    $classTimes['12pm'][3] = $classToCheck;
                }else if($day == 'F'){
                    $classTimes['12pm'][4] = $classToCheck;
                }
            }
        }else if(strpos($classStartTime, '1') !== false){
            foreach($classDays as $day){
                if($day == 'M'){
                    $classTimes['1pm'][0] = $classToCheck; 
                }else if($day == 'T'){
                    $classTimes['1pm'][1] = $classToCheck; 
                }else if($day == 'W'){
                    $classTimes['1pm'][2] = $classToCheck; 
                }else if($day == 'Th'){
                    $classTimes['1pm'][3] = $classToCheck;
                }else if($day == 'F'){
                    $classTimes['1pm'][4] = $classToCheck;
                }
            }
        }else if(strpos($classStartTime, '2') !== false){
            foreach($classDays as $day){
                if($day == 'M'){
                    $classTimes['2pm'][0] = $classToCheck; 
                }else if($day == 'T'){
                    $classTimes['2pm'][1] = $classToCheck; 
                }else if($day == 'W'){
                    $classTimes['2pm'][2] = $classToCheck; 
                }else if($day == 'Th'){
                    $classTimes['2pm'][3] = $classToCheck;
                }else if($day == 'F'){
                    $classTimes['2pm'][4] = $classToCheck;
                }
            }
        }else if(strpos($classStartTime, '3') !== false){
            foreach($classDays as $day){
                if($day == 'M'){
                    $classTimes['3pm'][0] = $classToCheck; 
                }else if($day == 'T'){
                    $classTimes['3pm'][1] = $classToCheck; 
                }else if($day == 'W'){
                    $classTimes['3pm'][2] = $classToCheck; 
                }else if($day == 'Th'){
                    $classTimes['3pm'][3] = $classToCheck;
                }else if($day == 'F'){
                    $classTimes['3pm'][4] = $classToCheck;
                }
            }
        }else if(strpos($classStartTime, '4') !== false){
            foreach($classDays as $day){
                if($day == 'M'){
                    $classTimes['4pm'][0] = $classToCheck; 
                }else if($day == 'T'){
                    $classTimes['4pm'][1] = $classToCheck; 
                }else if($day == 'W'){
                    $classTimes['4pm'][2] = $classToCheck; 
                }else if($day == 'Th'){
                    $classTimes['4pm'][3] = $classToCheck;
                }else if($day == 'F'){
                    $classTimes['4pm'][4] = $classToCheck;
                }
            }
        }
        break;
    }
}
}
$returnJSON['classList'] = $rows;
$returnJSON['timeSched'] = $classTimes;
print json_encode($returnJSON);
} else {
    echo "{\"first\":{\"response\": \"error\"}}";
}
$conn->close();
?>