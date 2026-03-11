// انيميشن عند الدخول
window.addEventListener('load', () => {
    document.querySelector('.container').classList.add('animate__fadeInDown');
});

// انيميشن في الخانات
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('animate__pulse');
    });
    input.addEventListener('blur', () => {
        input.classList.remove('animate__pulse');
    });
});

// تسجيل الدخول
document.getElementById('login_button').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    if (email && password && confirm_password) {
        if (password === confirm_password) {
            // تسجيل الدخول بنجاح
            alert('تسجيل الدخول بنجاح');
        } else {
            alert('كلمة المرور وتأكيد كلمة المرور لا يتطابقان');
        }
    } else {
        alert('يجب ملء جميع الحقول');
    }
});
