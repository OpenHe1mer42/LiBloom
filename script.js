const trendingRow = document.getElementById("trending");
const newBooksRow = document.getElementById("newBooks");
const bestsellersRow = document.getElementById("bestsellers");
const popup = document.getElementById("popup");
const searchInput = document.getElementById("search");

function createBookElement(title, author, coverUrl) {
  return `
    <div class="book">
      <img src="${coverUrl}" alt="${title} Cover" class="cover" />
      <div class="add-icon">
        <div>
          <p>${title}</p>
          <p class="author">${author}</p>
        </div>
        <button class="addtocart">
          <img src="/images/more.svg" alt="Add To Cart" />
        </button>
      </div>
    </div>
  `;
}


document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("click", function(event) {
    if (event.target.closest(".addtocart")) {
      const button = event.target.closest(".addtocart");
      const title = button.getAttribute("data-title");
      const author = button.getAttribute("data-author");
      const coverUrl = button.getAttribute("data-coverurl");
      const quantity = button.getAttribute("data-quantity");
      addToCart(title, author, coverUrl, quantity);
    }
  });
});

function addToCart(title, author, coverUrl, quantity) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ title, author, coverUrl, quantity });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${title} added to cart!`);
}

function addBooksToRow(row, booksData) {
  row.innerHTML = "";
  booksData.forEach((book) => {
    const { title, author, coverUrl } = book;
    const bookHtml = createBookElement(title, author, coverUrl);
    row.insertAdjacentHTML("beforeend", bookHtml);
  });

}

const trendingBooksData = [
  {
    title: "Hitchhiker's Guide to the Galaxy 1",
    author: "Douglas Adams",
    coverUrl: "/images/book1.jpg",
  },
  {
    title: "Hitchhiker's Guide to the Galaxy 2",
    author: "Douglas Adams",
    coverUrl: "/images/book2.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    coverUrl: "/images/book8.jpg",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    coverUrl: "/images/book6.jpg",
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    coverUrl: "/images/book7.jpg",
  },
];

const newBooksData = [
  {
    title: "Hitchhiker's Guide to the Galaxy 3",
    author: "Douglas Adams",
    coverUrl: "/images/book3.jpg",
  },
  {
    title: "Hitchhiker's Guide to the Galaxy [4]",
    author: "Douglas Adams",
    coverUrl: "/images/book4.jpg",
  },
  {
    title: "Hitchhiker's Guide to the Galaxy [5]",
    author: "Douglas Adams",
    coverUrl: "/images/book5.jpg",
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hossein",
    coverUrl: "/images/book10.jpg",
  },
  {
    title: "The Little Prince",
    author: "Antoine De Saint-Exupery",
    coverUrl: "/images/book9.jpg",
  },
];

const bestsellersData = [
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    coverUrl: "/images/book11.jpg",
  },
  {
    title: "Devils",
    author: "Fyodor Dostoyevsky",
    coverUrl: "/images/book12.jpg",
  },
  {
    title: "The Adolescent",
    author: "Fyodor Dostoyevsky",
    coverUrl: "/images/book13.jpg",
  },
  {
    title: "The Idiot",
    author: "Fyodor Dostoyevsky",
    coverUrl: "/images/book14.jpg",
  },
  {
    title: "Humiliated and Insulted",
    author: "Fyodor Dostoyevsky",
    coverUrl: "/images/book15.jpg",
  },
];

addBooksToRow(trendingRow, trendingBooksData);
addBooksToRow(newBooksRow, newBooksData);
addBooksToRow(bestsellersRow, bestsellersData);

const books = document.querySelectorAll(".book");
books.forEach((book) => {
  book.addEventListener("click", () => {
    popup.style.display = "block";
  });
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

document.getElementById("user-icon").addEventListener("click", function () {
  document.querySelector(".right").classList.add("flash-animation");
  setTimeout(function () {
    document.querySelector(".right").classList.remove("flash-animation");
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const popupCover = document.getElementById("popup-cover");
  const popupTitle = document.getElementById("popup-title");
  const popupAuthor = document.getElementById("popup-author");
  const closePopup = document.querySelector(".popup .close");

  function openPopup(coverUrl, title, author) {
    const addToCartButton = document.getElementById('addtocart');
    const quantityInput = document.querySelector(".quantity-input");

    const bookId = `${title}-${author}`;  // Create a unique identifier for the book
    const storedQuantity = localStorage.getItem(bookId);

    const quantity = storedQuantity ? parseInt(storedQuantity, 10) : 1;
    quantityInput.value = quantity;

    popupCover.src = coverUrl;
    popupTitle.textContent = title;
    popupAuthor.textContent = author;
    popup.style.display = "block";
    addToCartButton.setAttribute('data-title', title);
    addToCartButton.setAttribute('data-author', author);
    addToCartButton.setAttribute('data-coverurl', coverUrl);
    addToCartButton.setAttribute('data-quantity', quantity);
}

  function closePopupFunc() {
    popup.style.display = "none";
  }

  closePopup.addEventListener("click", closePopupFunc);

  window.addEventListener("click", (event) => {
    if (event.target == popup) {
      closePopupFunc();
    }
  });

  document.querySelectorAll(".book").forEach((book) => {
    book.addEventListener("click", () => {
      const coverUrl = book.querySelector("img").src;
      const title = book.querySelector("p").textContent;
      const author = book.querySelector(".author").textContent;
     
      openPopup(coverUrl, title, author);
    });
  });
});

function changeFontSize(size) {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    element.style.fontSize = size + "px";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.querySelector(".quantity-btn.minus");
  const plusBtn = document.querySelector(".quantity-btn.plus");
  const quantityInput = document.querySelector(".quantity-input");

  function updateQuantity(change) {
      let currentValue = parseInt(quantityInput.value, 10);
      currentValue += change;
      if (currentValue < 1) {
          currentValue = 1;
      }
      quantityInput.value = currentValue;

      const addToCartButton = document.getElementById('addtocart');
      addToCartButton.setAttribute('data-quantity', currentValue);

      const title = addToCartButton.getAttribute('data-title');
      const author = addToCartButton.getAttribute('data-author');
      const bookId = `${title}-${author}`;
      localStorage.setItem(bookId, currentValue);
  }

  minusBtn.addEventListener("click", function () {
      updateQuantity(-1);
  });

  plusBtn.addEventListener("click", function () {
      updateQuantity(1);
  });
});

function normalizeText(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "");
}

function filterBooks() {
  const searchInputValue = searchInput.value.toLowerCase(); // Get the search input value
  const filteredTrendingBooks = filterBooksData(
    trendingBooksData,
    searchInputValue
  );
  const filteredNewBooks = filterBooksData(newBooksData, searchInputValue);
  const filteredBestsellers = filterBooksData(
    bestsellersData,
    searchInputValue
  );

  addBooksToRow(trendingRow, filteredTrendingBooks);
  addBooksToRow(newBooksRow, filteredNewBooks);
  addBooksToRow(bestsellersRow, filteredBestsellers);
}

function filterBooksData(booksData, searchTerm) {
  return booksData.filter(
    (book) =>
      normalizeText(book.title).includes(searchTerm) ||
      normalizeText(book.author).includes(searchTerm)
  );
}

searchInput.addEventListener("input", filterBooks);

let tapCount = 0;
const easterButton = document.getElementById("easter1");
easterButton.addEventListener("click", () => {
  tapCount++;
  if (tapCount === 12) {
    window.open("/images/easter-egg/flexbox-poster.png", "_blank");
    tapCount = 0;
  }
});

let tapCount2 = 0;
const easterButton2 = document.getElementById("easter2");
easterButton2.addEventListener("click", () => {
  tapCount2++;
  if (tapCount2 === 12) {
    window.open("/images/easter-egg/grid-poster.png", "_blank");
    tapCount2 = 0; // Reset tap count after opening the image
  }
});

