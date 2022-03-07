document.addEventListener("DOMContentLoaded", onkoKirjautanut);

function onkoKirjautanut(){
    let kirjautanut = 'kylla';
    if(kirjautanut === 'kylla'){
       document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", docunent.getElementById("nimi").value);
}