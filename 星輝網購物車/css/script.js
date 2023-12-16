// 定義購物車陣列
let shoppingCart = [];

// 函數：將產品添加到購物車
function addToCart() {
    const productOption = document.getElementById('productOption');
    const selectedProduct = productOption.value;
    const productName = productOption.options[productOption.selectedIndex].text;
    const productPrice = getPrice(selectedProduct);

    // 檢查購物車中是否已經有這個產品
    const existingItem = shoppingCart.find(item => item.id === selectedProduct);
    
    if (existingItem) {
        // 如果已存在，增加數量
        existingItem.quantity++;
    } else {
        // 如果不存在，創建一個新的項目
        const newItem = {
            id: selectedProduct,
            name: productName,
            price: parseFloat(productPrice), // 將價格轉換為浮點數
            quantity: 1
        };
        shoppingCart.push(newItem);
    }
    
    // 顯示警示框
    alert(productName + ' 已加入購物車！');
    
    // 更新購物車內容
    updateCart();
}

// 函數：根據產品 ID 獲取價格
function getPrice(productId) {
    // 每個產品的價格
    const prices = {
        'galaxy-tab-x1': '5999',
        'galaxy-tab-x1-plus': '6999',
        'galaxy-tab-x1-ultra': '7999',
        'charging-cable': '499',
        'charging-head': '599',
        'adapter-cable': '399',
        'interstellar-ranger-r1': '15999',
        'interstellar-ranger-r1-plus': '17999',
        'interstellar-ranger-r1-pro': '19999',
        'interstellar-ranger-r1-pro-fe': '21999',
        'interstellar-watch': '9999',
        'interstellar-watch-mini': '8999',
        'interstellar-watch-pro': '10999',
        'interstellar-watch-fe': '11999',
        'stellar-watch': '7999',
        'stellar-tv': '25999',
        'stellar-pod': '2999',
        'stellar-pod-mini': '1999',
        'star-game': '1599',
        'star-one': '2599',
        'star-tv-plus': '399',
        'star-music': '499',
        'star-podcast': '599',
        'star-book': '699',
        'star-store': '799'
    };

     return prices[productId] || '產品價格未設定';
}


// 函數：更新購物車內容
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    let totalPrice = 0;
    shoppingCart.forEach((item, index) => {
        const itemTotalPrice = item.price * item.quantity;
        totalPrice += itemTotalPrice;

        // 創建購物車項目元素
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - 
            NT$${item.price.toFixed(2)} x 
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            = NT$${itemTotalPrice.toFixed(2)}
            <button onclick="removeFromCart(${index})">刪除</button>
        `;
        cartItems.appendChild(li);
    });

    total.textContent = `總計: NT$${totalPrice.toFixed(2)}`;
}

// 函數：更新商品數量
function updateQuantity(index, quantity) {
    shoppingCart[index].quantity = Number(quantity);
    updateCart();
}

// 函數：從購物車中移除商品
function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCart();
}


// 函數：處理結帳
function checkout() {
    // 在此處處理結帳邏輯，例如跳轉到支付頁面
    alert("感謝您的購買！");
}
function updatePriceDisplay() {
    const productOption = document.getElementById('productOption');
    const selectedProduct = productOption.value;
    const productPrice = getPrice(selectedProduct);

    const priceDisplay = document.getElementById('priceDisplay');
    priceDisplay.textContent = `價格: NT$${productPrice}`;
}

// 初始化購物車
updateCart();










