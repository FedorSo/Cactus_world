const addToCartButtons = document.querySelectorAll(".shop-item-button");
// console.log(addToCartButtons);

for (let b of addToCartButtons) {
    b.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
    const shopItem = event.target.parentElement.parentElement;
    const title = shopItem.querySelector(".shop-item-title").innerText;
    const price = shopItem.querySelector(".shop-item-price-now").innerText;
    const imageSrc = shopItem.querySelector(".shop-item-image").src;

    

    // console.log(shopItem);
    // console.log(title, price, imageSrc);

    addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc) {
    // console.log("Добавляем товар:", title, price, imageSrc);
    const cartItems = document.querySelector(".cart-items");

    // Проверяем, есть ли такой товар в корзине

    const cartItemNames = cartItems.querySelectorAll(".cart-item-title");

    // console.log(cartItemNames);

    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("Этот товар уже в корзине!");
            return;
        }
    }

    
    const cartRow = document.createElement("div");
    cartItems.appendChild(cartRow);

    cartRow.classList.add("cart-row");
    cartRow.innerHTML = "Привет всем!";

    let cartRowContents = `
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                    <span class="cart-item-title">${title}</span>
                </div>

                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" min="1" value="1">
                    <button class="btn btn-danger" type="button">Удалить</button>
                </div>`;

    cartRow.innerHTML = cartRowContents
}