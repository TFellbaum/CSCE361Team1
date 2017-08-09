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

$sql = "SELECT * FROM Class";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 $rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
foreach ($rows as &$key) {
	$key['ModalTarget'] = "#ModalName" . str_replace(' ', '', $key['ClassID']);
	$key['ModalName'] = "ModalName".str_replace(' ', '', $key['ClassID']);
	$key['IDCN'] = "MDID".str_replace(' ', '', $key['ClassID']);
	$key['IDCC'] = "MIAD".str_replace(' ', '', $key['ClassID']);
	$key['IDEI'] = "MDED".str_replace(' ', '', $key['ClassID']);
	$key['IDPR'] = "MIQD".str_replace(' ', '', $key['ClassID']);
	$key['IDDV'] = "MDHD".str_replace(' ', '', $key['ClassID']);
	$key['IDDS'] = "MLID".str_replace(' ', '', $key['ClassID']);
}
print json_encode($rows);
} else {
    echo "{\"first\":{\"response\": \"error\"}}";
}
$conn->close();



?>