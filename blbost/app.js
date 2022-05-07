var output = document.getElementById('moai');
var btn = document.getElementById('bttn');
let firstName = 'KKK'; let firstPassword = 'KKK'; //user name, pass
let AdminName = "lll";let AdminPass = "lll"; //admin name, pass


btn.addEventListener('click', function() {
    var userInputName = document.getElementById('UsLogIn').value;
    var userInputPass = document.getElementById('UsPass').value;
    if(!userInputName || !userInputPass){
        output.innerHTML = `Missing Name or Password.`
        return;
    }
    if((userInputName != (firstName || AdminName)) && (userInputPass != (firstPassword || AdminPass))){
        output.innerHTML = `Wrong Name or Password`
        return;
    }
    if((userInputName == firstName) && (userInputPass == firstPassword)){
        output.innerHTML =`cs usere 🗿`
        return;
    }
    if((userInputName == AdminName) && (userInputPass == AdminPass)){
        output.innerHTML =`welcome back admin 🗿`
        return;
    }
});
