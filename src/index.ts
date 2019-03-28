import './main.scss';

var price = 1000;

(function () {

    //console.log(price);

    var price = 5000;

    //console.log(price);

    var price = 2000;

    //console.log(price);

    //console.log(f1());

    function f1() {
        return "f1";
    }

    //console.log(f2());

    var f2 = function f2() {
        return "f2";
    }

}());





(function () {

    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            //console.log(i);
        }, i*500);
    }

}());










(function () {

    //Write foo here:

    //var abc = foo();
    //abc();
    //log 1
    //abc();
    //log 2
    //abc();
    //log 3

}());










(function () {

    const a = {b:'test'};

    //a = 123
    //a.b = 456;


}());




(function () {

    var obj1 = {
        value1:'value1',
        value2:{
            prop1:'prop1',
            prop2:'prop2'
        }
    };

    obj1.value1 = '1111111';
    var obj2 = obj1.value2;
    obj2.prop2 = '2222222';

    //console.log(obj1);
    //console.log(obj2);


    //Make a clone of obj1
    //Make a better clone of obj1

}());


