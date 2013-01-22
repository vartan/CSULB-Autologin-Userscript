// ==UserScript==
// @name          CSULB Autologin
// @namespace     http://vartan.net46.net/
// @description	  Greets the world
// @include       https://my.cms.csulb.edu/*
// @include       https://bbcsulb.desire2learn.com/*
// @include       http://my.cms.csulb.edu/*
// @include       http://bbcsulb.desire2learn.com/*
// @grant none
// ==/UserScript==



var USERNAME="YOUR USERNAME GOES HERE";
var PASSWORD="YOUR PASSWORD GOES HERE";


//DO NOT EDIT BELOW THIS LINE
//-------------------------------------------
function init() {
    var my=document.login || document.forms['login'];
    var bb = document.processLogonForm || document.forms['processLogonForm'];
	var form = null;
	var user;
	var pass;
	if(!my && !bb)
		return;

	if(my) {
		form = my;
		user = document.getElementById("userid");
		pass = document.getElementById("pwd");
	} else {
		form = bb;
		user = document.getElementById("Username");
		pass = document.getElementById("Password");	
	}
	user.value = USERNAME;
	pass.value = PASSWORD
	form.submit();
	
}
window.onload = init;