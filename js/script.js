/*menunav*/

var menuLink = document.getElementsByClassName("link");

var ocultarSection = function(event) {
    event.preventDefault();
    var href = this.getAttribute("href");
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].setAttribute("class", "oculto");
    }
    document.getElementById(href).classList.remove("oculto");
    document.getElementById("navResponsive").style.display = "none";
};

for (var i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', ocultarSection, false);
}
//-----------------------------------------------------------------------------
 /*menu bar resposive*/
var menuResponsive = function(){
  if (document.getElementById("navResponsive").style.display === "flex"){
    document.getElementById("navResponsive").style.display = "none";
    //document.getElementById("boton").classList.remove("active");
  } else{
    document.getElementById("navResponsive").style.display = "flex";
    //document.getElementById("boton").setAttribute("class", "active");
  }
}
document.getElementById("boton").addEventListener('click', menuResponsive, false);

//---------------------------------------------------------------------------------------
 /*mapa resposive*/
var mapResponsive = function(){
    document.getElementById("drpDownMap").style.display = "none";
    document.getElementById("mapid").style.height = "500px";
}
document.getElementById("drpDownMap").addEventListener('click', mapResponsive, false);

//----------------------------------------------------------------------------------------------
