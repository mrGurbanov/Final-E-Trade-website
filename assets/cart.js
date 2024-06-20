export function handlerCart() {
    const addToCart = document.querySelectorAll(".cart-add");
    const cartSide = document.querySelector(".cart-sidebar");
    const cartBody = document.querySelector(".cart-body");
    const cartİtemList = document.querySelectorAll(".cart-item-list");
    const cartList = document.querySelectorAll(".cart-item");

    // let cart = [];

    const cartListName = "E-Trade";
    const cartLs = JSON.parse(localStorage.getItem("cartListName"));
    const cart = cartLs ?? [];

    
}
