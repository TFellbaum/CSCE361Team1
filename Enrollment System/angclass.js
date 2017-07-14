var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
        $scope.logMeIn = function(){
                if($scope.uname === ""){
                    return;
                }else{
                    var data = "un=" + $scope.uname + "&up=" + $scope.upass;
                    $http({
                method: 'POST', url: 'login.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if(data.trim() === 'error'){
                    alert("Invalid Credentials");
                }else{
                    sessionStorage.setItem('dbID', data);
                    window.location.href = 'index.html';
                }
            });
                }
        };
});
angular.module('app', [
  'ngSanitize'
]);
app.controller('indexCtrl', function($scope,$http){
    $scope.dbID = sessionStorage.getItem('dbID');
    $scope.semNow = "summer";
        $scope.semFut = "fall";
    $scope.semPrev = "spring";
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

    var data = "dbID=" + $scope.dbID + "&term=" + $scope.semFut;
                    $http({
                method: 'POST', url: 'index.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                $scope.classList = data;
                    $scope.am8ClassList = [];
    $scope.am9ClassList = [];
    $scope.am10ClassList = [];
    $scope.am11ClassList = [];
    $scope.pm12ClassList = [];
    $scope.pm1ClassList = [];
    $scope.pm2ClassList = [];
    $scope.pm3ClassList = [];
    $scope.pm4ClassList = [];
                var boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                        boole = false;
                    }
                }
                if(true)
                    $scope.am8ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am9ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am10ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.am11ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.pm12ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.pm1ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.pm2ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.pm3ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.pm4ClassList.push(null);
                else
                    boole = true;

                //tuesday
                for(var i = 0; i < data.length; i++){
                    if('t8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am8ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am9ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am10ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am11ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm12ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm1ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm2ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm3ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm4ClassList.push(null);
                else
                    boole = true;

                //wed
                for(var i = 0; i < data.length; i++){
                    if('w8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am8ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am9ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am10ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am11ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm12ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm1ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm2ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm3ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm4ClassList.push(null);
                else
                    boole = true;

                //thursday
                for(var i = 0; i < data.length; i++){
                    if('th8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.am8ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.am9ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.am10ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.am11ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th11' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm12ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th12' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm1ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th1' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm2ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th2' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm3ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th3' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm4ClassList.push(null);
                else
                    boole = true;

                                //friday
                for(var i = 0; i < data.length; i++){
                    if('f8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am8ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am9ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am10ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.am11ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm12ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm1ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm2ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm3ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm4ClassList.push(null);
                
            });
        $scope.changeSem = function(){
                var tempp = $scope.semNow;
                $scope.semNow = $scope.semFut;
                $scope.semFut = tempp;
            var data = "dbID=" + $scope.dbID + "&term=" + $scope.semFut;
            $http({
                method: 'POST', url: 'index.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                    $scope.am8ClassList = [];
    $scope.am9ClassList = [];
    $scope.am10ClassList = [];
    $scope.am11ClassList = [];
    $scope.pm12ClassList = [];
    $scope.pm1ClassList = [];
    $scope.pm2ClassList = [];
    $scope.pm3ClassList = [];
    $scope.pm4ClassList = [];
                $scope.classList = data;
                                                                for(var i = 0; i < data.length; i++){
                    if('m8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('m9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('m10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('m11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('m12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('m1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('m2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('m3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('m4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                    }
                }

                //tuesday
                for(var i = 0; i < data.length; i++){
                    if('t8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('t9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('t10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('t11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('t12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('t1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('t2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('t3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('t4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                    }
                }

                //wed
                for(var i = 0; i < data.length; i++){
                    if('w8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('w9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('w10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('w11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('w12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('w1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('w2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('w3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('w4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                    }
                }

                //thursday
                for(var i = 0; i < data.length; i++){
                    if('th8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('th9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('th10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('th11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('th11' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('th12' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('th1' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('th2' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('th3' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                    }
                }

                                //friday
                for(var i = 0; i < data.length; i++){
                    if('f8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('f9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('f10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('f11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('f12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('f1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('f2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('f3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                    }
                }
                for(var i = 0; i < data.length; i++){
                    if('f4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                    }
                }
            });
        };
        $scope.changeSem2 = function(){
                var tempp = $scope.semPrev;
                $scope.semPrev = $scope.semFut;
                $scope.semFut = tempp;
                var data = "dbID=" + $scope.dbID + "&term=" + $scope.semFut;
                    $http({
                method: 'POST', url: 'index.php', data:data, headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){
                    $scope.am8ClassList = [];
    $scope.am9ClassList = [];
    $scope.am10ClassList = [];
    $scope.am11ClassList = [];
    $scope.pm12ClassList = [];
    $scope.pm1ClassList = [];
    $scope.pm2ClassList = [];
    $scope.pm3ClassList = [];
    $scope.pm4ClassList = [];
                $scope.classList = data;
                var boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                        boole = false;
                    }
                }
                if(true)
                    $scope.am8ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am9ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am10ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.am11ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.pm12ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.pm1ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.pm2ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.pm3ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('m4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                                if(true)
                    $scope.pm4ClassList.push(null);
                else
                    boole = true;

                //tuesday
                for(var i = 0; i < data.length; i++){
                    if('t8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am8ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am9ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am10ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am11ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm12ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm1ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm2ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm3ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('t4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm4ClassList.push(null);
                else
                    boole = true;

                //wed
                for(var i = 0; i < data.length; i++){
                    if('w8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am8ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am9ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am10ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am11ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm12ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm1ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm2ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm3ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('w4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm4ClassList.push(null);
                else
                    boole = true;

                //thursday
                for(var i = 0; i < data.length; i++){
                    if('th8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.am8ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.am9ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.am10ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.am11ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th11' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm12ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th12' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm1ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th1' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm2ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th2' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm3ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('th3' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm4ClassList.push(null);
                else
                    boole = true;

                                //friday
                for(var i = 0; i < data.length; i++){
                    if('f8' in data[i]){
                        $scope.am8ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am8ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f9' in data[i]){
                        $scope.am9ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am9ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f10' in data[i]){
                        $scope.am10ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.am10ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f11' in data[i]){
                        $scope.am11ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.am11ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f12' in data[i]){
                        $scope.pm12ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm12ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f1' in data[i]){
                        $scope.pm1ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm1ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f2' in data[i]){
                        $scope.pm2ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm2ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f3' in data[i]){
                        $scope.pm3ClassList.push(data[i]);
                                                boole = false;

                    }
                }if(true)
                    $scope.pm3ClassList.push(null);
                else
                    boole = true;
                for(var i = 0; i < data.length; i++){
                    if('f4' in data[i]){
                        $scope.pm4ClassList.push(data[i]);
                                                boole = false;

                    }
                }
                if(true)
                    $scope.pm4ClassList.push(null);
            });
        };
});