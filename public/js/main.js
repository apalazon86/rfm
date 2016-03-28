(function(){
//Creación del módulo
var RFM=angular.module('RFM', ['ngRoute']);

//Configuración de las rutas
RFM.config(function($routeProvider){
      $routeProvider
      .when('/recipes', {
        template:
          ' <h1>hola mundo</h1>'
      })
      .when('/products',{
        templateUrl: 'partials/products.html',
        controller: 'ProductsController'
      })
      .otherwise({
        redirectTo: '/products'
      });
});

//Controlador de productos
RFM.controller('ProductsController',['$http',function($http){
    var products=this;
    products.productsList=[];
    //Obtenemos el listado de productos
    $http.get('/products').success(function(data){
      //Para cada producto inicializamos el campo dateAlert a true si caduca en 2 días o menos
      data.forEach(function(currentprod){
        currentprod.dateAlert=dateDiffInDays(currentprod.dateOfExpiry)<=2?true:false;
      });
      //console.log(data);
      products.productsList=data;
    });
  }]);


})();