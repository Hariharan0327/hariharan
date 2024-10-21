let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

document.getElementById('checkout-btn').addEventListener('click', function() {
    alert(`Total Amount: $${totalPrice.toFixed(2)}\nThank you for your purchase!`);
    cart = [];
    totalPrice = 0;
    updateCart();
});

