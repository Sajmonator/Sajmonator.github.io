/*var i =1;
function rekniRock() {
    let newH = document.createElement('h1');
    let newP = document.createElement('p');
    newP.innerText = "you mother";
    newH.appendChild(newP);
    document.body.appendChild(newH);
    console.log("new " + newP)
    i++;
    document.getElementById("iS").innerHTML = i;
}*/
var Time = 0;
var cookies = 0;
let cursors = 0;
let bakers = 0;
let cookieFactory = 0;
let cursorsPrice = 10;
let bakersPrice = 100;
let cookieFactoryPrice = 1000;
let priceMultiplier = 1.15;
let cursorMultiplier = 1;
let bakerMultiplier = 1;
let factoryMultiplier = 1;


function makeCookie() {
    cookies+=1;
    document.getElementById("Cookies").innerHTML = cookies;
    console.log("cookie baked, now you have " + cookies);
}
function clickCookie() {
    cookies = cookies + cursors;
    setTimeout(clickCookie, 10000);
}
function createCursor(){
    if (cookies >= cursorsPrice) {
        cookies = cookies - cursorsPrice;
        document.getElementById("Cookies").innerHTML = cookies;
        cursors = cursors + 1;
        cursorsPrice = cursorsPrice * priceMultiplier;
        cursorsPrice = Math.round(cursorsPrice);
        document.getElementById("CoCurs").innerHTML = cursors;
        document.getElementById("CoCursPrice").innerHTML = cursorsPrice;
        console.log("you created cursor, now you have " + cursors);
    }
}
function hireBaker() {
    if(cookies >= bakersPrice){
        cookies = cookies - bakersPrice;
        document.getElementById("Cookies").innerHTML = cookies;
        bakers = bakers + 1;
        bakersPrice = bakersPrice * priceMultiplier;
        bakersPrice = Math.round(bakersPrice);
        document.getElementById("CoBak").innerHTML = bakers;
        document.getElementById("CoBakPrice").innerHTML = bakersPrice;
        console.log("you hired baker :) now you have " + bakers);
    }
}
function buildFactory(){
    if(cookies>=cookieFactoryPrice){
        cookies = cookies - cookieFactoryPrice;
        document.getElementById("Cookies").innerHTML = cookies;
        cookieFactory = cookieFactory + 1;
        cookieFactoryPrice = cookieFactoryPrice * priceMultiplier;
        cookieFactoryPrice = Math.round(cookieFactoryPrice)
        document.getElementById("CoFact").innerHTML = cookieFactory;
        document.getElementById("CoFactPrice").innerHTML = cookieFactoryPrice;
        console.log("you built a factory :) now you have " + cookieFactory);
    }
}
function bakeCookie() {
   cookies = cookies + (bakers * bakerMultiplier);
}
function factoryBakeCookie() {
    cookies = cookies + (cookieFactory * 100 * factoryMultiplier);
}
function bakerWorking(){
    setTimeout(bakeCookie, 1000);
}
function time(){
    document.getElementById("Cookies").innerHTML = cookies;
    document.getElementById("CoCurs").innerHTML = cursors;
    document.getElementById("CoBak").innerHTML = bakers;
    document.getElementById("CoFact").innerHTML = cookieFactory;
    document.getElementById("CoCursPrice").innerHTML = cursorsPrice;
    document.getElementById("CoBakPrice").innerHTML = bakersPrice;
    document.getElementById("CoFactPrice").innerHTML = cookieFactoryPrice;
    var timedd = document.getElementById("time");
    timedd.style.visibility = "hidden";
    bakeCookie();
    factoryBakeCookie();
    Time+=1;
    document.getElementById("times").innerHTML = Time;
    setTimeout(time, 1000);
}
window.onload=function(){
    while(name == null){
        var name = prompt("whats your name", "Sajmonator");
        document.getElementById("player").innerHTML = name;
    }
    clickCookie()
    time()
}