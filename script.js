// const openSearch = document.getElementById("openSearch");
// const closeSearch = document.getElementById("closeSearch");
// const modalSearch = document.getElementById("modalSearch");

// openSearch.addEventListener("click", () => {
//     modalSearch.classList.add("active");
// });

// closeSearch.addEventListener("click", () => {
//     modalSearch.classList.remove("active");
// });



const openBasket = document.getElementById("openBasket");
const closeBasket = document.getElementById("closeBasket");
const basketOverlay = document.getElementById("modalBasket");

openBasket.addEventListener("click", () => {
    basketOverlay.classList.add("active");
    displayCartItems(); // Вивести вміст кошика при відкритті
});

closeBasket.addEventListener("click", () => {
    basketOverlay.classList.remove("active");
});

document.body.addEventListener("click", (event) => {
    if (!event.target.closest(".basket") && !event.target.closest("#openBasket")) {
        basketOverlay.classList.remove("active");
    }
}, true);

// Функція для відображення товарів у кошику
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Очищаємо попередній вміст

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<li>Ваш кошик порожній.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} (Кількість: ${item.quantity}, Колір: ${item.color})`;
            cartItemsContainer.appendChild(li);
        });
    }
}

// Очищення кошика
function clearCart() {
    // Очистити localStorage
    localStorage.removeItem('cart');

    // Оновити кількість товарів на іконці кошика
    updateCartCount();

    // Оновити вміст кошика у модальному вікні
    displayCartItems();
}



function toggleText() {
    let textBox = document.querySelector(".text-box");
    let icon = document.querySelector(".toggle-icon");

    textBox.classList.toggle("active");

    // Змінюємо картинку
    if (textBox.classList.contains("active")) {
        icon.src = "img/minus.png"; // Іконка мінуса
    } else {
        icon.src = "img/plus.png"; // Іконка плюса
    }
}



// Підключаємо ScrollMagic (переконайтеся, що бібліотека підключена)
var controller = new ScrollMagic.Controller();

// Створюємо змінні для відстеження прокрутки
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector("header");

    if (window.innerWidth < 800) {
        // Якщо ширина більше 768px, прибираємо ефект
        header.classList.remove("sticky");
        return;
      }
    
    if (currentScroll > lastScrollTop) {
        // При скролі вниз ховаємо хедер
        header.classList.remove("sticky");
    } else {
        // При скролі вверх показуємо хедер
        header.classList.add("sticky");
    }
    lastScrollTop = currentScroll;
});

// CSS для плавності
const style = document.createElement('style');
style.innerHTML = `
    header {
        position: fixed;
        top: -100px;
        left: 0;
        width: 100%;
        background: white;
        padding: 15px 0;
        transition: top 0.3s ease-in-out;
    }
    .sticky {
        top: 0;
    }
    body {
        padding-top: 60px; /* Додаємо відступ, щоб уникнути стрибків */
    }
`;
document.head.appendChild(style);


const burger = document.getElementById('burger-btn');
const menu = document.getElementById('menu');

burger.addEventListener('click', function () {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});
