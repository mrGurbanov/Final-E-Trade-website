const moneyBtn = document.getElementById("moneyBtn");
const moneyUl = document.getElementById("moneyUl");
const langBtn = document.getElementById("langBtn");
const langUl = document.getElementById("langUl");

// let toogle = true;

// moneyBtn.addEventListener('click', () => {
//     if(toogle) {
//         moneyUl.style.display = "block"
//         moneyUl.classList.add('active')
//     }else {
//         moneyUl.style.display = "none"
//         moneyUl.classList.remove('active')
//     }
//     toogle = !toogle;
// });
// langBtn.addEventListener('click', () => {
//     if(toogle) {
//         langUl.style.display = "block"
//         langUl.classList.add('active')
//     }else {
//         langUl.style.display = "none"
//         langUl.classList.remove('active')
//     }
//     toogle = !toogle;
// });

function toggleDropmenu(btnElement, listElement) {
    let toogle = true;

    btnElement.addEventListener('click', () => {
        if(toogle) {
            listElement.style.display = "block"
            listElement.classList.add('active')
        }else {
            listElement.style.display = "none"
            listElement.classList.remove('active')
        }
        toogle = !toogle;
    });
}

toggleDropmenu(moneyBtn, moneyUl);
toggleDropmenu(langBtn, langUl);



const backToTop = document.getElementById("backToTop")
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
})

//     function backToTop () {
//         window.scrollTo(0, 0);
        
        
//     }
// console.log(backToTop);


