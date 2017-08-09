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

$sql = "SELECT * FROM Minor";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 $rows = array();
while($r = mysqli_fetch_assoc($result)) {
	$found = 0;
	$count = 0;
	for ($count = 0; $count < count($rows); $count++) {
		if($rows[$count]['MinorID'] == $r['MinorID']){
			$found = 1;
			break;
		}
	}
	if($found == 0){
    $rows[] = $r;
	}else{
		$rows[$count]['ReqID'] = $rows[$count]['ReqID'].','.$r['ReqID'];
	}
}
foreach ($rows as &$key) {
	$key['ModalTarget'] = "#ModalName" .str_replace(' ', '', $key['MinorID']);
	$key['ModalName'] = "ModalName".str_replace(' ', '', $key['MinorID']);
	$key['IDMD'] = "MDID".str_replace(' ', '', $key['MinorID']);
	$key['IDCR'] = "MIID".str_replace(' ', '', $key['MinorID']);
}
print json_encode($rows);
} else {
    echo "{\"first\":{\"response\": \"error\"}}";
}
$conn->close();



?>