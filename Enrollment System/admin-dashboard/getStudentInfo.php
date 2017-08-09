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

$sql = "SELECT * FROM Student";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 $rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
foreach ($rows as &$key) {
	$key['ModalTarget'] = "#ModalName" .str_replace(' ', '', $key['UserID']);
	$key['ModalName'] = "ModalName".str_replace(' ', '', $key['UserID']);
	$key['IDFN'] = "FNID".str_replace(' ', '', $key['UserID']);
	$key['IDLN'] = "LNID".str_replace(' ', '', $key['UserID']);
	$key['IDUN'] = "UNID".str_replace(' ', '', $key['UserID']);
	$key['IDPA'] = "PAID".str_replace(' ', '', $key['UserID']);
	$key['IDMD'] = "MDID".str_replace(' ', '', $key['UserID']);
	$key['IDMI'] = "MIID".str_replace(' ', '', $key['UserID']);
	$key['IDSS'] = "SSID".str_replace(' ', '', $key['UserID']);
}
print json_encode($rows);
} else {
    echo "{\"first\":{\"response\": \"error\"}}";
}
$conn->close();



?>