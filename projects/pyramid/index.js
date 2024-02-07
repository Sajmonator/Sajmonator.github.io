
let S = "*"   //string of a single star
let cont = document.getElementById("sem")   //container
function gibNum(){
    let x = prompt("Enter number of pyramid floors");   // aj speak veri gut england
    try {
       x = parseInt(x) 
       if (isNaN(x)) {
        alert("Error try again with better number")         //handeling wrong input
       }else if(x < 0){
        alert("Error try again with a positive number")         //handeling wrong input
       } else{
        return x
       }
    } catch (error) {
        alert("Error try again with better number")
    }
}

function printPyr(x){
    for (let n = 0; n <= x; n++) {
        //console.log((x-n) * " ");
        let div = document.createElement('div');
        div.innerHTML = `<div id="p ${n}">${S.repeat(n)}</div>`;        //appending pyramid
        cont.appendChild(div);
    }
}
printPyr(gibNum())