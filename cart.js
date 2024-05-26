document.addEventListener("DOMContentLoaded", () => {
  const cartContent = document.getElementById("cart-content");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContent.innerHTML = "<p>Your cart is empty</p>";
  } else {
    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="${item.coverUrl}" alt="${item.title} Cover" class="cover" />
        <div class="details">
          <p class="title">${item.title}</p>
          <p class="author">${item.author}</p>
          <div class="quantity-container">
            <button class="quantity-btn minus" onclick="updateQuantity(${index}, -1)">-</button>
            <input type="text" class="quantity-input" value="${item.quantity}" readonly />
            <button class="quantity-btn plus" onclick="updateQuantity(${index}, 1)">+</button>
          </div>
        </div>
      `;
      cartContent.appendChild(cartItem);
    });
  }
});

function updateQuantity(index, change) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += change;
  if (cart[index].quantity < 1) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.querySelector(".quantity-btn.minus");
  const plusBtn = document.querySelector(".quantity-btn.plus");
  const quantityInput = document.querySelector(".quantity-input");

  minusBtn.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  plusBtn.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
  });
});

document.getElementById("user-icon").addEventListener("click", function () {
  document.querySelector(".right").classList.add("flash-animation");
  setTimeout(function () {
    document.querySelector(".right").classList.remove("flash-animation");
  }, 1000);
});
