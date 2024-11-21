//your JS code here. If required.

const age = document.getElementById("age");
const name = document.getElementById("name");
const btn = document.getElementById("btn");
const form = document.getElementById("form")



btn.addEventListener('click', () => {
	
	let ageValue= age.value;
	let nameValue = name.value;
	
	let boolValue = validation();
	
	let promise = new Promise(function(resolve, reject){
		if(boolValue){
			resolve("Resolved");
		}
		else{
			reject("Rejected");
		}
	}).then(function(message){
		if(ageValue>=18){
			alert("Welcome, "+nameValue+". You can vote.");
		}
		else{
			alert("Oh sorry "+nameValue+". You aren't old enough.");
		}
		
	}).catch(function(error){
		console.log(error);
	});
})




const validation = () => {
	let ageValue= age.value;
	let nameValue = name.value;
	if(!ageValue || !nameValue){
		alert("inputs cannot be empty");
		return false;
	}
	else{
		return true;
	}
}