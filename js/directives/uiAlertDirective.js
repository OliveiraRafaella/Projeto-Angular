angular.module("listaTelefonica").directive("uiAlert", function () {
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
        scope: {
            // topic: "@title", //REFERENCIA A UM ATIBUTO DO HTML,
            // SE VALOR DO SCOPO FOR == AO NOME DO ATRIBUTO BASTA COLOCAR SOMENTE @
            title: "@",
            // message: "="
        },
        transclude: true //encapsular conteudo
    };
});