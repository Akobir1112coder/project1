const bars=document.querySelector('.bars')
const xx=document.querySelector('.btn_x')
const ul1=document.querySelector('.ul1')


xx.addEventListener(`click`, ()=> {
    ul1.classList.remove(`blok`);
    xx.classList.remove(`blok`)

})
bars.addEventListener(`click`, ()=> {
    ul1.classList.add(`blok`);
bars.classList.add(`none`);
xx.classList.add(`blok`)
})