const mod = document.querySelector('.btn');
const stylus = document.querySelector('.stl');
mod.addEventListener('click', () =>{
    if(stylus.getAttribute('href') == 'stylesM.css')
    {
        stylus.setAttribute('href', 'darkM.css')
    } else(stylus.setAttribute('href', 'stylesM.css'))
})