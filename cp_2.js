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
