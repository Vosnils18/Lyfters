window.addEventListener('load', init);

let loadImages = false;
let slideIndex = 1;
let dotClicked = false;

const urlImages = 'http://localhost:80/lyfters/RealPage/webservice/index.php';
const slideshowContainer = document.querySelector(".slideshow-container");
const dotsContainer = document.querySelector(".dots");

const interval = setInterval(function() {
    plusSlides()
}, 8000);

const checkInterval = setInterval(function() {
    if (dotClicked) {
        clearInterval(interval);
    }
}, 1000);



function init() {
    getImages();
}

function getImages() {
    fetch(urlImages)
        .then((response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(getImagesSuccessHandler)
        .catch(getImagesErrorHandler);
}

function getImagesErrorHandler(data) {
    console.error(data);
    alert('het gaat allemaal fout, kutzooi');
}

function getImagesSuccessHandler(data) {
    if (loadImages === true) {
        return;
    }
    console.log(data);
    for (let image of data) {
        createSlideshow(image)
    }
    loadImages = true;
    showSlides(slideIndex);
}

function createSlideshow(img) {
    let mySlides = document.createElement('div');
    mySlides.classList.add('mySlides');
    mySlides.classList.add('fade');
    slideshowContainer.appendChild(mySlides);

    let image = document.createElement('img');
    image.src = img.image;
    image.style.width = '100%';
    mySlides.appendChild(image);

    let caption = document.createElement('div');
    caption.classList.add('text');
    caption.innerText = img.caption;
    mySlides.appendChild(caption);

    let dot = document.createElement('span');
    dot.classList.add('dot');
    dot.id = img.id;
    dot.addEventListener('click', dotClickHandler)
    dotsContainer.appendChild(dot);
}

function dotClickHandler(e) {
    dotClicked = true;
    let $target = e.currentTarget;
    if ($target.nodeName !== 'SPAN') {
        return;
    }
    currentSlide($target)
}

function plusSlides() {
    showSlides(slideIndex += 1);
    if (dotClicked) {
        setTimeout(plusSlides, 10000); // Change image every 2 seconds
    }
}

// Thumbnail image controls
function currentSlide(data) {
    showSlides(data.id);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length -1) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let slide of slides) {
        slide.style.display = "none";
    }
    for (let dot of dots) {
        dot.className = dot.className.replace(" active", "");
    }
    slides[n-1].style.display = "block";
    dots[n-1].className += " active";
}