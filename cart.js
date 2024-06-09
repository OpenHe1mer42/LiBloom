document.addEventListener("DOMContentLoaded", () => {
  const cartContent = document.getElementById("cart-content");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const updateCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  };

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
            <button class="quantity-btn minus" data-index="${index}">-</button>
            <input type="text" class="quantity-input" value="${item.quantity}" readonly />
            <button class="quantity-btn plus" data-index="${index}">+</button>
          </div>
        </div>
      `;
      cartContent.appendChild(cartItem);
    });
  }

  cartContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("quantity-btn")) {
      const index = parseInt(event.target.getAttribute("data-index"), 10);
      if (event.target.classList.contains("minus")) {
        cart[index].quantity = parseInt(cart[index].quantity, 10) - 1;
        if (cart[index].quantity < 1) {
          cart.splice(index, 1);
        }
      } else if (event.target.classList.contains("plus")) {
        cart[index].quantity = parseInt(cart[index].quantity, 10) + 1;
      }
      updateCart();
    }
  });
});

document.getElementById("user-icon").addEventListener("click", function () {
  document.querySelector(".right").classList.add("flash-animation");
  setTimeout(function () {
    document.querySelector(".right").classList.remove("flash-animation");
  }, 1000);
});
