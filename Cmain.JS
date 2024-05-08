/**/ 
const imagePaths = {
    "Avocado toast": "photo/Avocado Bruschetta.jpg",
    "cheese Pizza": "photo/Burrata-Pizza.jpg",
    "Grilled Chicken": "photo/Grilled-Chicken.jpg",
    "Tuscan Vegetable": "photo/Tuscan-Vegetable-Pizza.jpg",
    "Red Velvet Cake": "photo/Red-Velvet-Cake.jpg",
    "Cream caramel": "photo/Creme-Brulee.jpg",
    "French Toast": "photo/French-Toast.jpg",
    "Pancakes": "photo/Pancakes-1.jpg",
    "Pomegranate juice": "photo/Pomegranate-juice.jpg",
    "Passion Fruit juice": "photo/Passion-juice.jpg",
    "Strawberry juice": "photo/Strawberry-juice-3.jpg",
    "Italian Soda": "photo/Italian-Soda-3.jpg",
};


function loadCart() {
    const storedCart = localStorage.getItem('cart');
    cart = storedCart ? JSON.parse(storedCart) : {};
    displayCart();
}

function displayCart() {
    const itemsContainer = document.querySelector('.items');
    itemsContainer.innerHTML = ''; 
    Object.keys(cart).forEach(id => {
        const item = cart[id];
        itemsContainer.innerHTML += `
    <div class="Item">
    <img src="${item.img}" alt="${id}" height="130" width="130">
        <h3 class="name">${id}</h3>
        <div class="Price">Price : ${item.price} Sr</div>
        <div class="quantity">
            Quantity : <input type="number" value="${item.quantity}" min="1" onchange="updateItemQuantity('${id}', this.value)">
        </div>
        <div class="DeleteItem">
            <button onclick="deleteItem('${id}')">Delete Item</button>
        </div>
    </div>
`;

    });
}


function updateItemQuantity(id, quantity) {
    if (cart[id]) {
        
        cart[id].quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart)); 
    }
}


function deleteItem(id) {
    delete cart[id];
    displayCart();
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
}


function clearCart() {
    cart = {};
    displayCart();
    localStorage.removeItem('cart');
}

document.addEventListener('DOMContentLoaded', loadCart);

/* acknowledgment for total */
function checkout() {
    const total = calculateTotal();
    alert(`Thank you for your purchase! Your total cost is ${total} Sr.`);
    window.location.href = "../review/Review.html";
}

function calculateTotal() {
    return Object.values(cart).reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

        function darkMode() {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }