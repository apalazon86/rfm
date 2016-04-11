//Controlador de recetas
RFM.controller('RecipesController',['$scope', '$http', function($scope, $http){
  $scope.recipesList = [];

  //Obtenemos el listado de recetas
  $http.get('/recipes').success(function(data){
    //Para cada receta
    data.forEach(function(rec){
      //Para cada ingrediente de la receta
      rec.ingredients.forEach(function (ingredient){
        //Formateamos el nombre del ingrediente
        if(ingredient.quantity === "" && ingredient.unit === ""){
          ingredient.dispName = ingredient.name;
        }
        else{
          ingredient.dispName = ingredient.name + ": " + formatQuantity(ingredient.quantity,ingredient.unit);
        }
      });
    });
    $scope.recipesList = data;
  });
}]);
