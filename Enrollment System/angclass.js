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
                    
                    sessionStorage.setItem('dbID', data[0]['UserID']);
                    sessionStorage.setItem('majorID',data[0]['MajorID']);
                    sessionStorage.setItem('startTerm',data[0]['SemesterStart']);
                    sessionStorage.setItem('cart',JSON.stringify([]));
                    //TODO ask josh about naming
                    window.location.href = 'index.html';
                }
            });
                }
        };
        $scope.rot13 = function(str){
var codeA = "A".charCodeAt(0);
var codeN = "N".charCodeAt(0);
var codeZ = "Z".charCodeAt(0);
var newArr = [];

for(var i =0; i<str.length; i++){
    var code = str.charCodeAt(i);
    if(code>=codeA && code<=codeZ){
        if(code>=codeN)
            newArr.push(String.fromCharCode(code-13));
        else
            newArr.push(String.fromCharCode(code+13));
    }else{
        newArr.push(str[i]);}
    }
     return newArr.join("");
 };
});
angular.module('app', [
  'ngSanitize'
]);
app.controller('indexCtrl', function($scope,$http){
    $scope.dbID = sessionStorage.getItem('dbID');
    $scope.enrolledTerm = sessionStorage.getItem('startTerm');
    $scope.terms = [];
    $scope.shownTerm = "";
    $scope.classList = [];
$scope.am8ClassList = [];
                    $scope.am9ClassList = [];
                    $scope.am10ClassList = [];
                    $scope.am11ClassList = [];
                    $scope.pm12ClassList = [];
                    $scope.pm1ClassList = [];
                    $scope.pm2ClassList = [];
                    $scope.pm3ClassList = [];
$scope.pm4ClassList = [];


    $scope.changeSem = function(indexToGo){
                $scope.classList = [];
                $scope.am8ClassList = [];
                    $scope.am9ClassList = [];
                    $scope.am10ClassList = [];
                    $scope.am11ClassList = [];
                    $scope.pm12ClassList = [];
                    $scope.pm1ClassList = [];
                    $scope.pm2ClassList = [];
                    $scope.pm3ClassList = [];
$scope.pm4ClassList = [];
                if(indexToGo >= 0){
                    $scope.shownTerm =  $scope.terms[indexToGo];
                }
                var data = "dbID=" + $scope.dbID + "&term=" + $scope.shownTerm;
                    $http({
                method: 'POST', url: 'index.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Server Failure");
                }else{

                var count = 0;
                while (data['classList'][count]) {
                    $scope.classList.push(data['classList'][count]);
                    count++;
                }
                $scope.am8ClassList = data['timeSched']['8am'];
                    $scope.am9ClassList = data['timeSched']['9am'];
                    $scope.am10ClassList = data['timeSched']['10am'];
                    $scope.am11ClassList = data['timeSched']['11am'];
                    $scope.pm12ClassList = data['timeSched']['12pm'];
                    $scope.pm1ClassList = data['timeSched']['1pm'];
                    $scope.pm2ClassList = data['timeSched']['2pm'];
                    $scope.pm3ClassList = data['timeSched']['3pm'];
$scope.pm4ClassList = data['timeSched']['4pm']; 
                }             
            });
        };
    var data = "dbID=" + $scope.dbID;
                    $http({
                method: 'POST', url: 'index_Get_terms.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                var count = 0;
                while (data[count]) {
                    $scope.terms.push(data[count]['Semester']);
                    if(count == 0){
                        $scope.shownTerm = $scope.terms[0];
                        $scope.changeSem(0);
                    }
                    count++;
                }               
            });

            $scope.logMeOut = function(){
            	                    sessionStorage.setItem('dbID', "");
                    sessionStorage.setItem('majorID',"");
                    sessionStorage.setItem('startTerm',"");
                    sessionStorage.setItem('cart',"");
                    window.location.href = 'login.html';
                };
});
app.controller('browseCtrl', function($scope,$http){
    $scope.dbID = sessionStorage.getItem('dbID');
    $scope.enrolledTerm = sessionStorage.getItem('startTerm');
    $scope.majID = sessionStorage.getItem('majorID');
    $scope.reqs = [];
    $scope.shownReq = "";
    $scope.classesForReqs = [];
    $scope.searchTerm = "";
    $scope.findClasses = function(){
        var sortArray = [];
        var counter = 0;
        var tempArFS = [];
        if($scope.searchTerm == ""){
                return;
        }
        while($scope.classesForReqs[counter]){
            var counterInTemp = 0;
            var tru = 0;
            tempArFS = $scope.searchTerm.split(" ");
            while(tempArFS[counterInTemp]){
                if(!($scope.classesForReqs[counter]['ClassID'].toLowerCase().includes(tempArFS[counterInTemp].toLowerCase())) && !($scope.classesForReqs[counter]['CourseTitle'].toLowerCase().includes(tempArFS[counterInTemp].toLowerCase()))){
                    tru = 1;
                    break;   
                }
                counterInTemp++;
            }
            if(tru == 0){
                sortArray.push($scope.classesForReqs[counter]);
            }
            counter++;
        }
        if(sortArray.length == 0){
            alert("No classes found matching search term: " + $scope.searchTerm + ". Inside the requirement: " + $scope.shownReq);
        }else{
            $scope.classesForReqs = sortArray;
        }

    };
    $scope.pleaseJosh = function(indexToCH,classer,toadd){
        var tem = JSON.parse(sessionStorage.getItem('cart'));
        var co = 0;
        while(tem[co]){
            if(tem[co]['SectionID'] == classer[indexToCH]['SectionID'] && tem[co]['ClassInstructor'] == classer[indexToCH]['ClassInstructor']){
                alert("This class section is already in your cart!");
                return;
            }
            co++;
        }

        classer[indexToCH].Credits = toadd.Credits;
        classer[indexToCH].ModalName = "#ModalName"+(tem.length+1);
        classer[indexToCH].Modal = "ModalName"+(tem.length+1);
        classer[indexToCH].ModalHideAction = "$('#ModalName" + (tem.length+1) + "').modal('hide');";
        tem.push(classer[indexToCH]);
        sessionStorage.setItem('cart',JSON.stringify(tem));
        if(sessionStorage.getItem('cart') == JSON.stringify(tem)){
                    alert("Class section " + classer[indexToCH]['SectionID'] + " was successfully added to your cart!");
        }else{
            alert("There was a problem with adding this section to your cart. Please try again");
        }

    };
    $scope.sortThisBy = function(type,indexT){
        var sortArray = $scope.classesForReqs[indexT]['ClassOfferings'];
        if(type == 0){
            sortArray.sort(function(a,b) {
            if ( a.ClassInstructor.toLowerCase() < b.ClassInstructor.toLowerCase() )
                return -1;
            if ( a.ClassInstructor.toLowerCase() > b.ClassInstructor.toLowerCase() )
                return 1;
            return 0;
       });
    }else if(type == 1){
            sortArray.sort(function(a,b) {
                var aTimeStart = a.ClassTime.split(":");
                var bTimeStart = b.ClassTime.split(":");
                if(aTimeStart[0] >= 8){
                    if(bTimeStart[0] < 8){
                        return -1;
                    }else{
                        if(bTimeStart[0] < aTimeStart[0]){
                            return -1;
                        }else if(bTimeStart > aTimeStart[0]){
                            return 1;
                        }
                        return 0;
                    }
                }else{
                    if(bTimeStart[0] >= 8){
                        return 1;
                    }else{
                        if(bTimeStart[0] > aTimeStart[0]){
                            return -1;
                        }else if(bTimeStart[0] < aTimeStart[0]){
                            return 1;
                        }
                        return 0;
                    }
                }
    });
        }
        $scope.classesForReqs[indexT]['ClassOfferings'] = sortArray;
    };
    $scope.changeReq = function(indexToGo){
                if(indexToGo >= 0){
                    $scope.shownReq =  $scope.reqs[indexToGo]['Requirement'];
                }
                var data = "reqID=" + $scope.reqs[indexToGo]['CollegeReqID'] + "&uid=" + $scope.dbID + "&ter=" + $scope.enrolledTerm;
                    $http({
                method: 'POST', url: 'getClassesForReq.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Server Failure");
                }else{
                    var count = 0;
                    $scope.classesForReqs = [];
                    while(data[count]){
                        //populate pills here
                        $scope.classesForReqs.push(data[count]);
                        count++;
                    }
                }               
            });
        };
        var data = "majID=" + $scope.majID + "&uid=" + $scope.dbID;
                    $http({
                method: 'POST', url: 'enrollment_Get_Reqs_left.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if('first' in data){
                    alert("Server Failure");
                }else{
                    var count = 0;
                    while(data[count]){
                        $scope.reqs.push(data[count]);
                        if(count == 0){
                            $scope.changeReq(0);
                        }
                        count++;
                    }
                }               
            });

             $scope.logMeOut = function(){
            	                    sessionStorage.setItem('dbID', "");
                    sessionStorage.setItem('majorID',"");
                    sessionStorage.setItem('startTerm',"");
                    sessionStorage.setItem('cart',"");
                    window.location.href = 'login.html';
                };

});



