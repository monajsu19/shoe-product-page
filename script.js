// Get the lightbox element
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentImageIndex = 0;

const fullImages = Array.from(thumbnails).map(thumbnail => thumbnail.getAttribute('data-full'));

console.log("full images: ", fullImages)


// Add event listeners to all thumbnail images
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
      if (lightbox.style.display === 'none' || lightbox.style.display === '') {
        lightbox.style.display = 'flex'; // Show the lightbox
    }
        lightboxImage.src = fullImages[currentImageIndex];
       
        currentImageIndex = index;
    });
});

// Close the lightbox when the close button is clicked
document.querySelector('.close').addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Navigation functionality (left and right)
document.querySelector('.left').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
    lightboxImage.src = fullImages[currentImageIndex];
});

document.querySelector('.right').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
    lightboxImage.src = fullImages[currentImageIndex];
});

// Get the elements from the DOM
const addButton = document.querySelector('.add-quant-btn');
const subButton = document.querySelector('.sub-quant-btn');
const quantityDisplay = document.querySelector('.quantity');

// Initialize a variable for the quantity
let quantity = 0;

// Add event listener for the "+" button
addButton.addEventListener('click', () => {
    quantity++; // Increase the quantity
    quantityDisplay.textContent = quantity; // Update the displayed value
});

// Add event listener for the "-" button
subButton.addEventListener('click', () => {
    if (quantity > 0) { // Prevent the quantity from going below 0
        quantity--; // Decrease the quantity
    }
    quantityDisplay.textContent = quantity; // Update the displayed value
});


// Add to cart

const addToCartBtn = document.querySelector('.add-to-cart-btn');
const cartIconQuant = document.querySelector('.cart-icon-quant');
// Select the cart icon and cart display elements
const cartIcon = document.querySelector('.cart-icon');
const cartDisplay = document.querySelector('.cart-display');

let cart = {
    productName: 'Fall Limited Edition Sneakers',
    price: 125,
    quantity: 0,
    totalPrice: 0
}

addToCartBtn.addEventListener('click', () => {
    if (quantity > 0) {
        cart.quantity = quantity;
        cart.totalPrice = cart.price * quantity;

        cartIconQuant.textContent = quantity;

        cartDisplay.innerHTML = `
        
    <div class="cart-label">
        <h3> Cart </h3>
    </div>
    <div class="cart-item">
        <div class="cart-item-details">
            <p>${cart.productName}</p>
            <p>$${cart.price} sx ${cart.quantity} = $${cart.totalPrice}</p>
        </div>
        <button class="checkout-btn"> Checkout </button>
    </div>

         
    `;
    } else {
        alert("Please select a quantity greater than 0")
    }
})



// Add an event listener to the cart icon
cartIcon.addEventListener('click', () => {
  // Toggle the cart display visibility
  if (cartDisplay.style.display === 'none' || cartDisplay.style.display === '') {
    cartDisplay.style.display = 'flex'; // Show the cart if it's hidden
  } else {
    cartDisplay.style.display = 'none'; // Hide the cart if it's visible
  }
});



