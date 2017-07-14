<? 
/*
$link = mysql_connect('cse.unl.edu:3306', 'tfellbaum', 'AW3SOM3NESs');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
$dbname = "tfellbaum";
mysql_select_db($dbname) or die("Could not open the db '$dbname'");
$test_query = "SHOW TABLES FROM $dbname";
$result = mysql_query($test_query);
$tblCnt = 0;
while($tbl = mysql_fetch_array($result)) {
  $tblCnt++;
  #echo $tbl[0]."<br />\n";
}
if (!$tblCnt) {
  echo "There are no tables<br />\n";
} else {
  echo "There are $tblCnt tables<br />\n";
}
mysql_close($link);
*/
if($_POST['un'] == 'ad' && $_POST['up'] == 'ad')
echo "verified";
else
	echo "error";

?>