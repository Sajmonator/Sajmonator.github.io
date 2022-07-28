var klvn = document.getElementById("Kelvin");//uricte neco usefull
var Cel = document.getElementById("Cel").value;//definice Cel a prirazeni k inputu
const K_VALUE = 273.15;//konstanti hodna °C na K
function CtoKel(){
    //funkce ktera prepocita °C na K
    Cel = document.getElementById("Cel").value;
        console.log(Cel);
        var kelvins;
        kelvins = 1 * Cel + K_VALUE;
        kelvins = Math.round(kelvins * 100) / 100;
        console.log(kelvins);
        return kelvins; 
}
function CtoFa(){
    //funkce ktera prepocita °C na °F
    Cel = document.getElementById("Cel").value;
        console.log(Cel);
        var fahrenheit;
        fahrenheit = 1.8 * Cel +32;
        fahrenheit = Math.round(fahrenheit * 100) / 100;
        console.log(fahrenheit);
        return fahrenheit;   
}
const cel = document.getElementById("Cel");
cel.addEventListener('change', () => {
    CtoKel();
    document.getElementById("Kelvin").innerHTML = CtoKel();
    CtoFa();
    document.getElementById("Fa").innerHTML = CtoFa();
});