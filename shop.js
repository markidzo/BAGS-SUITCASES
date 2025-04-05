// const openSearch = document.getElementById("openSearch");
// const closeSearch = document.getElementById("closeSearch");
// const modalSearch = document.getElementById("modalSearch");

// openSearch.addEventListener("click", () => {
//     modalSearch.classList.add("active");
// });

// closeSearch.addEventListener("click", () => {
//     modalSearch.classList.remove("active");
// });




document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});

// Функція зміни кількості товару
function changeQuantity(amount) {
    let quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantity = Math.max(1, quantity + amount);
    quantityElement.textContent = quantity;
}

// Отримання кількості вибраного товару
function getQuantity() {
    return parseInt(document.getElementById("quantity").textContent);
}

// Отримання вибраного кольору
function getColor() {
    return document.getElementById("color_selector").value;
}

// Функція додавання товару в кошик
function addToCart(id, name, price, quantity, color) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.id === id && item.color === color);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id, name, price, quantity, color });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Оновлення лічильника товарів у кошику
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let uniqueItemsCount = cart.length;
    document.getElementById("cart-count").textContent = uniqueItemsCount;
}

// Функція для відкриття кошика
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



//відображення товарів у кошику

function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Очищаємо попередній вміст
    let totalPrice = 0; // Загальна сума всіх товарів

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<li>Ваш кошик порожній.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name}             
            
            (Кількість:   ${item.quantity}, Колір:   ${item.color}, Сума:   ${item.price * item.quantity} грн)`;
            cartItemsContainer.appendChild(li);
            totalPrice += item.price * item.quantity; // Додаємо до загальної суми
        });

        // Додаємо загальну суму до списку
        const totalLi = document.createElement('li');
        totalLi.textContent = `Загальна сума: ${totalPrice} грн`;
        totalLi.style.fontWeight = 'bold';
        cartItemsContainer.appendChild(totalLi);
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

// Оновити кількість товарів на іконці кошика
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}





// Заборона додавання в кошик без вибору кольору
// function getColor() {
//     const colorSelect = document.getElementById('color_selector');
//     if (colorSelect.value === "change") {
//         alert("Будь ласка, виберіть колір товару!");
//         return null;
//     }
//     return colorSelect.value;
// }

// Оновлення зображення при виборі кольору

// Оновлена функція додавання в кошик
// function addToCart(id, name, price, quantity, color) {
//     if (!color) return; // Якщо колір не вибрано, припиняємо виконання


//     let existingItem = cart.find(item => item.id === id && item.color === color);
//     if (existingItem) {
//         existingItem.quantity += quantity;
//     } else {
//         cart.push({ id, name, price, quantity, color });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();

//     const imageSrc = document.getElementById('product-image').src;
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     cart.push({ id, name, price, quantity, color, image: imageSrc });
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`${name} (${color}) додано в кошик!`);
//     updateCartCount();
// }




const burger = document.getElementById('burger-btn');
const menu = document.getElementById('menu');

burger.addEventListener('click', function () {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});






function toggleFiltr() {
    let textBox = document.querySelector(".filters");
    let icon = document.querySelector(".shoto");

    textBox.classList.toggle("active");

    // Змінюємо картинку
    if (textBox.classList.contains("active")) {
        icon.src = "img/up.png"; // Іконка мінуса
    } else {
        icon.src = "img/down.png"; // Іконка плюса
    }
}






    $(document).ready(function(){
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
    
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows: false
        });
    });

    // let quantity = 1;

    // function increaseQuantity() {
    //     quantity++;
    //     document.getElementById("quantity").textContent = quantity;
    // }
    
    // function decreaseQuantity() {
    //     if (quantity > 1) {
    //         quantity--;
    //         document.getElementById("quantity").textContent = quantity;
    //     }
    // }
    

