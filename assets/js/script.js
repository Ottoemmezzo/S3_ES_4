var stringa="sto imparando javascript";
var stringa2="";
var stringa3="";
var stringa4="";
var stringa5="";
const persone=["carlo","Giovanni","Terenzio","Giordano","Mimmo"];

var stringaConc="";
var l=0;

stringa2=stringa.toUpperCase();
document.getElementById("maiuscola").innerHTML=stringa2;

stringa2=stringa.toLowerCase();
document.getElementById("minuscola").innerHTML=stringa2;

stringa2=stringa.split("");
document.getElementById("estraiCaratteri").innerHTML=stringa2;

l=stringa.length;
console.log(l);
stringa2=stringa.slice(0,l/4);
console.log(stringa2);
stringa3=stringa.slice(l/4,l/2);
console.log(stringa3);
stringa4=stringa.slice(l/2,l-l/4);
console.log(stringa4);
stringa5=stringa.slice(l-l/4,l);
console.log(stringa5);
stringaConc=stringa2.concat("",stringa3,stringa4,stringa5);

document.getElementById("concatena").innerHTML=stringaConc;

//Array
document.getElementById("array").innerHTML=persone;
document.getElementById("lunghezza").innerHTML=persone.length;
document.getElementById("elemento").innerHTML=persone[1];
document.getElementById("ultimo").innerHTML=persone[persone.length-1];
persone.push("Calogero");
document.getElementById("modificato").innerHTML=persone;


var anni=[2005,1998,1981,1923,2008];
calcolaEta(anni);

function calcolaEta(anni){
    const ad=2022;
    let eta=[];
    document.getElementById("eta1").innerHTML+=eta[0]=ad-anni[0];
    document.getElementById("eta2").innerHTML+=eta[1]=ad-anni[1];
    document.getElementById("eta3").innerHTML+=eta[2]=ad-anni[2];
    document.getElementById("eta4").innerHTML+=eta[3]=ad-anni[3];
    document.getElementById("eta5").innerHTML+=eta[4]=ad-anni[4];
    document.getElementById("arrayEta").innerHTML+=eta;

}

var animali=["lupo","gallina","topo","maiale"];
var animale="gatto";

document.getElementById("intero").innerHTML=animali;
animali.push(animale);
document.getElementById("aggiunto").innerHTML=animali[4];
let ani=animali.shift();
document.getElementById("estratto").innerHTML=ani;
let b=animali.includes("topo");
document.getElementById("verifica1").innerHTML=b;
let pos=animali.indexOf("maiale");
document.getElementById("verifica2").innerHTML=pos;