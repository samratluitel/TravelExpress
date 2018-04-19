var slider= tns({
    "container": ".gallery-slider",
    "items": 4,
    "controlsContainer": "#customize-controls",
    "controls":true,
    "autoplay": true,
    "nav":false,
    "autoplayButtonOutput":false,
    "autoplayTimeout": 3000,
    "speed": 400
})
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
Select.init();