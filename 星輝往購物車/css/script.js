function updateProduct() {
    var product = document.getElementById('productOption').value;
    var priceTag = document.getElementById('priceTag');

    // 每個產品的價格
    var prices = {
        'galaxy-tab-x1': 'NT$5999',
        'galaxy-tab-x1-plus': 'NT$6999',
        'galaxy-tab-x1-ultra': 'NT$7999',
        'charging-cable': 'NT$499',
        'charging-head': 'NT$599',
        'adapter-cable': 'NT$399',
        'interstellar-ranger-r1': 'NT$15999',
        'interstellar-ranger-r1-plus': 'NT$17999',
        'interstellar-ranger-r1-pro': 'NT$19999',
        'interstellar-ranger-r1-pro-fe': 'NT$21999',
        'interstellar-watch': 'NT$9999',
        'interstellar-watch-mini': 'NT$8999',
        'interstellar-watch-pro': 'NT$10999',
        'interstellar-watch-fe': 'NT$11999',
        'stellar-watch': 'NT$7999',
        'stellar-tv': 'NT$25999',
        'stellar-pod': 'NT$2999',
        'stellar-pod-mini': 'NT$1999',
        'star-game': 'NT$1599',
        'star-one': 'NT$2599',
        'star-tv-plus': 'NT$399',
        'star-music': 'NT$499',
        'star-podcast': 'NT$599',
        'star-book': 'NT$699',
        'star-store': 'NT$799'
    };

    // 更新價格標籤
    priceTag.innerHTML = '價格: ' + (prices[product] || 'NT$2999');
}

function addToCart() {
    alert('產品已加入購物車！');
}
