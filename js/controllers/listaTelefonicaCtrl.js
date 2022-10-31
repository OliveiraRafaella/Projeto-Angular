angular.module("listaTelefonica", []).controller("listaTelefonicaCtrl", function ($scope, $http, contatosAPI, operadorasAPI, serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];
    $scope.contato = {
        data: 1002682800000,
        // telefone: parse("(31) 99999-9999")
    };

    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            response.data.forEach(function(item){
                item.serial = serialGenerator.generate();
            })
            $scope.contatos = response.data;
            // console.log(response.data);
        }).catch(function (response) {
            $scope.error = "Não foi possivel carregar os dados!";
            $scope.message = "Ops, aconteceu um problema!";
        });
    }

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
            // console.log(response.data);
        });
    }

    $scope.adicionarContato = function (contato) {
        
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };

    $scope.apagarContatos = function (contatos) {
        var contato = contatos.filter(function (contato) {
            if (!contato.selecionado)
                return contato;
        });

        $http.post("http://localhost:8000/del_contatos", contato).then(function (response) {
            $scope.contatos = response.data;
            console.log('Response Data F: ', response.data);
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return [...contatos].some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    $scope.selecionado = "selecionado";
    carregarContatos();
    carregarOperadoras();
});
