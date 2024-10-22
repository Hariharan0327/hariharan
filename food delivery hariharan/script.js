const menuItems = [
    { id: 1, name: 'JUICES', price: 100 },
    { id: 2, name: 'PANI POORI ', price: 25 },
    { id: 3, name: 'NOODLES', price: 70 },
    { id: 4, name: 'CHICKEN RICE', price: 90 },
    { id: 5, name: 'BRIYANI', price: 120 }
];

let cart = [];

function displayMenu() {
    const menu = document.getElementById('menu');
    menuItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menu.appendChild(div);
    });
}

function addToCart(id) {
    const item = menuItems.find(item => item.id === id);
    cart.push(item);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(div);
    });
}

document.getElementById('checkoutButton').addEventListener('click', function() {
    if (cart.length > 0) {
        alert('Thank you for your order!');
        cart = []; // Clear the cart after checkout
        displayCart();
    } else {
        alert('Your cart is empty.');
    }
});

// Initial display of the menu
displayMenu();
