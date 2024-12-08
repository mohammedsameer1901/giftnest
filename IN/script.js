let cart = [];
let totalAmount = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  totalAmount += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const total = document.getElementById('totalAmount');

  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.textContent = `${item.product} - $${item.price}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeItem(index);
    div.appendChild(removeBtn);
    cartItems.appendChild(div);
  });

  total.textContent = totalAmount.toFixed(2);
}

function removeItem(index) {
  totalAmount -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert('Thank you for your purchase!');
    cart = [];
    totalAmount = 0;
    updateCart();
  }
}
