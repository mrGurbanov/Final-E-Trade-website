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

// document.querySelectorAll(".nav-menu > ul > li:hover > .megamenu").style.display = 'block';
// const liElements = document.querySelectorAll(".nav-menu > ul > li");
// for(let i = 0;i< liElements.length;i++){
//     const liElement = liElements[i];

//     liElement.addEventListener('mouseover',()=>{
//         liElement.children[1].style.display = 'block';
//     })
// }
