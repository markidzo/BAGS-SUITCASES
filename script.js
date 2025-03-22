const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const modalSearch = document.getElementById("modalSearch");

openSearch.addEventListener("click", () => {
    modalSearch.classList.add("active");
});

closeSearch.addEventListener("click", () => {
    modalSearch.classList.remove("active");
});



const openBasket = document.getElementById("openBasket");
        const closeBasket = document.getElementById("closeBasket");
        const basketOverlay = document.getElementById("modalBasket");

        openBasket.addEventListener("click", () => {
            basketOverlay.classList.add("active");
        });

        closeBasket.addEventListener("click", () => {
            basketOverlay.classList.remove("active");
        });

        document.body.addEventListener("click", (event) => {
            if (!event.target.closest(".basket") && !event.target.closest("#openBasket")) {
                basketOverlay.classList.remove("active");
            }
        }, true);



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