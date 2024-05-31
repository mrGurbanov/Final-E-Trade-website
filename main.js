const moneyBtn = document.getElementById("moneyBtn");
const moneyUl = document.getElementById("moneyUl");
const langBtn = document.getElementById("langBtn");
const langUl = document.getElementById("langUl");

let toogle = true;

moneyBtn.addEventListener('click', () => {
    if(toogle) {
        moneyUl.style.display = "block"
        moneyUl.classList.add('active')
    }else {
        moneyUl.style.display = "none"
        moneyUl.classList.remove('active')
    }
    toogle = !toogle;
});
langBtn.addEventListener('click', () => {
    if(toogle) {
        langUl.style.display = "block"
        langUl.classList.add('active')
    }else {
        langUl.style.display = "none"
        langUl.classList.remove('active')
    }
    toogle = !toogle;
});


