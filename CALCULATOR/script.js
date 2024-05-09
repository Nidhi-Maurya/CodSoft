
// Calculator

function opr(o) {
    var view = document.calc.display;
    if (view.value != "") {
        view.value += o;
    }
}

function back() {
    var exp = document.calc.display.value;
    document.calc.display.value = exp.substring(0, exp.length-1);
}

function ins(num) {

    var a = document.calc.display;

    a.value += num;
}

function clr() {
   document.calc.display.value = "";
}

function zero() {
    var view = document.calc.display;
    if (view.value != "") {
        view.value += '0';
    }
}

function equal() {
    var a = document.calc.display;
    var exp = a.value;

    if (exp) {
        try {a.value = eval(exp);}
        catch (e) {
            document.calc.display.value = 'Syntax Error!';
        }
    }
    if (a.value == 0) {
        a.value = "";
    }
    if(a.value == 'Infinity'){
        document.calc.display.value = "Can't divide by Zero!";
    }
}

function percent() {
    var b = eval(document.calc.display.value);
    document.calc.display.value = b / 100;
}

/*Menu*/
function menu() {
    document.getElementById("up").style.display = "block";
}
function sx() {
    document.getElementById("up").style.display = "none";
}
function calcu() {
    document.getElementById("calculator").style.display = "block";
    document.getElementById("up").style.display = "none";
    document.getElementById("temperature").style.display = "none";
    document.getElementById("time").style.display = "none";
}
function time() {
    document.getElementById("time").style.display ="block";
    document.getElementById("calculator").style.display ="none";
    document.getElementById("up").style.display ="none";
    document.getElementById("temperature").style.display ="none";
}
function temp() {
    document.getElementById("temperature").style.display = "block";
    document.getElementById("up").style.display = "none";
    document.getElementById("calculator").style.display = "none";
    document.getElementById("time").style.display = "none";
}


/*Time*/

var s = document.getElementById('seconds');
var m = document.getElementById('minutes');
var h = document.getElementById('hours');
var d = document.getElementById('days');
var w = document.getElementById('weeks');
var y = document.getElementById('years');

function second(i) {
    i = parseFloat(i);
    m.value = i / 60;
    h.value = i / 3600;
    d.value = i / 86400;
    w.value = i / 604800;
    y.value = i / 31557600;

}

function minute(i) {
    i = parseFloat(i);
    s.value = i * 60;
    h.value = i / 60;
    d.value = i / 1440;
    w.value = i / 10080;
    y.value = i / 525960;

}

function hour(i) {
    i = parseFloat(i);
    s.value = i * 3600;
    m.value = i * 60;
    d.value = i / 24;
    w.value = i / 168;
    y.value = i / 8766;

}

function day(i) {
    i = parseFloat(i);
    s.value = i * 86400;
    m.value = i * 1440;
    h.value = i * 24;
    w.value = i / 7;
    y.value = i / 365.25;

}

function week(i) {
    i = parseFloat(i);
    s.value = i * 604800;
    m.value = i * 10080;
    h.value = i * 168;
    d.value = i * 7;
    y.value = i / 52.179;

}

function year(i) {
    i = parseFloat(i);
    s.value = i * 31557600;
    m.value = i * 525960;
    h.value = i * 8766;
    d.value = i * 365.25;
    w.value = i * 52.179;    
}


/*Temperature*/
var c = document.getElementById("celsius");
var f = document.getElementById("fahrenhait");
var k = document.getElementById("kelvin");

function celsius(a) {
    a = parseFloat(a);
    f.value = (a * 9/5) + 32;
    k.value = a + 273.15;
}
    function fahrenhait(a)    {
    a = parseFloat(a);
    c.value = (a - 32) * 5/9;
    k.value = (a -32) * 5/9 + 273.15;
}

function kelvin(a) {
    a = parseFloat(a);
    f.value = (a - 273.15) * 9/5 + 32;
    c.value = a - 273.15;
}

  
