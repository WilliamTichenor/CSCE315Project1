function balls() {
	var currCSS = document.getElementById("css");
	if (currCSS.getAttribute("href")=="style.css")
	{
		document.getElementById("css").href="style2.css";
	}
	else
	{
		document.getElementById("css").href="style.css";
	}
}