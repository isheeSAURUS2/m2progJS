function gebruikArgument(naam, leeftijd){
    let Zin = "yo jij bent toch"+naam+"en je bent"+leeftijd+"jaar oud"
    return Zin
}

function GeefMijDatum(){
    return new Date();
}
function BenJeMoeOmdatJeOudBent(leeftijd){
    if (leeftijd > 50){
        return true;
    }else{
        return false
    }
}
function ScrijfVerhaal(naam,leeftijd, vak){
    let introZin = gebruikArgument(naam, leeftijd);
    console.log(introZin);
    let VDatum = GeefMijDatum();
    console.log("vandaag is het", VDatum)
    let BenJeMoe = BenJeMoeOmdatJeOudBent(leeftijd);
    if(BenJeMoe == true){
        console.log("je bent moe omdat je oud bent")
    } else if(BenJeMoe == false){
        console.log("je bent niet moe omdat je jong bent")
    }
}
let text = gebruikArgument("leraar", 80);
console.log(text);
