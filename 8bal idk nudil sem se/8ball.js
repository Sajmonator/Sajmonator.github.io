let optsYes = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes."];//10 positive
let optsNeut = ["Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again."];//5 neutral
let optsNo = ["Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];//5 negative
let a;
let c;
let bol = document.getElementById("text")
let text = document.getElementById("text")
function generate(){
    a = Math.floor(Math.random() * 10)//1-9
    //console.log(a)
    if(a == 0){
        //console.log("0 🗿");
        a = Math.floor(Math.random() * (3 - 1)) + 1;
        console.log(a);
        return a
    } else if(a <= 3){
        //console.log("mensi nez 3.0y");
        console.log(a)
        return a;
    } else if (a >= 7){
        //console.log("vetsi nez/a 7");
        a = a - 6
        console.log(a)
        return a;
    } else if(a >= 4 && a <= 6){
        //console.log("4 az 6");
        a = a - 3
        console.log(a)
        return a;
    }
}
function rozhodni(b){
    if(b == 1){
        bol.style.color = "aqua";
        console.log("+positive");
        c = optsYes[Math.floor(Math.random() * 9) + 0];
        return c;
    } else if (b == 2){
        bol.style.color = "white";
        console.log("|neutral");
        c = optsNeut[Math.floor(Math.random() * (4 - 0)) + 0];
        return c;
    } else if (b == 3){
        bol.style.color = "red";
        console.log("-negativ");
        c = optsNo[Math.floor(Math.random() * (4 - 0)) + 0];
        return c;
    }
}
function vypis(t){
    console.log(t);
    return text.innerHTML = t;
}
let btn = document.getElementById("btn")
btn.onclick = (() => 
    // rozhodni(generate())
    vypis(rozhodni(generate()))
)