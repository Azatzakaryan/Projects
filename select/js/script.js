    let qaxaq = {
	usa:["Las Vegas","Los Angeles"],
	spa:["Madrid","Barcelona"],
	fra:["Paris","Monako"],
	arm:["Yerevan","Gyumri"]

}
    let newSel = "";
    let x = document.getElementById("empty");
    document.getElementById("sel").addEventListener("change",function(){
    generateOptions();	
})
function generateOptions()
{
	let country = document.getElementById("sel").value;
	newSel='';
	for (let i = 0; i < qaxaq[country].length; i++) {
 		newSel += "<option> "+ qaxaq[country][i] + "</option>";
 	}
	x.innerHTML = newSel;
}
    generateOptions();