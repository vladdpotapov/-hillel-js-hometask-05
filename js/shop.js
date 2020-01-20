const categories = [
    { name: 'Laptops', key: 'laptops' },
    { name: 'Phones',  key: 'phones'  },
];

const products = {
    laptops: [
        { name: 'Apple Macbook', price: 2000 },
        { name: 'Dell XPS 15',   proce: 1800 },
    ],
    phones: [
        { name: 'iPhone X',    price: 1500 },
        { name: 'Samsung S10', price: 1600 },
        { name: 'Samsung S20', price: 2500 },
    ],
};

const DISCOUNT = 0.2;
const DICOUNT_FROM = 10000;

// Show all categories
for (let i = 0; i < categories.length; i++) {
    document.write('Here are the categories you are free to choose from: ' +
                   '# ' + (i + 1) + ' ' + 
                   categories[i].name);
}