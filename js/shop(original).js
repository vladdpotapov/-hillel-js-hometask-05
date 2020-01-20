const categories = [
  { name: 'Laptops', key: 'laptops' },
  { name: 'Phones', key: 'phones' }
];

const products = {
  laptops: [
    { name: 'Apple Macbook', price: 2000 },
    { name: 'Dell XPS15', price: 2100 },
  ],
  phones: [
    { name: 'iPhone X', price: 1500 },
    { name: 'Samsung S10', price: 1600 },
    { name: 'Samsung S20', price: 2500 },
  ],
};

const DISCOUNT = 0.1;
const DISCOUNT_FROM = 10000;

// Show all categories
for (let i = 0; i < categories.length; i++) {
  console.log('#' + (i+1) + ' ' + categories[i].name);
}

// Get the category number from user
let categoryNumber;
do {
  categoryNumber = parseInt(prompt('Enter the category'));
} while(categoryNumber < 1 || categoryNumber > categories.length);

// get the key from the category object which was selected by user
const selectedKey = categories[categoryNumber - 1].key;

// get the array of products by the selected key (category)
const selectedProductsArr = products[selectedKey];

// Show all products (by category)
for (let i = 0; i < selectedProductsArr.length; i++) {
  console.log('#' + (i + 1) + ' Name: ' + selectedProductsArr[i].name + ' Price: $' + selectedProductsArr[i].price);
}

// user selects the product number
let productNumber;

do {
  productNumber = parseInt(prompt('Enter the number of the product which you want to buy'));
} while(isNaN(productNumber) || productNumber <= 0 || productNumber > selectedProductsArr.length);

// get and show the selected product
const selectedProduct = selectedProductsArr[productNumber - 1];
console.log('You chose this product', selectedProduct);

// user enter the amount of items (how many he wants to buy)
let productAmount;

do {
  productAmount = parseInt(prompt('Enter the amount of product which you wanna buy'));
} while (isNaN(productAmount) || productAmount <= 0);

// show the given amount
console.log('You buy ' + productAmount + ' items');

// calculate the price
const resultPrice = productAmount * selectedProduct.price;

console.log('result Price $' + resultPrice);

if (resultPrice > DISCOUNT_FROM) {
  const finalPrice = resultPrice * (1 - DISCOUNT);

  console.log('You got the discount ' + (DISCOUNT * 100) + '%');
  console.log('The final price is $' + finalPrice);
}
