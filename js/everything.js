var password;
var username;
var name;
var email;
var languages = [];
var locations = [];
var interests = [];

$(document).ready(function(){
	if(location.pathname.slice(-11) === "signin.html"){
		document.getElementById("username").value = localStorage.getItem("username");
		document.getElementById("password").value = localStorage.getItem("password");
		document.getElementById("name").value = localStorage.getItem("name");
		document.getElementById("email").value = localStorage.getItem("email");
		if(localStorage.getItem("username").length !== 0){
			document.getElementById("languages").textContent = "Done";
		}
	}
	else if(location.pathname.slice(-10) === "index.html"){
		clearStorage();
	}
	else if(location.pathname.slice(-13) === "chatpage.html"){
		addInfo();
	}
})

function addInfo(){
	var interest = getInfo("interests")
	var location = getInfo("locations")
	var language = getInfo("languages")

	document.getElementById("interest").textContent = "Interest: " + interest;
	document.getElementById("location").textContent = "Location: " + location;
	document.getElementById("language").textContent = "Language: " + language;
}

function getInfo(str){
	var testString = "";
	var thing = localStorage.getItem(str);
	for(var i = 0; i < thing.length; ++i){
		if(thing[i] === ","){
			return testString;
		} 
		else{
			testString+=thing[i]
		}
	}
	return testString;
}

function clearStorage(){
	localStorage.setItem("username","");
	localStorage.setItem("name","");
	localStorage.setItem("password","");
	localStorage.setItem("email","");
}

function openPage () {
	username = document.getElementById("username").value
	localStorage.setItem("username",username);
	name = document.getElementById("name").value
	localStorage.setItem("name",name);
	password = document.getElementById("password").value
	localStorage.setItem("password",password);
	email = document.getElementById("email").value
	localStorage.setItem("email",email);
	location.href = "launchpad.html";
}

function openLanguagePage () {
	username = document.getElementById("username").value
	localStorage.setItem("username",username);
	name = document.getElementById("name").value
	localStorage.setItem("name",name);
	password = document.getElementById("password").value
	localStorage.setItem("password",password);
	email = document.getElementById("email").value
	localStorage.setItem("email",email);
	location.href = "language.html";
}

function openFromLanguages(){
	localStorage.setItem("languages",languages);
	location.href = "signin.html";
}

function openFromLocation(){
	localStorage.setItem("locations",locations);
	location.href = "launchpad.html";
}

function openFromInterest(){
	localStorage.setItem("interests",interests);
	location.href = "launchpad.html";
}

function test(){
	console.log("ayy")
	console.log(localStorage.getItem("username"))
	console.log(localStorage.getItem("password"))
	console.log(localStorage.getItem("name"))
	console.log(localStorage.getItem("email"))
	console.log(localStorage.getItem("languages"))
}

function openChat(){
	location.href = "chatpage.html";
}