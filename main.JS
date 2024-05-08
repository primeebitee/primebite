 /* 1- sorting */
 function sortSections() {
    
    var ids = ['Main-Category', 'Sweet-Category', 'Drinks-Category'];
  
    
    const sortOption = document.getElementById('sortOptions').value;
  
    
    ids.forEach(id => {
      const container = document.getElementById(id);
      let sections = Array.from(container.getElementsByClassName('section'));
  
      
      sections.sort((a, b) => {
        const nameA = a.querySelector('h3').textContent;
        const nameB = b.querySelector('h3').textContent;
        if (sortOption === 'name-asc') {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
  
      
      container.innerHTML = '';
      sections.forEach(section => container.appendChild(section));
    });
  }
  
  
  sortSections();
 

/*2- local storege for items */ 
const itemDetails = {
  "Avocado toast": { price: 45, img: "photo/Avocado Bruschetta.jpg" },
  "cheese Pizza": { price: 90, img: "photo/Burrata-Pizza.jpg" },
  "Grilled Chicken": { price: 92, img: "photo/Grilled-Chicken.jpg" },
  "Tuscan Vegetable": { price: 68, img: "photo/Tuscan-Vegetable-Pizza.jpg" },
  "Red Velvet Cake": { price: 36, img: "photo/Red-Velvet-Cake.jpg" },
  "Cream caramel": { price: 42, img: "photo/Creme-Brulee.jpg" },
  "French Toast": { price: 42, img: "photo/French-Toast.jpg" },
  "Pancakes": { price: 42, img: "photo/Pancakes-1.jpg" },
  "Pomegranate juice": { price: 26, img: "photo/Pomegranate-juice.jpg" },
  "Passion Fruit juice": { price: 26, img: "photo/Passion-juice.jpg" },
  "Strawberry juice": { price: 26, img: "photo/Strawberry-juice-3.jpg" },
  "Italian Soda": { price: 30, img: "photo/Italian-Soda-3.jpg" }
};


let cart = {};
function updateCart(id, checked) {
    if (checked) {
   
        cart[id] = cart[id] || { quantity: 1, price: itemDetails[id].price, img: itemDetails[id].img };
    } else {
        if (cart[id]) delete cart[id];
    }
    
}

function modifyQuantity(id, increase) {
    if (cart[id]) {
        if (increase) {
            cart[id].quantity++;
        } else {
            if (cart[id].quantity > 0) cart[id].quantity--;
            if (cart[id].quantity === 0) delete cart[id];
        }
        document.getElementById(`quantity_${id}`).textContent = cart[id] ? cart[id].quantity : 0;
    }
}

function saveCartAndRedirect() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'CartPage.html';
}
function modifyQuantity(id, increase) {
  const quantityElement = document.getElementById(`quantity_${id}`);
  let currentQuantity = parseInt(quantityElement.textContent);

  if (increase) {
      currentQuantity++;
  } else {
      if (currentQuantity > 0) {
          currentQuantity--;
      }
  }

  quantityElement.textContent = currentQuantity; 
  if (cart[id]) {
      cart[id].quantity = currentQuantity;
      if (currentQuantity === 0) {
          delete cart[id];
      }
  } else if (currentQuantity > 0) {
      cart[id] = { quantity: currentQuantity };
  }
}


        function darkMode() {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }
    