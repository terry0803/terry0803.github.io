const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

document.addEventListener('DOMContentLoaded', function () {
  const signUpForm = document.getElementById('form1');
  const signInForm = document.getElementById('form2');

  // 處理註冊表單提交
  signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const user = signUpForm.querySelector('input[type="text"]').value.trim();
    const email = signUpForm.querySelector('input[type="email"]').value.trim();
    const password = signUpForm.querySelector('input[type="password"]').value.trim();

    // 檢查是否有空白欄位
    if (!user || !email || !password) {
      alert('請不要空白。');
      return;
    }

    // 檢查是否已存在相同的電子郵件
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.email === email) {
      alert('這註冊過了 傻B!');
      return;
    }

    // 儲存到localStorage
    localStorage.setItem('user', JSON.stringify({ user, email, password }));
    alert('註冊成功');

    // 清空註冊表單
    signUpForm.querySelector('input[type="text"]').value = '';
    signUpForm.querySelector('input[type="email"]').value = '';
    signUpForm.querySelector('input[type="password"]').value = '';
  });

  // 處理登錄表單提交
  signInForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // 從localStorage獲取用戶資料
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData && userData.email === email && userData.password === password) {
      alert('登入成功!');
      // 登入成功後跳轉
      window.location.href = 'https://terry0803.github.io/%E6%98%9F%E8%BC%9D%E7%B6%B2%E7%B6%B2%E7%AB%99/web.html';
    } else {
      alert('錯誤的信箱或是密碼!');
    }
  });
});
