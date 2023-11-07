
$(document).on('mousemove', (e) => {
    $('.cursor').css({
        'left': e.clientX + 'px',
        'top': e.clientY + 'px'
    });
});

$(".banner h1").on('mouseenter', (e) => {
    $(".cursor").addClass("active")
})
$(".header__logo").on('mouseenter', (e) => {
    $(".cursor").addClass("active")
})
$(".header__center").on('mouseenter', (e) => {
    $(".cursor").addClass("active")
})
$(".header__right").on('mouseenter', (e) => {
    $(".cursor").addClass("active")
})
$(".ProductSection li").on('mouseenter', (e) => {
    $(".cursor").addClass("active")
})
$(".banner h1").on('mouseleave', (e) => {
    $(".cursor").removeClass("active")
})
$(".header__logo").on('mouseleave', (e) => {
    $(".cursor").removeClass("active")
})
$(".header__center").on('mouseleave', (e) => {
    $(".cursor").removeClass("active")
})
$(".header__right").on('mouseleave', (e) => {
    $(".cursor").removeClass("active")
})
$(".ProductSection li").on('mouseleave', (e) => {
    $(".cursor").removeClass("active")
})