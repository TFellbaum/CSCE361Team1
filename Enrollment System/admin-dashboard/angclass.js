var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
        $scope.logMeIn = function(){
                if($scope.uname === ""){
                    return;
                }else{
                    var data = "un=" + $scope.uname.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}) + "&up=" + $scope.upass.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
                    $http({
                method: 'POST', url: 'login.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Invalid Credentials");
                }else{
                    sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    //TODO ask josh about naming
                    window.location.href = 'edit-students.html';
                }
            });
                }
        };
});
angular.module('app', [
  'ngSanitize'
]);
app.controller('editSCtrl', function($scope,$http){
    $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.listOfStudents = [];
    var data = "";
                    $http({
                method: 'POST', url: 'getStudentInfo.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    var counter = 0;
                    while(data[counter]){
                        $scope.listOfStudents.push(data[counter]);
                        counter++;
                    }
                }
            });

            $scope.updateStudent = function(index){
                var data = "uid=" + $scope.listOfStudents[index]['UserID'] + "&fname=" + document.getElementById($scope.listOfStudents[index]['IDFN']).value + "&lname=" + document.getElementById($scope.listOfStudents[index]['IDLN']).value + "&pass=" + document.getElementById($scope.listOfStudents[index]['IDPA']).value + "&maj=" + document.getElementById($scope.listOfStudents[index]['IDMD']).value + "&min=" + document.getElementById($scope.listOfStudents[index]['IDMI']).value + "&ter=" + document.getElementById($scope.listOfStudents[index]['IDSS']).value + "&username=" + document.getElementById($scope.listOfStudents[index]['IDUN']).value;
                    $http({
                method: 'POST', url: 'updateStudents.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                   window.location.href = 'edit-students.html';
                }
            });
            };

            $scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };

});
app.controller('deleteStudentsCtrl', function($scope,$http){
       $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.listOfStudents = [];
    var data = "";
                    $http({
                method: 'POST', url: 'getStudentInfo.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    var counter = 0;
                    while(data[counter]){
                        $scope.listOfStudents.push(data[counter]);
                        counter++;
                    }
                }
            });
                //TODO: Make sure to remove student from all db tables

    $scope.deleteThisStudent = function(index){
        var data = "uidToRemove=" + $scope.listOfStudents[index]['UserID'];
        $http({
                method: 'POST', url: 'removeStudent.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    window.location.href = 'delete-students.html';
                }
            });
    };

$scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };
});



app.controller('addStudentCtrl', function($scope,$http){
        $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.message = "";
    $scope.addStudent = function(){
        if(document.getElementById("uid").value != null && document.getElementById("uid").value != ""){
            var data = "uid=" + document.getElementById("uid").value + "&fname=" + document.getElementById("fname").value + "&lname=" + document.getElementById("lname").value + "&pass=" + document.getElementById("upass").value + "&maj=" + document.getElementById("maj").value + "&min=" + document.getElementById("min").value + "&ter=" + document.getElementById("term").value + "&username=" + document.getElementById("uname").value;
            $http({
                method: 'POST', url: 'addStudent.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    $scope.message = "An error occured. Make sure user id is not currently in the database!";
                }else{
                    $scope.message = 'Student Added!';
                }
            });
        }
    };
$scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };
    
});




//TODO: Modify for each 


app.controller('editMajorsCtrl', function($scope,$http){
    $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.listOfMajors = [];
    var data = "";
                    $http({
                method: 'POST', url: 'getMajorInfo.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    var counter = 0;
                    while(data[counter]){
                        $scope.listOfMajors.push(data[counter]);
                        counter++;
                    }
                }
            });

            $scope.updateMajor = function(index){
                var count = 0;
                var id = document.getElementById($scope.listOfMajors[index]['IDMD']).value;
                if(id == ""){
                    alert("Add a major id");
                    return;
                }
                var arr = document.getElementById($scope.listOfMajors[index]['IDCR']).value.split(",");
                if(document.getElementById($scope.listOfMajors[index]['IDCR']).value == ""){
                    alert("Add some requirements");
                    return;
                }
                if(arr.length > 0){
                    var data = "majIDToRemove=" + $scope.listOfMajors[index]['MajorID'];
                    $http({
                method: 'POST', url: 'removeMajor.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{

                   while(arr[count]){

                        var data = "majNewID=" + id + "&newReq=" + arr[count];
                        $http({
                method: 'POST', url: 'updateMajor.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }
            });
                        count++;
                    }
                    alert("Success. Reload page to view changes.");

                }
            });
                    
                    
                }
            };
$scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };
});

app.controller('addMajorCtrl', function($scope,$http){
        $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.message = "";
    $scope.addMajor = function(){
        var id = document.getElementById("uid").value;
        if(id != null && id != ""){
            var count = 0;
            if(document.getElementById("reqs").value == null || document.getElementById("reqs").value == ""){
                $scope.message = "Add reqs please";
                return;
            }
                var arr = document.getElementById("reqs").value.split(",");
                if(arr.length > 0){
                   while(arr[count]){
                        var data = "majNewID=" + id + "&newReq=" + arr[count];
                        $http({
                method: 'POST', url: 'updateMajor.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    $scope.message = "Cant reach server try again.";
                    return;
                }
            });
                        count++;
                    }
                    $scope.message = "Success!";
                    
                    
                }
        }else{
            $scope.message = "Please insert a major id";
        }
    };
$scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };
    
});


app.controller('deleteMajorCtrl', function($scope,$http){
       $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.listOfMajors = [];
    var data = "";
                    $http({
                method: 'POST', url: 'getMajorInfo.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    var counter = 0;
                    while(data[counter]){
                        $scope.listOfMajors.push(data[counter]);
                        counter++;
                    }
                }
            });
                //TODO: Make sure to remove student from all db tables

    $scope.deleteThisMajor = function(index){
        var data = "majIDToRemove=" + $scope.listOfMajors[index]['MajorID'];
        $http({
                method: 'POST', url: 'removeMajor.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    window.location.href = 'delete-majors.html';
                }
            });
    };
    $scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };

});



/*
addThisClass
*/
app.controller('addClassCtrl', function($scope,$http){
        $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.message = "";
    $scope.addThisClass = function(){
        var id = document.getElementById("classID").value;
        if(id != null && id != ""){
            var count = 0;
            if(document.getElementById("sectionNumber").value == null || document.getElementById("sectionNumber").value == ""){
                //do no section insert
                var data = "classID=" + document.getElementById("classID").value + "&classCredits=" + document.getElementById("classCredits").value + "&req=" + document.getElementById("req").value
                + "&eqID=" + document.getElementById("eqID").value + "&reqCreds=" + document.getElementById("reqCreds").value + "&preReqs=" + document.getElementById("preReqs").value
                + "&classTitle=" + document.getElementById("classTitle").value + "&classDelivery=" + document.getElementById("classDelivery").value
                + "&classDescription=" + document.getElementById("classDescription").value;
            $http({
                method: 'POST', url: 'addClassNoSection.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    $scope.message = "Class not added!";
                }else{
                    $scope.message = "Success! Class Added!";
                }
            });

            }else{
                //do section insert
                var data = "classID=" + document.getElementById("classID").value + "&classCredits=" + document.getElementById("classCredits").value + "&req=" + document.getElementById("req").value
                + "&eqID=" + document.getElementById("eqID").value + "&reqCreds=" + document.getElementById("reqCreds").value + "&preReqs=" + document.getElementById("preReqs").value
                + "&classTitle=" + document.getElementById("classTitle").value + "&classDelivery=" + document.getElementById("classDelivery").value
                + "&classDescription=" + document.getElementById("classDescription").value + "&sectionNumber=" + document.getElementById("sectionNumber").value
                + "&classTime=" + document.getElementById("classTime").value + "&classLocation=" + document.getElementById("classLocation").value + "&instructor=" 
                + document.getElementById("instructor").value + "&term=" + document.getElementById("term").value + "&ccap=" + document.getElementById("ccap").value;
        $http({
                method: 'POST', url: 'addClass.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    $scope.message = "An error occured while adding this section and class";
                }else{
                    $scope.message = "Success! Class Added and Section Added!";
                }
            });
            }
                
        }else{
            $scope.message = "Please insert a class id";
        }
    };

    $scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };
});

app.controller('deleteClassCtrl', function($scope,$http){
       $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.listOfClasses = [];
    var data = "";
                    $http({
                method: 'POST', url: 'getClassInfo.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    var counter = 0;
                    while(data[counter]){
                        $scope.listOfClasses.push(data[counter]);
                        counter++;
                    }
                }
            });
                //TODO: Make sure to remove student from all db tables

    $scope.deleteThisClass = function(index){
        var data = "classID=" + $scope.listOfClasses[index]['ClassID'];
        $http({
                method: 'POST', url: 'removeClass.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    window.location.href = 'delete-classes.html';
                }
            });
    };
$scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };
});

