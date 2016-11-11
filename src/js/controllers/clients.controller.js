scotchApp.controller('clientsController', function ($scope) {
    $scope.message = 'Клиенты';
    $.getJSON("../2m/src/js/server/table.json", function(data){
        for (let i = 0; i < data.length; i++){
            console.log(data[i]);
            $('.clients-table').append('<tr>' + '<td>' + data[i].id + '</td>' +'<td>' + data[i].surname + '</td>' +'<td>' + data[i].name + '</td>' +'<td>' + data[i].patron + '</td>' +'<td>' + data[i].phone_number + '</td>' + '</tr>');
        }
        // console.log(data.length);



    }); // <=== was missing
});
