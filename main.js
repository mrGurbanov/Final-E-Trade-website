import { handlerCart } from "./assets/cart.js";

const moneyBtn = document.getElementById("moneyBtn");
const moneyUl = document.getElementById("moneyUl");
const langBtn = document.getElementById("langBtn");
const langUl = document.getElementById("langUl");
const cartIcon = document.querySelector(".cartIcon");
const cartTab = document.querySelector(".cart-sidebar");
const closeBtn = document.querySelector(".close-btn");
const productArea = document.querySelector(".product-area");
const productActivation = document.querySelector(".product-activation");

////////////======= Top - Dropdown ======/////////////

function toggleDropmenu(btnElement, listElement) {
  let toogle = true;

  btnElement.addEventListener("click", () => {
    if (toogle) {
      listElement.style.display = "block";
      listElement.classList.add("active");
    } else {
      listElement.style.display = "none";
      listElement.classList.remove("active");
    }
    toogle = !toogle;
  });
}

toggleDropmenu(moneyBtn, moneyUl);
toggleDropmenu(langBtn, langUl);

////////////======= Back-To-Top ======/////////////

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});

////////////======= Open-Cart-Sidebar ======/////////////

cartIcon.addEventListener("click", () => {
  cartTab.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  cartTab.classList.remove("open");
});

////////////======= Get-Data ======/////////////

async function main() {
  const getData = await fetch("https://fakestoreapi.com/products/");
  const datas = await getData.json();

  if (datas) {
    datas.slice(0 ,datas.length - 1).forEach((item, index) => {
      // productActivation.dataset.id = item.id;

      productArea.innerHTML += `
                <div class="product-activation">
                  <div class="slick-list">
                    <div class="slick-track">
                      <div class="slick-single-layout">
                        <div class="arrival-products" data-id=${item.id}>
                          <div class="thumbnail">
                            <a href="#">
                              <img src=${item.image} alt="">
                              <img class="hover-img" src=${datas[index + 1].image} alt="">
                            </a>
                            <div class="product-off">
                              <div class="off">20% OFF</div>
                            </div>
                            <div class="product-hover">
                              <ul class="cart-action">
                                <li class="wishlist">
                                  <a href="#">
                                    <i class="fa-regular fa-heart"></i>
                                  </a>
                                </li>
                                <li class="select-add-to-cart">
                                  <button class="cart-add" id="cart-add-btn">
                                    Add to Cart
                                  </button>
                                </li>
                                <li class="quickview">
                                  <a href="#">
                                    <i class="fa-regular fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="product-content">
                            <div class="inner">
                              <h5>
                                <a href="#">${item.title}</a>
                              </h5>
                              <div class="product-price">
                                <span class="price old-price">$80</span>
                                <span class="price new-price">$${item.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      `;
    });
    handlerCart();
  }
}

main();
