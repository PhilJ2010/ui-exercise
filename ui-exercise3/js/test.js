function showMenu() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

	$(document).ready(function(){
    $("#sidebar").click(function(){
        $("#aside").fadeToggle();
    });
});