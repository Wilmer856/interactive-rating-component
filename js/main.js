
let selected;
let btn = document.querySelectorAll('.nums')
for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', numBtnPress)
}

function numBtnPress(e) {
    pressed = e.target.innerText
    btn.forEach(b => {
        if(b.classList.contains('pressed')){
            b.classList.remove('pressed')
        }
    })
    btn[Number(pressed) - 1].classList.add('pressed')
    selected = Number(pressed) - 1
}

// event for button submission 

let submitBtn = document.querySelector('.submit-btn')

submitBtn.addEventListener('click', e => {
    btn.forEach(b => {
        if(b.classList.contains('pressed')){
            document.querySelector('.card-1').style.display= "none"
            document.querySelector('.card-2').style.display = "flex"

            document.querySelector('.num-selected').innerText = `You selected ${selected + 1} out of 5`
        }
    })
})
