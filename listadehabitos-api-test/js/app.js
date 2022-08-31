var app = angular.module('app', ['ngRoute']);

//declaramos o controller para a página api-test-get.html
app.controller('apitestcontroller', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.result = '';
    $scope.id = '';
    $scope.listaDeHabitosApiGet = function () {
      if ($scope.id == '') {
        $http
          .get('http://localhost:80/listadehabitos-rest-api/habito.php')
          .success(function (data) {
            var output = JSON.stringify(data);
            $scope.result = output;
          });
      } else {
        $http
          .get('http://localhost:80/listadehabitos-rest-api/habito.php', {
            params: {
              id: $scope.id,
            },
          })
          .success(function (data) {
            var output = JSON.stringify(data);
            $scope.result = output;
          });
      }
    };
  },
]);

// declaramos o controller para a página
// api-test-post.html
app.controller('apitestpostcontroller', [
  '$scope',

  '$http',
  function ($scope, $http) {
    $scope.result = '';
    $scope.nome = '';

    // criar
    $scope.listaDeHabitosApiPost = function () {
      $http
        .post('http://localhost:80/listadehabitos-rest-api/habito.php', {
          nome: $scope.nome,
        })
        .success(function (data) {
          var output = JSON.stringify(data);
          $scope.result = output;
        });
    };
  },
]);

// declaramos o controller para a página
// api-test-put.html

app.controller('apitestputcontroller', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.result = '';
    $scope.id = '';
    $scope.nome = '';
    $scope.status = '';

    // atualizar

    $scope.listaDeHabitosApiPut = function () {
      $http
        .put('http://localhost:80/listadehabitos-rest-api/habito.php', {
          id: $scope.id,
          nome: $scope.nome,
          status: $scope.status,
        })
        .success(function (data) {
          var output = JSON.stringify(data);
          $scope.result = output;
        });
    };
  },
]);

// declaramos o controller para a página api-test-get.html

app.controller('apitestdeletecontroller', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.result = '';
    $scope.id = '';

    // deletar

    $scope.listaDeHabitosApiDel = function () {
      $http
        .delete('http://localhost:80/listadehabitos-rest-api/habito.php', {
          params: {
            id: $scope.id,
          },
        })
        .success(function (data) {
          var output = JSON.stringify(data);
          $scope.result = output;
        });
    };
  },
]);

// declaramos o controler para a página welcome.html
