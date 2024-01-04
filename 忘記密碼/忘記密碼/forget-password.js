document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('forgetPasswordForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // 從localStorage獲取用戶資料
        const userData = JSON.parse(localStorage.getItem('user'));

        if (userData && userData.email === email) {
            alert('您的密碼是: ' + userData.password);
            // 顯示完密碼後跳轉
            window.location.href = 'T:\\網頁程設\\星輝網科技網站\\星輝網科技公司\\登入系統\\index.html';
        } else {
            alert('找不到此註冊郵件!');
        }
    });
});
