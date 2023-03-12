let num1;
let num2;
let more = document.querySelector('.more');

let power2InHtml = document.querySelector('.pwr2');
let power3InHtml = document.querySelector('.pwr3');

let btnPower2 = document.querySelector('.power2');
let btnPower3 = document.querySelector('.power3');

let power2InHtmlAnswer = document.querySelector('.answer2');
let power3InHtmlAnswer = document.querySelector('.answer3');


function power2(){
    let powerFinal2 = num1 * num1;
    console.log(powerFinal2);
    return powerFinal2;
}
function power3(){
    let powerFinal3 = num2 * num2 * num2;
    console.log(powerFinal3);
    return powerFinal3;
}

function start() {

}

window.addEventListener('load', () => {
    /*power2InHtml.innerHTML = num1;
    power3InHtml.innerHTML = num2;*/
    
    num1 = Math.floor(Math.random()* 10) + 1;
    power2InHtml.innerHTML = num1;
    power2(num1);

    num2 = Math.floor(Math.random()* 10) + 1;
    power3InHtml.innerHTML = num2;
    power3(num2);
})
more.addEventListener('click', () => {
    power2InHtmlAnswer.innerHTML = power2();
    power3InHtmlAnswer.innerHTML = power3();

});

btnPower2.addEventListener('click', () =>{
    power2InHtmlAnswer.innerHTML = "x";
    num1 = Math.floor(Math.random()* 10) + 1;
    power2InHtml.innerHTML = num1;
    power2(num1);
})

btnPower3.addEventListener('click', () =>{
    power3InHtmlAnswer.innerHTML = "x";
    num2 = Math.floor(Math.random()* 10) + 1;
    power3InHtml.innerHTML = num2;
    power3(num2);
})