// 定义购物车数组
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

// 函数：将产品添加到购物车
function addToCart() {
    const productOption = document.getElementById('productOption');
    const selectedProduct = productOption.value;
    const productName = productOption.options[productOption.selectedIndex].text;
    const productPrice = getPrice(selectedProduct);


    // 检查购物车中是否已经有这个产品
    const existingItem = shoppingCart.find(item => item.id === selectedProduct);
    
    if (existingItem) {
        // 如果已存在，增加数量
        existingItem.quantity++;
    } else {
        // 如果不存在，创建一个新的项目
        const newItem = {
            id: selectedProduct,
            name: productName,
            price: parseFloat(productPrice), // 将价格转换为浮点数
            quantity: 1
        };
        shoppingCart.push(newItem);
    }
    
    // 显示警示框
    alert(productName + ' 已加入購物車！');
    
    // 更新购物车内容
    updateCart();
}

// 函数：根据产品 ID 获取价格
function getPrice(productId) {
    // 每个产品的价格
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

    return prices[productId] || '產品價格未設置';
}

// 函数：更新购物车内容
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    let totalPrice = 0;
    shoppingCart.forEach((item, index) => {
        const itemTotalPrice = item.price * item.quantity;
        totalPrice += itemTotalPrice;

        // 创建购物车项目元素
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

         // 更新 localStorage 中的購物車數據
         localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

// 函数：更新商品数量
function updateQuantity(index, quantity) {
    shoppingCart[index].quantity = Number(quantity);
    updateCart();
}

// 函数：从购物车中移除商品
function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCart();
}

// 函数：处理结账
function checkout() {
    if (shoppingCart.length === 0) {
        alert("購物車無商品");
    } else {
        // 處理結帳並清空購物車
        alert("感謝您的購買！");
        shoppingCart = []; // 清空購物車
        updateCart(); // 更新購物車顯示
    }
}


function updatePriceDisplay() {
    const productOption = document.getElementById('productOption');
    const selectedProduct = productOption.value;
    const productPrice = getPrice(selectedProduct);

    const priceDisplay = document.getElementById('priceDisplay');
    priceDisplay.textContent = `價格: NT$${productPrice}`;
}

// 函数：将购物车数据保存为 JSON 文件
function saveCartAsFile() {
    const jsonStr = JSON.stringify(shoppingCart, null, 2); // 格式化 JSON 字符串
    const blob = new Blob([jsonStr], {type: 'application/json'});
    const href = URL.createObjectURL(blob);
    
    // 创建下载链接
    const link = document.createElement('a');
    link.href = href;
    link.download = 'shopping-cart.json'; // 文件名
    document.body.appendChild(link);
    link.click();

    // 清理并移除链接
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
}

function loadCartFromFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('請選擇一個文件！');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        try {
            const cartData = JSON.parse(event.target.result);
            shoppingCart = cartData;
            updateCart();
            alert('購物車數據已加載！');
        } catch (error) {
            alert('文件解析錯誤！');
        }
    };

    reader.readAsText(file);
}

// 页面加载时初始化
window.onload = function() {
    loadCart();
    // 添加加载文件按钮的事件监听器
    const loadFileButton = document.getElementById('loadFileButton');
    loadFileButton.onclick = loadCartFromFile;
};

// 函数：从本地存储加载购物车
function loadCart() {
    const cartJson = localStorage.getItem('shoppingCart');
    if (cartJson) {
        shoppingCart = JSON.parse(cartJson);
        updateCart();
    }
}