//editClassCtrl
app.controller('editClassCtrl', function($scope,$http){
       $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.listOfClasses = [];
    var data = "";
                    $http({
                method: 'POST', url: 'getClassInfo.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    var counter = 0;
                    while(data[counter]){
                        $scope.listOfClasses.push(data[counter]);
                        counter++;
                    }
                }
            });
                //TODO: Make sure to remove student from all db tables

    $scope.editThisClass = function(index){
        var data = "classID=" + $scope.listOfClasses[index]['ClassID']
        + "&ct=" + document.getElementById($scope.listOfClasses[index]['IDCN']).value
        + "&ce=" + document.getElementById($scope.listOfClasses[index]['IDCC']).value
        + "&eq=" + document.getElementById($scope.listOfClasses[index]['IDEI']).value
        + "&preq=" + document.getElementById($scope.listOfClasses[index]['IDPR']).value
        + "&cdev=" + document.getElementById($scope.listOfClasses[index]['IDDV']).value
        + "&cd=" + document.getElementById($scope.listOfClasses[index]['IDDS']).value;

        $http({
                method: 'POST', url: 'editClass.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    alert("Success! Reload page to view updated values!");
                }
            });
    };
$scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };
});


app.controller('editMinorsCtrl', function($scope,$http){
    $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.listOfMinors = [];
    var data = "";
                    $http({
                method: 'POST', url: 'getMinorInfo.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    var counter = 0;
                    while(data[counter]){
                        $scope.listOfMinors.push(data[counter]);
                        counter++;
                    }
                }
            });

            $scope.updateMinor = function(index){
                var count = 0;
                var id = document.getElementById($scope.listOfMinors[index]['IDMD']).value;
                if(id == ""){
                    alert("Add a Minor id");
                    return;
                }
                var arr = document.getElementById($scope.listOfMinors[index]['IDCR']).value.split(",");
                if(document.getElementById($scope.listOfMinors[index]['IDCR']).value == ""){
                    alert("Add some requirements");
                    return;
                }
                if(arr.length > 0){
                    var data = "majIDToRemove=" + $scope.listOfMinors[index]['MinorID'];
                    $http({
                method: 'POST', url: 'removeMinor.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{

                   while(arr[count]){

                        var data = "majNewID=" + id + "&newReq=" + arr[count];
                        $http({
                method: 'POST', url: 'updateMinor.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }
            });
                        count++;
                    }
                    alert("Success. Reload page to view changes.");

                }
            });
                    
                    
                }
            };
$scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };
});

app.controller('addMinorCtrl', function($scope,$http){
        $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.message = "";
    $scope.addMinor = function(){
        var id = document.getElementById("uid").value;
        if(id != null && id != ""){
            var count = 0;
            if(document.getElementById("reqs").value == null || document.getElementById("reqs").value == ""){
                $scope.message = "Add reqs please";
                return;
            }
                var arr = document.getElementById("reqs").value.split(",");
                if(arr.length > 0){
                   while(arr[count]){
                        var data = "majNewID=" + id + "&newReq=" + arr[count];
                        $http({
                method: 'POST', url: 'updateMinor.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    $scope.message = "Cant reach server try again.";
                    return;
                }
            });
                        count++;
                    }
                    $scope.message = "Success!";
                    
                    
                }
        }else{
            $scope.message = "Please insert a Minor id";
        }
    };
$scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };
    
});


app.controller('deleteMinorCtrl', function($scope,$http){
       $scope.dbID = sessionStorage.getItem('dbID');
    $scope.fname = sessionStorage.getItem('FirstName');
    if($scope.dbID == undefined || $scope.fname == undefined || $scope.dbID == "" || $scope.fname == ""){
        window.location.href = 'login.html';
    }
    $scope.listOfMinors = [];
    var data = "";
                    $http({
                method: 'POST', url: 'getMinorInfo.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    var counter = 0;
                    while(data[counter]){
                        $scope.listOfMinors.push(data[counter]);
                        counter++;
                    }
                }
            });
                //TODO: Make sure to remove student from all db tables

    $scope.deleteThisMinor = function(index){
        var data = "majIDToRemove=" + $scope.listOfMinors[index]['MinorID'];
        $http({
                method: 'POST', url: 'removeMinor.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Cant reach server try again.");
                }else{
                    window.location.href = 'delete-minors.html';
                }
            });
    };
$scope.logMeOut = function(){
                sessionStorage.setItem('FirstName',data['FirstName']);
                    sessionStorage.setItem('dbID',data['UserID']);
                    window.location.href = 'login.html';
                };
});


