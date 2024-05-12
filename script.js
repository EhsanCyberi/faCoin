// غیرفعال کردن انتخاب متن در وبسایت
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});


const coin = document.getElementById("coin");
const circle = document.querySelector('.circle');
const result = document.querySelector('.result');
const income = document.getElementById("income");
const btn = document.getElementById('btn');

// اگر مقدار coins در localStorage وجود ندارد، آن را با 0 مقداردهی اولیه کنید
if (!localStorage.getItem('coins')) {
    localStorage.setItem('coins', "0");
}

let taps = localStorage.getItem("taps");
if (!taps) {
    taps = "10"; // مقدار پیش‌فرض برای taps
}

income.innerHTML = taps;

let saveNumber = localStorage.getItem('coins');
let count = Number(saveNumber);

coin.addEventListener("click", function(event) {
    const num = document.createElement('div');
    num.innerHTML = taps;
    num.classList.add('num');
    circle.appendChild(num);
    let pageX = event.pageX;
    let pageY = event.pageY;
    num.style.top = pageY + "px";
    num.style.left = pageX + "px";
    num.style.animation = "fadeIn 0.5s ease-in-out;";
    num.style.display = "block";

    count += Number(taps);
    result.innerHTML = count;

    setTimeout(() => {
        num.remove();
    }, 1100);

    // ذخیره مقدار جدید coins در localStorage
    localStorage.setItem('coins', count.toString());
});

result.textContent = localStorage.getItem("coins");

// تابع مرتبط با دکمه btn را تعریف کنید
btn.addEventListener('click', function() {
    // اینجا کد مرتبط با دکمه btn را بنویسید
});
