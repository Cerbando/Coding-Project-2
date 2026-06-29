const apiURL = "https://www.course-api.com/javascript-store-products";

// Step 3
function fetchProductsThen() {
    fetch(apiURL)
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            handleError(error);
        });
}

// Step 4
async function fetchProductsAsync() {
    try {
        const response = await fetch(apiURL);
        const products = await response.json();

        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Step 5
function displayProducts(products) {

    const container = document.getElementById("product-container");

    container.innerHTML = "";

    products.slice(0, 5).forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card";

        const name = product.fields.name;
        const price = product.fields.price / 100;
        const image = product.fields.image[0].url;

        card.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>$${price}</p>
        `;

        container.appendChild(card);
    });
}
// Step 6
function handleError(error) {
    console.log(`An error occurred: ${error.message}`);
}
const apiURL = "https://www.course-api.com/javascript-store-products";

// Step 3
function fetchProductsThen() {
    fetch(apiURL)
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            handleError(error);
        });
}

// Step 4
async function fetchProductsAsync() {
    try {
        const response = await fetch(apiURL);
        const products = await response.json();

        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Step 5
function displayProducts(products) {

    const container = document.getElementById("product-container");

    container.innerHTML = "";

    products.slice(0, 5).forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card";

        const name = product.fields.name;
        const price = product.fields.price / 100;
        const image = product.fields.image[0].url;

        card.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>$${price}</p>
        `;

        container.appendChild(card);
    });
}

// Step 6
function handleError(error) {
    console.log(`An error occurred: ${error.message}`);
}
