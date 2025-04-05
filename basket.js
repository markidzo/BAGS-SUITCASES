document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById('order-summary')) {
        displayCheckoutItems();
    }
});

// Відображення товарів у checkout.html
function displayCheckoutItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderSummary = document.getElementById('order-summary');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    
    orderSummary.innerHTML = '';

    if (cart.length === 0) {
        orderSummary.innerHTML = '<li>Ваш кошик порожній.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('order-item');
            totalPrice += item.price * item.quantity;

            li.innerHTML = `
                <div class="order-item-info">
                    <p><strong>${item.name}</strong></p>
                    <p>Колір: ${item.color}</p>
                    <p>Кількість: ${item.quantity}</p>
                    <p>Ціна: ${item.price * item.quantity} грн</p>
                </div>
            `;
            orderSummary.appendChild(li);
        });
    }
    
    totalPriceElement.textContent = totalPrice;
}





