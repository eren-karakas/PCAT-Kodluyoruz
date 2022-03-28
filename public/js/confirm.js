let backPop = document.querySelector('.backpop')
let con = document.querySelector('.con')


let cancelBtn = document.querySelector('#cancelBtn')

function conFun(){
    backPop.style.visibility = 'visible'
    con.style.visibility = 'visible'

}

function closePopup(){
    backPop.style.visibility = 'hidden'
    con.style.visibility = 'hidden'

}