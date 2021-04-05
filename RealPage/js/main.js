let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}



// window.addEventListener('load', init);
//
// let loadImages = false;
// const urlImages = 'http://localhost:80/lyfters/RealPage/webservice/index.php';
// const slideshowContainer = document.querySelector("#slideshow");
// const dotsContainer = document.querySelector(".dots");
// let slideIndex = 1;
//
//
//
// function init() {
//     fetch(urlImages)
//         .then((response) => {
//             if(!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             return response.json();
//         })
//         .then(getImagesSuccessHandler)
//         .catch(getImagesErrorHandler);
// }
//
// function getImagesErrorHandler(data) {
//     console.error(data);
//     alert('het gaat allemaal fout, kutzooi');
// }
//
// function getImagesSuccessHandler(data) {
//     if (loadImages === true) {
//         return;
//     }
//     console.log(data);
//     for (let image of data) {
//         createSlideshow(image)
//     }
//     loadImages = true;
//     showSlides(slideIndex);
// }
//
// function createSlideshow(img) {
//     console.log(img);
//     let mySlides = document.createElement('div');
//     mySlides.classList.add('mySlides');
//     mySlides.classList.add('fade');
//     slideshowContainer.appendChild(mySlides);
//
//     let image = document.createElement('img');
//     image.src = img.image;
//     mySlides.appendChild(image);
//
//     let caption = document.createElement('div');
//     caption.classList.add('text');
//     caption.innerText = img.caption;
//     mySlides.appendChild(caption);
//
//     let dot = document.createElement('span');
//     dot.classList.add('dot');
//     dot.classList.add(img.id);
//     dot.addEventListener('click', currentSlide)
//     dotsContainer.appendChild(dot);
// }
//
//
//
// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(e) {
//     showSlides(e);
// }
//
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     let dot1 = dots[n];
//     console.log(dots);
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     for (let dot of dots) {
//         dot.className = dot.className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dot1.classList.add('active');
// }