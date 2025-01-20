// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Function to render products on the page
function renderProducts() {
  productList.innerHTML = ""; // Clear the existing product list

  products.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.textContent = `${product.name} - $${product.price}`;
    
    // Create Add to Cart button for each product
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.onclick = () => addToCart(product); // Add product to cart on click

    // Append button to product item
    productItem.appendChild(addToCartButton);
    
    // Append product item to product list
    productList.appendChild(productItem);
  });
}

// Function to render the cart
function renderCart() {
  cartList.innerHTML = ""; // Clear the cart list

  const cart = JSON.parse(sessionStorage.getItem("cart")) || []; // Retrieve cart from session storage

  cart.forEach((product) => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${product.name} - $${product.price}`;
    cartList.appendChild(cartItem);
  });
}

// Function to add product to the cart
function addToCart(product) {
  // Retrieve cart from session storage or initialize an empty cart
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Add product to cart
  cart.push(product);

  // Save the updated cart back to session storage
  sessionStorage.setItem("cart", JSON.stringify(cart));

  // Re-render the cart to reflect the updated cart
  renderCart();
}

// Function to clear the cart
function clearCart() {
  // Remove cart data from session storage
  sessionStorage.removeItem("cart");

  // Re-render the cart (which will now be empty)
  renderCart();
}

// Event listener for the clear cart button
clearCartBtn.addEventListener("click", clearCart);

// Initial render of products and cart
renderProducts();
renderCart(); // Display cart from session storage

