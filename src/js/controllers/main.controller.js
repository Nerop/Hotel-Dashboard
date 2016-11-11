scotchApp.controller('mainController', function ($scope) {
    $scope.message = 'Добро пожаловать.';
    $.getJSON("../2m/src/js/server/table.json", function(data){
        console.log(data);
    }); // <=== was missing
});
