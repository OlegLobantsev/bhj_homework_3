const btn = Array.from(document.querySelectorAll('.dropdown__value'))
const items = Array.from(document.querySelectorAll('.dropdown__item'))
const links = Array.from(document.querySelectorAll('.dropdown__link'))

btn.forEach(element => {
    element.addEventListener('click', onClickAct)

});

function findActiveBtn() {
    return btn.findIndex(btn => btn.nextElementSibling.classList.contains('dropdown__list_active'))
    
 }

function onClickAct(e) {
    e.target.nextElementSibling.classList.toggle('dropdown__list_active');
}

items.forEach(element => {
    element.addEventListener('click', onClick2)
});

function onClick2(e) {
    let text = e.target.textContent;
    e.preventDefault();
    btn[findActiveBtn()].textContent = text;
    btn[findActiveBtn()].nextElementSibling.classList.remove('dropdown__list_active')
}