function getNum(num) {
    document.getElementById("result").value += num;
}
function clearAll() {
    document.getElementById("result").value = " ";
}
function remove() {
    var res = document.getElementById("result").value;
    document.getElementById("result").value = document.getElementById("result").value.slice(0,res.length - 1);
}
function Result() {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}
function square(){
    var square =document.getElementById('result').value*document.getElementById('result').value
    document.getElementById('result').value= square;
}
function Exp() {
    document.getElementById('result').value= eval(Math.E*document.getElementById('result').value);
}
function mathlog10() {
    document.getElementById('result').value= eval(Math.log10(document.getElementById('result').value));
}
function mathlog() {
    document.getElementById('result').value= eval(Math.log(document.getElementById('result').value));
}
function mathsin() {
    document.getElementById('result').value= eval(Math.sin(document.getElementById('result').value));
}
function mathcos() {
    document.getElementById('result').value= eval(Math.cos(document.getElementById('result').value));
}
function mathtan() {
    document.getElementById('result').value= eval(Math.tan(document.getElementById('result').value));
}
function mathpi() {
    document.getElementById('result').value= eval(Math.PI*document.getElementById('result').value);
}
function mathrad() {
    document.getElementById('result').value= eval(document.getElementById('result').value*(Math.PI/100));
}
function mathdeg() {
    document.getElementById('result').value= eval(document.getElementById('result').value*(180/Math.PI));
}
function mathper() {
    document.getElementById('result').value= eval(document.getElementById('result').value/100);
}
function mathsqrt() {
    document.getElementById('result').value= eval(Math.sqrt(document.getElementById('result').value));
}