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
})

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