const  lines = document.querySelectorAll('.line')
const  items = document.querySelectorAll('.items')

lines.forEach((line, index) => {
    line.addEventListener('click', () => {
        if (items[index+1].className.includes('active')){
            items[index+1].classList.remove('active');
        }else{
            removeClass(index)
        } 
    })
});

function removeClass(index) {

    items.forEach(item => {
        item.classList.remove('active')
    })
    addClass(index)
}

function addClass(index) {
    items[index+1].classList.add('active');
}