const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
let counting = 0;
let countingOpen = 0;
let countingClose = 0;

closedFace.addEventListener('click', () =>{
    counting = counting + 1;
    countingClose++;
    if(openFace.classList.contains('open')){
        closedFace.classList.remove('active')
        openFace.classList.add('active');
    }
    document.querySelector('.count').innerHTML = counting;
    document.querySelector('.countClose').innerHTML = countingClose;
});
openFace.addEventListener('click', () =>{
    counting = counting + 1;
    countingOpen++;
    if(closedFace.classList.contains('closed')){
        openFace.classList.remove('active')
        closedFace.classList.add('active');
    }
    document.querySelector('.count').innerHTML = counting;
    document.querySelector('.countOpen').innerHTML = countingOpen;
});
