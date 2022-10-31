angular.module("listaTelefonica").directive("uiTelefone", function () {
    return{
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatTelefone = function (telefone){
                telefone = telefone.replace(/[^0-9]+/g,""); //limpa data e aceita dsomente numeros
                if(telefone.length > 5){
                    telefone = telefone.substring (0,5) + "-" + telefone.substring(5,9);
                }
                //  if(telefone.length > 6){
                //     telefone = telefone.substring (0,5) + "-" + telefone.substring(5,9);
                // } 
                return telefone
            }
            
            element.bind("keyup", function(){
                ctrl.$setViewValue(_formatTelefone(ctrl.$viewValue));
                ctrl.$render();
                //console.log(ctrl.$viewValue);
            }); 

            // ctrl.$parsers.push(function(value){
            //     if(value.length === 10){
            //         var dateArray = value.split("-");
            //         console.log(dateArray)
            //         return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
            //     }                
            // })

            // ctrl.$formatters.push(function (value){
            //     return $filter("date")(value, "dd/MM/yyyy")
            // })
        }
    };
});