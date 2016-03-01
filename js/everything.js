var password;
var username;
var name;
var email;
var languages = [];
var locations = [];
var interests = [];

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

function test(){
	console.log("ayy")
	console.log(localStorage.getItem("username"))
	console.log(localStorage.getItem("password"))
	console.log(localStorage.getItem("name"))
	console.log(localStorage.getItem("email"))

}