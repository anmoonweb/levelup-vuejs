let products = [
    {
        id: 1,
        title: 'fluffy cat',
        img: 'https://cataas.com/cat/fluffy',
        regular_price: 20,
        sale_price: 10,
        options: [
            'red', 'blue'
        ]
    },
    {
        id: 2,
        title: 'nice cat',
        img: 'https://cataas.com/cat/nice',
        regular_price: 20,
        sale_price: 10,
        options: [
            'red', 'blue'
        ]
    },
    {
        id: 3,
        title: 'cute cat',
        img: 'https://cataas.com/cat/cute',
        regular_price: 20,
        sale_price: 10,
        options: [
            'red', 'blue'
        ]
    },
    {
        id: 4,
        title: 'good cat',
        img: 'https://cataas.com/cat/eyes',
        regular_price: 20,
        sale_price: 10,
        options: [
            'red', 'blue'
        ]
    },
    {
        id: 5,
        title: 'fat cat',
        img: 'https://cataas.com/cat/fat',
        regular_price: 20,
        sale_price: 10,
        options: [
            'red', 'blue'
        ]
    },
    {
        id: 6,
        title: 'white cat',
        img: 'https://cataas.com/cat/white',
        regular_price: 20,
        sale_price: 10,
        options: [
            'red', 'blue'
        ]
    },
    {
        id: 7,
        title: 'black cat',
        img: 'https://cataas.com/cat/black',
        regular_price: 20,
        sale_price: 10,
        options: [
            'red', 'blue'
        ]
    },
    {
        id: 8,
        title: 'blue cat',
        img: 'https://cataas.com/cat/blue',
        regular_price: 20,
        sale_price: 10,
        options: [
            'red', 'blue'
        ]
    }
];

let total = 0;
let count = 0;

const totalContainer = document.getElementById('total');
const countContainer = document.getElementById('count');
const productsContainer = document.getElementById('products');
const alert = document.getElementById('alert');
const alertInfo = document.getElementById('alert-info');

totalContainer.innerText = total;
countContainer.innerText = count;

products.forEach(product => {
    productsContainer.innerHTML += `
                <div id="product-${product.id}" class="product border border-gray-400 shadow-md rounded-lg overflow-hidden">
                    <img class="h-60 w-full" src="${product.img}">
                    <div class="p-2 bg-gray-100">
                    <div class="flex justify-between">
                    <h2 class="text-xl font-semibold text-gray-800">${product.title}</h2>
                    <span><b class="text-lg">${product.sale_price}$<span class="currency"></span></b><del class="text-sm text-gray-600 ml-2">${product.regular_price}$</del></span>
                    </div>
                    <button onclick="addProduct(this,${product.id})" class="w-full mt-2 text-center bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">Add To cart</button>
                    </div>      
                </div>        
              `;
});

function addProduct(e, prodId) {
    e.classList.remove('bg-blue-500');
    e.classList.add('bg-blue-100');
    e.disabled = true;
    e.innerText = 'Added';

    alert.classList.remove('hidden');
    alert.classList.add('block');

    setTimeout(function () {
        alert.classList.remove('block');
        alert.classList.add('hidden');
    }, 1000);

    alertInfo.innerText = `${products[prodId - 1].title} has been Added!`;

    total += products[prodId - 1].sale_price;
    totalContainer.innerText = total;
    countContainer.innerText = ++count;
}
