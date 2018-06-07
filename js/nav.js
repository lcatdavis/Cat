// JavaScript Document
/* Toggle between adding and removing the "responsive" class to topnav when the user cliskc on the icon */

function navFunction () {
	var x =	document.getElementById("main-top-nav");
	if (x.className ==="topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}