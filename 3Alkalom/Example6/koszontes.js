function koszontes(divId){
    var aktualisDatum = new Date();
    console.log(aktualisDatum);
    var aktualisOra = aktualisDatum.getHours();
    console.log(aktualisOra);
    if(aktualisOra >= 6 && aktualisOra <10){
        document.getElementById(divId).innerHTML = "<h2>Jó reggelt kívánok</h2>"
    }else if(aktualisOra >= 10 && aktualisOra <17){
        document.getElementById(divId).innerHTML = "<h2>Jó napot kívánok</h2>"
    }else if(aktualisOra >= 17 || aktualisOra < 6){
        document.getElementById(divId).innerHTML = "<h2>Jó estét kívánok</h2>"
    }else{
        document.getElementById(divId).innerHTML = "ismeretlen napszak";
    }
}
