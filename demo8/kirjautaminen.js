document.addEventListener("DOMContentLoaded", onkoKirjautanut);

function onkoKirjautanut(){
    if(localStorage.getItem("kirjautunut") === "kylla") {
       document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
       document.getElementById("kirjautumis_lomake").style.display = "none";
      
    }
    else{
        document.getElementById("kirjaudu ulos").style.display="none";
    }
    
}

function kirjaudu(){
    document.getElementById("kirjaudu ulos").style.display="none";
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla")
    


}
function kirjauduUlos(){
    localStorage.clear();
}