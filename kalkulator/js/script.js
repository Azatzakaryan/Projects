let datark = 0;
let gorcoxutyun = "";

function mf(x){
	document.getElementById("inp").value += x;
}
function mff(y){
	gorcoxutyun = y;
	datark = document.getElementById("inp").value;
	document.getElementById("inp").value = "";
}
function ravno(){

	switch (gorcoxutyun){
		case "+":
		document.getElementById("inp").value = parseFloat(datark) + parseFloat(document.getElementById("inp").value);
		break;

		case "-":
		document.getElementById("inp").value = parseFloat(datark) - parseFloat(document.getElementById("inp").value);
		break;

		case "*":
		document.getElementById("inp").value = parseFloat(datark) * parseFloat(document.getElementById("inp").value);
		break;

		case  "/":
		document.getElementById("inp").value = parseFloat(datark) / parseFloat(document.getElementById("inp").value);
		break;
	}
}
function ccc(){
	document.getElementById("inp").value = "";
}

function block(){
	urish();
}
function urish(){
	let d = document.getElementById("con");
	if (d.style.display == "none") {
		d.style.display = "block";
	}
	else {
		d.style.display = "none";
	}
}
urish();