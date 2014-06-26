// JScript source code
function HeddenOn(obj) {
    var n = obj.id;
    var node = document.getElementById("hedden-part" + n);
    node.style.display = "block";
}
function HeddenOut(obj) {
    var n = obj.id;
    var node = document.getElementById("hedden-part" + n);
    node.style.display = "none";
}
function onHeddenOut(obj) {
    obj.style.display = "none";
}
function onHeddenOn(obj) {
    obj.style.display = "block";
}
function ChangeOn(obj) {
    obj.style.color= "#547DA6";
}
function ChangeOut(obj) {
    obj.style.color = "#7A7A7A";
}
function ChangeOut2(obj) {
    obj.style.color = "#343434";
}