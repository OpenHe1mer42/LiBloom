const trendingRow = document.getElementById("trending");
const newBooksRow = document.getElementById("newBooks");
const bestsellersRow = document.getElementById("bestsellers");
const popup = document.getElementById("popup");


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
    title: "Hitchhiker's Guide to the Galaxy [1]",
    author: "Douglas Adams",
    coverUrl: "/images/book1.jpg",
  },
  {
    title: "Hitchhiker's Guide to the Galaxy [2]",
    author: "Douglas Adams",
    coverUrl: "/images/book2.jpg",
  },
  {
    title: "Hitchhiker's Guide to the Galaxy [3]",
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
    title: "Hitchhiker's Guide to the Galaxy [6]",
    author: "Douglas Adams",
    coverUrl: "/images/book6.jpg",
  },
];

const newBooksData = [
  {
    title: "Hitchhiker's Guide to the Galaxy [1]",
    author: "Douglas Adams",
    coverUrl: "/images/book1.jpg",
  },
  {
    title: "Hitchhiker's Guide to the Galaxy [2]",
    author: "Douglas Adams",
    coverUrl: "/images/book2.jpg",
  },
  {
    title: "Hitchhiker's Guide to the Galaxy [3]",
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
    title: "Hitchhiker's Guide to the Galaxy [6]",
    author: "Douglas Adams",
    coverUrl: "/images/book6.jpg",
  },
];

const bestsellersData = [
  {
    title: "Hitchhiker's Guide to the Galaxy [1]",
    author: "Douglas Adams",
    coverUrl: "/images/book1.jpg",
  },
  {
    title: "Hitchhiker's Guide to the Galaxy [2]",
    author: "Douglas Adams",
    coverUrl: "/images/book2.jpg",
  },
  {
    title: "Hitchhiker's Guide to the Galaxy [3]",
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
    title: "Hitchhiker's Guide to the Galaxy [6]",
    author: "Douglas Adams",
    coverUrl: "/images/book6.jpg",
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
