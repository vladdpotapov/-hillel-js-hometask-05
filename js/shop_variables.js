const categories = [
    { name: 'Laptops', key: 'laptops'},
    { name: 'Phones',  key: 'phones'},
    { name: 'Players', key: 'players'},
];

const products = {
    laptops: [
        { name: 'Apple Macbook', price: 2000},
        { name: 'Acer A517',     price: 450},
        { name: 'Dell 3581',     price: 350},
        { name: 'Lenovo 330',    price: 420},
        { name: 'HP Pav G 15',   price: 900},
    ],
    phones:[
        { name: 'iPhone X',      price: 800},
        { name: 'iPhone 7 plus', price: 600},
        { name: 'Samsung A51',   price: 780},
        { name: 'Meizu M8',      price: 200},
        { name: 'HTC 10',        price: 500},
    ],
    players: [
        { name: 'Apple TV 4K', price: 450},
        { name: 'Beelink GT1', price: 100},
        { name: 'Android H96', price: 180},
        { name: 'Xiaomi 4K',   price: 120},
        { name: 'Mecool KM3',  price: 200},
    ],
};

const DISCOUNT = 0.2;
const DISCOUNT_FROM = 5000;

let categoryNumber;
let productNumber;
let selectedKey;
let selectedProductArray;
let selectedProduct;
let productAmount;
let productPrice;
let finalPrice;