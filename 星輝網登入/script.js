function authenticate() {
    showLoadingAnimation();

    let username = loginForm.username.value.trim();
    let password = loginForm.password.value.trim();

    if (!username || !password) {
        showError('請填寫所有必填欄位。');
        removeLoadingAnimation();
        return false;
    }

    let staffList = JSON.parse(localStorage.getItem('staffList')) || [];

    let userFound = false;
    for (let i = 0; i < staffList.length; i++) {
        if (staffList[i].name === username && staffList[i].password === password) {
            userFound = true;
            // 登入成功，顯示訊息
            showSuccessMessage('登入成功！');
            // 導向到成功頁面
            window.location.href = 'https://terry0803.github.io/%E6%98%9F%E8%BC%9D%E7%B6%B2%E7%B6%B2%E7%AB%99/web.html';
            break;
        }
    }

    if (!userFound) {
        showError('找不到使用者或輸入的帳號密碼不正確。');
    }

    removeLoadingAnimation();
    return false;
}

// 新增的函數：顯示成功訊息
function showSuccessMessage(message) {
    alert(message); // 也可以使用其他自定義的 UI 提示方式
}


function registerUser() {
    showLoadingAnimation();

    let newUsername = registerForm.newUsername.value.trim();
    let newPassword = registerForm.newPassword.value.trim();

    if (!newUsername || !newPassword) {
        showError('請填寫所有必填欄位。');
        removeLoadingAnimation();
        return false;
    }

    if (!isStrongPassword(newPassword)) {
        showError('密碼必須包含至少一個大寫字母、一個小寫字母、一個數字，且長度至少為8個字符。');
        removeLoadingAnimation();
        return false;
    }

    try {
        let staffList = JSON.parse(localStorage.getItem('staffList')) || [];

        if (staffList.some(user => user.name === newUsername)) {
            showError('該使用者名稱已被使用，請選擇另一個名稱。');
            removeLoadingAnimation();
            return false;
        }

        staffList.push({ name: newUsername, password: newPassword });
        localStorage.setItem('staffList', JSON.stringify(staffList));

        alert('註冊成功！將返回登入頁面進行登入。');
        window.location.href = "登入.html";
    } catch (error) {
        console.error('Error during registration:', error);
        alert('註冊失敗。請再試一次。');
    }

    removeLoadingAnimation();
    return false;
}

function recoverPassword() {
    showLoadingAnimation();

    let recoverUsername = forgotPasswordForm.recoverUsername.value.trim();

    let staffList = JSON.parse(localStorage.getItem('staffList')) || [];
    let foundUser = staffList.find(user => user.name === recoverUsername);

    if (foundUser) {
        alert(`您的密碼是：${foundUser.password}`);
        window.location.href = '登入.html';
    } else {
        alert('找不到該使用者。');
    }

    removeLoadingAnimation();
    return false;
}

function isStrongPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

function showLoadingAnimation() {
    let loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading-spinner';

    let form = document.forms['loginForm'] || document.forms['registerForm'] || document.forms['forgotPasswordForm'];
    form.appendChild(loadingSpinner);
}

function removeLoadingAnimation() {
    let form = document.forms['loginForm'] || document.forms['registerForm'] || document.forms['forgotPasswordForm'];
    let loadingSpinner = form.querySelector('.loading-spinner');
    if (loadingSpinner) {
        form.removeChild(loadingSpinner);
    }
}

function togglePasswordVisibility() {
    let passwordInput = document.getElementById('password');
    let showPasswordCheckbox = document.getElementById('showPassword');

    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
}

function toggleNewPasswordVisibility() {
    let newPasswordInput = document.getElementById('newPassword');
    let showNewPasswordCheckbox = document.getElementById('showNewPassword');

    newPasswordInput.type = showNewPasswordCheckbox.checked ? 'text' : 'password';
}

function showError(message) {
    let errorContainer = document.createElement('div');
    errorContainer.className = 'error-message';
    errorContainer.textContent = message;

    let form = document.forms['loginForm'] || document.forms['registerForm'] || document.forms['forgotPasswordForm'];
    form.appendChild(errorContainer);

    setTimeout(() => {
        form.removeChild(errorContainer);
    }, 3000);
}
