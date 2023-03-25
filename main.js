const bar = document.querySelector('#bar');
const bar_content = document.querySelector('.nav-right');
const close = document.querySelector('#close');

if(bar) {
    bar.addEventListener('click', ()=> {
        bar_content.style.right = "0";
    })
}
if(close) {
    close.addEventListener('click', () => {
        bar_content.style.right = "-300px";
    })
}






