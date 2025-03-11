let cart = [];

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.querySelector(".close-cart"); // Corrección aquí
const checkoutButton = document.getElementById("checkout");
const totalElement = document.getElementById("total");
const purchaseModal = document.getElementById("purchase-modal");
const closePurchase = document.getElementById("close-purchase");

// EVENTO PARA BOTONES "AGREGAR AL CARRITO"
document.querySelectorAll(".buy-button").forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const productCard = button.closest(".product-info");
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = parseFloat(productCard.querySelector(".product-price").textContent.replace("$", ""));
        const product = { name: productName, price: productPrice };
        cart.push(product);
        updateCartCount();
        saveCart();
        updateTotal();
    });
});

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
}

function updateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// ABRIR EL MODAL DEL CARRITO
document.getElementById("cart-icon").addEventListener("click", function(event) {
    event.preventDefault();
    cartModal.style.display = "flex";
    displayCart();
    updateTotal();
});

// CERRAR EL MODAL DEL CARRITO
closeCart.addEventListener("click", function() {
    cartModal.style.display = "none";
});

// FINALIZAR COMPRA
checkoutButton.addEventListener("click", function() {
    purchaseModal.style.display = "flex";
    cart = [];
    updateCartCount();
    saveCart();
    updateTotal();
    cartModal.style.display = "none";
});

// CERRAR MODAL DE COMPRA FINALIZADA
closePurchase.addEventListener("click", function() {
    purchaseModal.style.display = "none";
});

// CARGAR EL CARRITO GUARDADO EN LOCALSTORAGE
function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
        updateTotal();
    }
}

loadCart();
