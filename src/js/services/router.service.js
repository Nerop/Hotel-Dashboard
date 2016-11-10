// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl: 'src/templates/home.html',
        controller: 'mainController'
    })

    .when('/clients', {
        templateUrl: 'src/templates/clients.html',
        controller: 'clientsController'
    })

    .when('/rooms', {
        templateUrl: 'src/templates/rooms.html',
        controller: 'roomsController'
    })

    .when('/settlements', {
        templateUrl: 'src/templates/settlements.html',
        controller: 'settlementsController'
    })

    .otherwise({templateUrl:'src/templates/404.html'});

});
