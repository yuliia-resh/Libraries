/* TABS */

$('.card').on('click', function() {
    let currTab = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active');
})

/* HAMBURGER */

$('.hamburger').on('click', function() {
    $('.head__menu').toggle();
})

$('.menu-close').on('click', function() {
    $('.head__menu').hide();
})

/* PARALLAX */

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

/* SLIDER */
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2000
    }
});

/* VALIDATION */

$.validator.addMethod("regex", function(value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
},"Please check your input."
);

$("form").validate({
rules: {
    firstName: {
        required: true,
        regex : "[A-Za-z]{1,32}"   
    },
    phoneNumber: {
        digits : true,
        required: true,
        minlength: 10,
        maxlength: 11,
        regex: "[0-9]+"
    }
},
messages: {
    firstName: "Введите ваше имя правильно",
    phoneNumber: "Введите ваш номер"
}
});

/* MAP */
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });
}

