// Show all categories:
function showAllCategories() {
    for (let i = 0; i < categories.length; i++) {
        console.log('#' + (i + 1) + ' ' + categories[i].name);
    }
}

// User selects the category (getting the number of the category):
function getCategoryNumber() {
    do {
        categoryNumber = parseInt(prompt('Enter the category number'));
    } while (isNaN(categoryNumber) || categoryNumber <= 0 || categoryNumber > categories.length);
}

// Getting the key of the category and the array of items by the key:
function getKeyAndArray() {
    selectedKey = categories[categoryNumber - 1].key;
    selectedProductArray = products[selectedKey];
}

// Show products by its key (in the selected category):
function showProductsOfChosenCategory() {
    for (let i = 0; i < selectedProductArray.length; i++) {
        console.log('#' + (i + 1) + ' Item: ' + selectedProductArray[i].name + ' Price: $' + selectedProductArray[i].price);
    }
}

// User selects the product number:
function getProductNumber() {
    do {
        productNumber = parseInt(prompt('Enter the number of the product you would like to buy'));
    } while (isNaN(productNumber) || productNumber <= 0 || productNumber > selectedProductArray.length);
}

// Show the selected product:
function showSelectedProduct() {
    selectedProduct = selectedProductArray[productNumber - 1];
    console.log('Your choice: ', selectedProduct);
}

// Get the amount of items selected by user:
function getAndShowProductAmount() {
    do {
        productAmount = parseInt(prompt('Enter the amount of the item you would like to buy'));
    } while (isNaN(productAmount) || productAmount <= 0);
    console.log('Quantity: ', productAmount);
}

// Calculate the price:
function calculateProductPrice() {
    productPrice = productAmount * selectedProduct.price;
    console.log('The price: $', productPrice);

if (productPrice > DISCOUNT_FROM) {
    finalPrice = productPrice * (1 - DISCOUNT);
}
console.log('Your discount: ' + (DISCOUNT * 100) + '%');
console.log('Your final price: $' + finalPrice);
}
