function setCSS() {
	if (localStorage.getItem("currStyle")==2) document.getElementById("css").href="style2.css";
}

function switchCSS() {
	var currCSS = document.getElementById("css");
	if (currCSS.getAttribute("href")=="style.css")
	{
		localStorage.setItem("currStyle",2);
		document.getElementById("css").href="style2.css";
	}
	else
	{
		localStorage.setItem("currStyle",1);
		document.getElementById("css").href="style.css";
	}
}