const hero = document.querySelector('.hero-content')


// const text = "lana bana"
// let characterIndex = 0
// updeteText()

// function updeteText() {
//     hero.innerHTML = ` <h1>
//     Lana Lezhava
//    </h1>
//        <h3>I am a frontend Developer</h3>
//         <div class="hero-social">
//           <i class="ri-facebook-line"></i>
//           <i class="ri-instagram-line"></i>
//           <i class="ri-twitter-line"></i>
//           <p>${text.slice(0, characterIndex)}</p>

//         </div>`;
//     characterIndex++
//     if (characterIndex === text.length) {
//         characterIndex = 0
//     }
//     setTimeout(updeteText, 200)
// }
$('body').ripples({
    resolution: 510,
    dropRadius: 30,
    perturbance: 200,
})

// Активное меню
const menuLinks = document.querySelectorAll('#menu a');


menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Удаляем класс active у всех ссылок
        menuLinks.forEach(item => item.classList.remove('active'))


        // Добавляем класс active к текущей ссылке
        this.classList.add('active');
    });
});

// Анимация текста имени при загрузке


const button = document.querySelector('.bars')
let menu = document.querySelector('.menu')
let barContact = document.querySelector('.bars-conct')

button.addEventListener('click', () => {
    menu.classList.toggle('active')
    menu.classList.toggle('show')

})

// Находим все точки
// const dots = document.querySelectorAll('.dot');

// // Получаем все секции через их ID из data-section
// const sections = Array.from(dots).map(dot => {
//     const sectionId = dot.getAttribute('data-section');
//     return document.getElementById(sectionId);
// });

// // Обработчик клика на точке
// dots.forEach(dot => {
//     dot.addEventListener('click', () => {
//         // Удаляем активный класс у всех точек
//         dots.forEach(d => d.classList.remove('active'));

//         // Добавляем активный класс к текущей точке
//         dot.classList.add('active');

//         // Прокручиваем к соответствующей секции
//         const sectionId = dot.getAttribute('data-section');
//         const targetSection = document.getElementById(sectionId);

//         if (targetSection) {
//             targetSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     });
// });

// // Обновление активного кружка при скролле
// window.addEventListener('scroll', () => {
//     let currentSection = '';

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         if (window.scrollY >= sectionTop - sectionHeight / 3) {
//             currentSection = section.getAttribute('id');
//         }
//     });

//     // Обновляем активный кружок
//     dots.forEach(dot => {
//         dot.classList.remove('active');
//         if (dot.getAttribute('data-section') === currentSection) {
//             dot.classList.add('active');
//         }
//     });
// });

const square = document.getElementById("square");
let x = 50;
let y = 50;
let dx = 0.5;
let dy = 0.5;

function move() {
    x += dx;
    y += dy;

    // Если квадрат касается краёв окна, меняем направление
    if (x + 50 > window.innerWidth || x < 0) dx = -dx;
    if (y + 50 > window.innerHeight || y < 0) dy = -dy;

    square.style.left = x + "px";
    square.style.top = y + "px";

    requestAnimationFrame(move); // Постоянное обновление
}

move();