app.controller('enrollmentCtrl', function($scope,$http){
    $scope.dbID = sessionStorage.getItem('dbID');
    $scope.enrolledTerm = sessionStorage.getItem('startTerm');
    $scope.majID = sessionStorage.getItem('majorID');
    $scope.cartObjects = JSON.parse(sessionStorage.getItem('cart'));
    $scope.totalHours = 0;
    var counterer = 0;
    while($scope.cartObjects[counterer]){
        $scope.totalHours += parseInt($scope.cartObjects[counterer]['Credits']);
        counterer++;
    }
    $scope.removeThisClass = function(index){
        var newArr = [];
        var counter = 0;
        while($scope.cartObjects[counter]){
            if(counter != index){
                newArr.push($scope.cartObjects[counter]);
            }
            counter++;
        }
        sessionStorage.setItem('cart',JSON.stringify(newArr));
        window.location.href = 'enrollment.html';

    };

    $scope.enrollUserIntoTheseClasses = function(){
        var counter = 0;
                    var stuffToRemove = [];
                    if($scope.totalHours >= 21){
                        alert("Too many credits! Get lower than 21!");
                        return;
                    }
        while($scope.cartObjects[counter]){
            var data = "uid=" + $scope.dbID + "&secID=" + $scope.cartObjects[counter]['SectionID'] + "&clID=" + $scope.cartObjects[counter]['ClassID'] + "&crDT=" + $scope.cartObjects[counter]['Credits'] + "&ter=" + $scope.enrolledTerm;
                    $http({
                method: 'POST', url: 'addClassToEnrolled.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){ 
            });
            counter++;
        }
        $scope.cartObjects = [];
        sessionStorage.setItem('cart',JSON.stringify([]));

        window.location.href = 'enrollment.html';
    };

     $scope.logMeOut = function(){
            	                    sessionStorage.setItem('dbID', "");
                    sessionStorage.setItem('majorID',"");
                    sessionStorage.setItem('startTerm',"");
                    sessionStorage.setItem('cart',"");
                    window.location.href = 'login.html';
                };
});








