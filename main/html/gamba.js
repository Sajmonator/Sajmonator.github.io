import data from './strany.json' with { type: 'json' };

console.log(Object.keys(data))


// let gamba = Math.floor(Math.random()* Object.keys(data).length + 1);
// console.log(gamba)

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled +1 ) + minCeiled);
}

function vol(){
    let pocitadlo = 0
    //gamba = random.randint(1, len(strany))
    let gamba = getRandomInt(0, Object.keys(data).length);
    for (let k = 0; k <= Object.keys(data).length; k++){ //in strany.keys():
        pocitadlo +=1
        if (pocitadlo == gamba){
            //print(f"{k}: {strany[k]}")
            console.log(Object.keys(data)[k] + ":" + Object.values(data)[k]);
            document.getElementById("Volba").innerHTML = Object.keys(data)[k] + ":" + Object.values(data)[k];
        }
    }
}

document.getElementById("klik").onclick = vol