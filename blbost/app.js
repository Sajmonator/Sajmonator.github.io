/*var output = document.getElementById('moai');
var btn = document.getElementById('bttn');
let firstName = 'KKK'; let firstPassword = 'KKK'; //user name, pass
let adminName = "lll"; let adminPass = "lll"; //admin name, pass


btn.addEventListener('click', function() {
    var userInputName = document.getElementById('UsLogIn').value;
    var userInputPass = document.getElementById('UsPass').value;
    if(!userInputName || !userInputPass){
        output.innerHTML = `Missing Name or Password.`
        return;
    }
    if((userInputName != (firstName || adminName)) && (userInputPass != (firstPassword || adminPass))){
        output.innerHTML = `Wrong Name or Password`
        return;
    }
    if((userInputName == firstName) && (userInputPass == firstPassword)){
        output.innerHTML =`cs usere 🗿`
        //return;
    }
    if((userInputName == adminName) && (userInputPass == adminPass)){
        output.innerHTML =`welcome back admin 🗿`
        
    }
});
*/

var output = document.getElementById('moai');
var btn = document.getElementById('bttn');

var m = document.getElementById('Area');
/*
m.addEventListener('suspend', function(){
    output.innerHTML = "";
})
*/
btn.addEventListener('click', function() {
    var userInputName = document.getElementById('UsLogIn').value;
    var userInputPass = document.getElementById('UsPass').value;
    let firstName = 'KKK'; let firstPassword = 'KKK'; //user name, pass
    let AdminName = "jjj"; 
    let AdminPass = "jjj";//admin name, pass
    
    
    if(!userInputName || !userInputPass){
        output.innerHTML = `Missing Name or Password.`
        return;
    }else if(((userInputName == firstName) && (userInputPass == firstPassword))){
        output.innerHTML = `cs usere 🗿`
        return;
    }else if(((userInputName == AdminName) && (userInputPass == AdminPass))){
        output.innerHTML = `welcome back admin 🗿`;

    } else {
        output.innerHTML = `Wrong Name or Password\nhhhh zdechni`;
        return;
    }
});
