// ==========================================
// ШКОЛА ИСКУССТВ "ВДОХНОВЕНИЕ"
// Весь JavaScript код
// ==========================================

// Функция для записи в школу
function zapisatsya() {
    // Приветствие
    let name = prompt("✨ Добро пожаловать в школу искусств 'Вдохновение'!\n\nКак вас зовут?");
    if (!name) {
        alert("❌ Жаль! Приходите в другой раз :)");
        return;
    }
    
    // Телефон
    let phone = prompt("📞 Отлично, " + name + "! Введите ваш номер телефона:");
    if (!phone) {
        alert("❌ Без телефона мы не сможем с вами связаться!");
        return;
    }
    
    // Возраст
    let age = prompt("🎂 Возраст ученика:");
    if (!age) age = "не указан";
    
    // Направление
    let dir = prompt("🎨 Выберите направление:\n\n1 - Рисование\n2 - Музыка\n3 - Танцы\n4 - Театр\n\nВведите номер 1, 2, 3 или 4:");
    
    let dirText = "";
    let emoji = "";
    
    if (dir === "1") {
        dirText = "Рисование";
        emoji = "🎨";
    } else if (dir === "2") {
        dirText = "Музыка";
        emoji = "🎵";
    } else if (dir === "3") {
        dirText = "Танцы";
        emoji = "💃";
    } else if (dir === "4") {
        dirText = "Театр";
        emoji = "🎭";
    } else {
        dirText = "не выбрано";
        emoji = "❓";
    }
    
    // Красивое сообщение об успехе
    alert(
        "╔════════════════════════════════╗\n" +
        "║     ✅ ЗАЯВКА ПРИНЯТА! ✅      ║\n" +
        "╠════════════════════════════════╣\n" +
        "║  👤 Имя: " + name + "\n" +
        "║  📞 Телефон: " + phone + "\n" +
        "║  🎂 Возраст: " + age + "\n" +
        "║  " + emoji + " Направление: " + dirText + "\n" +
        "╠════════════════════════════════╣\n" +
        "║  ✨ Мы свяжемся с вами! ✨     ║\n" +
        "╚════════════════════════════════╝"
    );
}

// Функция для показа информации о направлении (для выпадающего меню)
function showDirection(direction) {
    let info = "";
    if (direction === "Рисование") {
        info = "🎨 РИСОВАНИЕ\n\nВозраст: от 4 лет\nГруппы: до 8 человек\n2 раза в неделю\n\nНажмите кнопку Записаться";
    } else if (direction === "Музыка") {
        info = "🎵 МУЗЫКА\n\nВозраст: от 5 лет\nИндивидуальные занятия\n2 раза в неделю\n\nНажмите кнопку Записаться";
    } else if (direction === "Танцы") {
        info = "💃 ТАНЦЫ\n\nВозраст: от 3 лет\nГруппы: до 12 человек\n3 раза в неделю\n\nНажмите кнопку Записаться";
    } else if (direction === "Театр") {
        info = "🎭 ТЕАТР\n\nВозраст: от 6 лет\nГруппы: до 10 человек\n2 раза в неделю\n\nНажмите кнопку Записаться";
    }
    alert(info);
}

// Сообщение, что сайт загрузился (для проверки)
console.log("✅ Сайт загружен! JavaScript работает.");

function zapisatsya() {
    let name = prompt("Введите ваше имя:");
    if (!name) return alert("Вы не ввели имя!");
    let phone = prompt("Введите телефон:");
    if (!phone) return alert("Вы не ввели телефон!");
    alert("✅ Спасибо, " + name + "! Мы свяжемся с вами по телефону " + phone);
}

function showDirection(direction) {
    alert("Вы выбрали: " + direction + "\nЗаписаться можно по кнопке на главной странице");
}

console.log("Сайт работает!");

function subscribeNews() {
    let email = document.getElementById('newsEmail').value;
    if (!email) {
        alert("Введите email!");
        return;
    }
    alert("✅ Спасибо! Вы подписаны на новости.");
    document.getElementById('newsEmail').value = "";
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    let btn = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('dark')) {
        btn.innerText = '☀️';
    } else {
        btn.innerText = '🌙';
    }
}