var obj = {
    "zero" : "0",
    "one" : "1",
    "two" : "2",
    "three" : "3",
    "four" : "4",
    "five" : "5",
    "six" : "6",
    "seven" : "7",
    "eight" : "8",
    "nine" : "9",
    "add" : '+',
    "minus" : '-',
    "multi" : '*',
    "divide" : '/',
    "percent" : '%',
    "decimal" : '.'
};

var operand1 = "";
var operand2 = "";
var operator = "";

function disp(str){
    var dispArea = document.getElementById('disp-result');
    dispArea.innerText += obj[str];
    if(str == 'clear'){
        dispArea.innerText = "";
        operand1 = "";
        operand2 = "";
        operator = "";
    }
    if(str == 'zero' || str == 'one' || str == 'two' || str == 'nine'
       || str == 'three' || str == 'four' || str == 'five'
       || str == 'six' || str == 'seven' || str == 'eight' || str == 'decimal'){
        operand1 += obj[str];
    }
    if(str == 'changeSign'){
        operand1 = 0 - operand1;
        dispArea.innerText = operand1;
    }
    if(str == 'add' || str == 'minus' || str == 'multi' || str == 'divide'){
        operand2 = operand1;
        operand1 = "";
        operator = obj[str];
    }
    if(str == 'percent') {
        var result = eval(operand1 + " " + "/" + " " + 100);
        dispArea.innerText = result;
        operand1 = result;
    }
    if(str == 'equal'){
        var result = eval(operand2 + " " + operator + " " + operand1);
        // result = result.toFixed(5);
        dispArea.innerText = result;
        operand1 = result;
    }
}
