// Функция записи
function zapisatsya() {
    let name = prompt("Введите ваше имя:");
    if (!name) {
        alert("Вы не ввели имя!");
        return;
    }
    
    let phone = prompt("Введите номер телефона:");
    if (!phone) {
        alert("Вы не ввели телефон!");
        return;
    }
    
    let age = prompt("Введите возраст ученика:");
    if (!age) age = "не указан";
    
    let dir = prompt("Выберите направление:\n1 - Рисование\n2 - Музыка");
    
    let dirText = "";
    if (dir === "1") dirText = "Рисование";
    else if (dir === "2") dirText = "Музыка";
    else dirText = "не выбрано";
    
    alert("✅ Спасибо, " + name + "!\n\n📞 Телефон: " + phone + "\n🎂 Возраст: " + age + "\n🎨 Направление: " + dirText + "\n\nМы свяжемся с вами!");
}

// Функция для выпадающего меню
function showDirection(direction) {
    let info = "";
    if (direction === "Рисование") {
        info = "🎨 РИСОВАНИЕ\n\nВозраст: от 4 лет\nГруппы: до 8 человек\n2 раза в неделю";
    } else if (direction === "Музыка") {
        info = "🎵 МУЗЫКА\n\nВозраст: от 5 лет\nИндивидуальные занятия\n2 раза в неделю";
    }
    alert(info);
}

console.log("Сайт загружен! JavaScript работает.");

function subscribeNews() {
    let email = document.getElementById('newsEmail').value;
    if (!email) {
        alert("Введите email!");
        return;
    }
    
    // Простая проверка, что email похож на email
    if (!email.includes('@') || !email.includes('.')) {
        alert("Введите корректный email (например: name@mail.ru)");
        return;
    }
    
    alert("✅ Спасибо! Вы подписаны на новости.");
    document.getElementById('newsEmail').value = "";
}
// ПОДПИСКА НА НОВОСТИ
function subscribeNews() {
    let email = document.getElementById('newsEmail').value;
    if (!email) {
        alert("Введите email!");
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        alert("Введите корректный email!");
        return;
    }
    alert("✅ Спасибо! Вы подписаны на новости.");
    document.getElementById('newsEmail').value = "";
}

// КНОПКА "НАВЕРХ"
window.addEventListener('scroll', function() {
    let goTop = document.querySelector('.go-top');
    if (goTop) {
        if (window.scrollY > 300) {
            goTop.classList.add('show');
        } else {
            goTop.classList.remove('show');
        }
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}