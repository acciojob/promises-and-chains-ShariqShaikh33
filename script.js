//your JS code here. If required.

const age = document.getElementById("age");
const name = document.getElementById("name");
const btn = document.getElementById("btn");
const form = document.getElementById("form")

btn.addEventListener('click', () => {
	
	let ageValue= age.value;
	let nameValue = name.value;

	if(!ageValue || !nameValue){
		alert("inputs cannot be empty");
	}
	else{
		let agepromise = new Promise(function(resolve, reject){
			if(ageValue>=18){
				resolve("Resolved");
			}
			else{
				reject("Rejected");
			}
		}).then(resolve = () => {
			alert("Welcome, "+nameValue+". You can vote.");
		}).catch(reject = () => {
			alert("Oh sorry "+nameValue+". You aren't old enough");
		});
	}

	
	
	
	

});

