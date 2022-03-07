document.addEventListener("DOMContentLoaded", onkoKirjautanut);

function onkoKirjautanut(){
let kirjautanut = 'kylla';
if(kirjautanut === 'kylla'){
    document.getElementById('tervetulo_teksti').textContent += ' Casper! ';
}
}