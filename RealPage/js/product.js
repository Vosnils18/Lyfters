window.addEventListener('load', init);

const urlProductData = 'http://localhost:80/lyfters/RealPage/webservice/product.php';

function init() {
    getProductData();
}

function getProductData() {
    fetch(urlProductData)
        .then((response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(getProductDetailsSuccessHandler)
        .catch(getProductDetailsErrorHandler);
}

function getProductDetailsSuccessHandler(data) {
    if (loadImages === true) {
        return;
    }
    console.log(data);


    for (let product of data) {
        createProductConfiguration(product);
    }
    loadImages = true;
}

function createProductConfiguration(product) {
    let leftColumn = document.querySelector('.left-column');
    for (let image of product.images) {
        let img = document.createElement('img');
        img.src = image;
        img.classList.add(product.color);
        img.alt = '';
        leftColumn.appendChild(img);
    }

    let rightColumn = document.querySelector('.right-column');
    let descriptionBox = document.querySelector('.product-description');

    let productName = document.createElement('h1');
    productName.innerText = product.name;
    descriptionBox.appendChild(productName);

    let description = document.createElement('p');
    description.innerText = product.description;
    descriptionBox.appendChild(description);
}

function getProductDetailsErrorHandler(data) {
    console.error(data);
    alert('het gaat allemaal fout, kutzooi');
}