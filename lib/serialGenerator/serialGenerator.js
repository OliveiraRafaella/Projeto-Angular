angular.module("serialGenerator", []);
angular.module("serialGenerator").provider("serialGenerator", function () {
    this.getLength = function (){
        return _length;
    }
    this.setLength = function (length) {
        _length = length;
    }
    this.$get = function () {
        return {
            generate: function ($http, $scope) {
                var serial = "";
                while (serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
});