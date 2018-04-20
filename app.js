function OpenSlideMenu(){
    document.getElementById("side-menu").style.height="100vh";
    document.getElementById("side-menu").style.width="250px";
}

function CloseSlideMenu(){
    setTimeout(()=>document.getElementById("side-menu").style.height="0px",300)
    document.getElementById("side-menu").style.width="0px";
}

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