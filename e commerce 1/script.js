const cartItems = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.parentElement;
        const productName = product.querySelector('h3').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.replace('Price: $', ''));

        cartItems.push(productName);
        totalPrice += productPrice;

        updateCart();
    });
});

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        cartItemsList.appendChild(li);
    });

    document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
}
