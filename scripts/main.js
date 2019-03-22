// Slider
document.addEventListener('DOMContentLoaded', function () {
    const slide = document.querySelectorAll('.slider');
    M.Slider.init(slide, {
        indicators: false,
        height: 500,
        duration: 500,
        interval: 6000
    });

    // Side Nav
    const sn = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sn, {
        draggable: true,

    });
});