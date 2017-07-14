<?

$dbID = $_POST['dbID'];
$term = $_POST['term'];

$arr = array(
        array(
            'ClassID' => 'CSCE 156',
            'color' => 'orange',
            'ClassLoc' => 'AVH 18',
            'dtooltip' => 'Computer Science II MWF 2:00 - 3:00 Hasan',
            'm2' => 'y',
            'w2' => 'y',
            'f2' => 'y'
        ), array(
            'ClassID' => 'CSCE 156L',
            'color' => 'orange',
            'ClassLoc' => 'AVH 18',
            'dtooltip' => 'Computer Science II W 2:30 - 3:20 Hasan',
            'w2' => 'y'
        ), array(
            'ClassID' => 'CSCE 310H',
            'color' => 'silver',
            'ClassLoc' => 'AVH 113',
            'dtooltip' => 'Honors Algorithms MWF 11:30 - 12:20 Riedesel',
            'm11' => 'y',
            'w11' => 'y',
            'f11' => 'y'
        ), array(
            'ClassID' => 'CSCE 322',
            'color' => 'green',
            'ClassLoc' => 'AVH 120',
            'dtooltip' => 'Programming Language Concepts TTh 9:30 - 10:45 Patrick',
            't9' => 'y',
            'th9' => 'y'
        ), array(
            'ClassID' => 'CSCE 361',
            'color' => 'blue',
            'ClassLoc' => 'AVH 119',
            'dtooltip' => 'Software Engineering MWF 8:30 - 9:20 Bohn',
            'm8' => 'y',
            'w8' => 'y',
            'f8' => 'y'
        ), array(
            'ClassID' => 'MATH 380',
            'color' => 'purple',
            'ClassLoc' => 'RH 15',
            'dtooltip' => "Statistics TTh11:00 - 12:15 Hasan",
            't11' => 'y',
            'th11' => 'y'
        ));

$arr2 = array(
        array(
            'ClassID' => 'CSCE 156',
            'color' => 'orange',
            'ClassLoc' => 'AVH 18',
            'dtooltip' => 'Computer Science II MWF 2:00 - 3:00 Hasan',
            'm2' => 'y',
            'w2' => 'y',
            'f2' => 'y'
        ), array(
            'ClassID' => 'CSCE 156L',
            'color' => 'orange',
            'ClassLoc' => 'AVH 18',
            'dtooltip' => 'Computer Science II W 2:30 - 3:20 Hasan',
            'w2' => 'y'
        ), array(
            'ClassID' => 'CSCE 310H',
            'color' => 'silver',
            'ClassLoc' => 'AVH 113',
            'dtooltip' => 'Honors Algorithms MWF 11:30 - 12:20 Riedesel',
            'm11' => 'y',
            'w11' => 'y',
            'f11' => 'y'
        ), array(
            'ClassID' => 'CSCE 322',
            'color' => 'green',
            'ClassLoc' => 'AVH 120',
            'dtooltip' => 'Programming Language Concepts TTh 9:30 - 10:45 Patrick',
            't9' => 'y',
            'th9' => 'y'
        ), array(
            'ClassID' => 'CSCE 361',
            'color' => 'blue',
            'ClassLoc' => 'AVH 119',
            'dtooltip' => 'Software Engineering MWF 8:30 - 9:20 Bohn',
            'm8' => 'y',
            'w8' => 'y',
            'f8' => 'y'
        ), array(
            'ClassID' => 'MATH 380',
            'color' => 'purple',
            'ClassLoc' => 'RH 15',
            'dtooltip' => "Statistics TTh11:00 - 12:15 Hasan",
            't11' => 'y',
            'th11' => 'y'
        ));

$arr3 = array(
        array(
            'ClassID' => 'CSCE 156',
            'color' => 'orange',
            'ClassLoc' => 'AVH 18',
            'dtooltip' => 'Computer Science II MWF 2:00 - 3:00 Hasan',
            'm2' => 'y',
            'w2' => 'y',
            'f2' => 'y'
        ), array(
            'ClassID' => 'CSCE 156L',
            'color' => 'orange',
            'ClassLoc' => 'AVH 18',
            'dtooltip' => 'Computer Science II  W 2:30 - 3:20 Hasan',
            'w2' => 'y'
        ), array(
            'ClassID' => 'CSCE 310H',
            'color' => 'silver',
            'ClassLoc' => 'AVH 113',
            'dtooltip' => 'Honors Algorithms MWF 11:30 - 12:20 Riedesel',
            'm11' => 'y',
            'w11' => 'y',
            'f11' => 'y'
        ), array(
            'ClassID' => 'CSCE 322',
            'color' => 'green',
            'ClassLoc' => 'AVH 120',
            'dtooltip' => 'Programming Language Concepts TTh 9:30 - 10:45 Patrick',
            't9' => 'y',
            'th9' => 'y'
        ), array(
            'ClassID' => 'CSCE 361',
            'color' => 'blue',
            'ClassLoc' => 'AVH 119',
            'dtooltip' => 'Software Engineering MWF 8:30 - 9:20 Bohn',
            'm8' => 'y',
            'w8' => 'y',
            'f8' => 'y'
        ), array(
            'ClassID' => 'MATH 380',
            'color' => 'purple',
            'ClassLoc' => 'RH 15',
            'dtooltip' => "Statistics TTh11:00 - 12:15 Hasan",
            't11' => 'y',
            'th11' => 'y'
        ));
if($term == "summer"){
	echo json_encode($arr);
}else if($term == "fall"){
	echo json_encode($arr2);
}else if($term == "spring"){
	echo json_encode($arr3);
}
?>