const imgSlider = document.getElementById('img-container');
imgSlider.className = 'img-fluid'
imgSlider.className = 'imgss'
const images = [
    'img/3.jpg',
    'img/6.jpg',
    'img/see-2.png',
    'img/w33.jpg'

]
let imgIndex = 0;

setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgSlider.setAttribute('src', imgUrl)
    console.log(imgUrl);
    imgIndex++;
}, 2000)