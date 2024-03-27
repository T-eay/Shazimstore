let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Winchester Cocktail Glass Set of 2',
        image: 'decanter-removebg-preview.png',
        price: 25
    },
    {
        id: 2,
        name: 'Ravenshead Decanter & Glasses',
        image: 'Raven-removebg-preview.png',
        price: 80
    },
    {
        id: 3,
        name: 'Roma Wine Glasses Set of 2',
        image: 'Roma-removebg-preview.png',
        price: 40
    },
    {
        id: 4,
        name: 'Roma Mixer Glasses Set of 2',
        image: 'roma_mixer-removebg-preview.png',
        price: 35
    },
    {
        id: 5,
        name: 'Winchester Martini Glass Set of 2',
        image: 'martini-removebg-preview.png',
        price: 30
    },
    {
        id: 6,
        name: 'Roma Hiball Glasses Set of 2',
        image: 'hiball-removebg-preview.png',
        price: 35
    },
    {
        id: 7,
        name: 'Pisa Mixer Glasses Set of 2',
        image: 'pisa_mixa_2-removebg-preview.png',
        price: 35    
    },
    {
        id: 8,
        name: ' Pisa Wine Glasses Set of 2',
        image: 'pisa wine.webp',
        price: 35    
    },
    {
        id: 9,
        name: ' Roma Champagne Flutes Set of 2',
        image: 'roma_flute-removebg-preview.png',
        price: 40   
    },
    {
        id: 10,
        name: ' Pisa Hiball Glasses Set of 2',
        image: 'pisa hibal.jpeg',
        price: 35   
    },
    {
        id: 11,
        name: ' Pisa Champagne Flutes Set of 2',
        image: 'pisa fultes.jpeg',
        price: 35   
    },
    {
        id: 12,
        name: ' Decora Dough Scrapers Set of 2 ',
        image: 'Decora-scraper.jpeg',
        price: 10
    },
    {
        id: 13,
        name: 'Decora Flower Doughnut Pan 6 Cavity ',
        image: 'Decora_Flower_Doughnut_Pan_6_Cavity-removebg-preview.png',
        price: 40
    },
    {
        id: 14,
        name: 'Decora Heart Doughnut Pan 6 Cavity',
        image: 'heat-removebg-preview.png',
        price: 30
    },
    {
        id: 15,
        name: 'Decora Rolling Pin 25x2.5cm        ',
        image: 'Decora Rolling Pin 25x2.5cm.png',
        price: 15
    } ,
    {
        id: 16,
        name: 'Decora Scrapers Serrated Set of 2      ',
        image: 'Decora Scrapers Serrated Set of 2.jpeg',
        price: 10
    } ,
    {
        id: 17,
        name: 'Decora Scrapers Set of 2      ',
        image: 'Decora Scrapers Set of 2.jpeg',
        price: 10
    } 
    ,
    {
        id: 18,
        name: 'Decora Straight Spatula 23.5cm        ',
        image: 'Decora_Straight_Spatula_23.5cm-removebg-preview.png',
        price: 12
    } ,
    {
        id: 19,
        name:'Decora Straight Spatula 33cm   ',
        image: 'Decora Straight Spatula 33cm.jpg',
        price: 13
    } ,
    {
        id: 20,
        name:'Decora Straight Spatula 38cm   ',
        image: 'Decora Straight Spatula 38cm.jpg',
        price: 14
    } ,
    {
        id: 21,
        name:'Decora Straight Spatula 43cm   ',
        image: '43cm decora.jpg',
        price: 15
    } ,
    {
        id: 22,
        name:'Decora Wavy and Scalloped Scraper Set of 2   ',
        image: 'wavy-removebg-preview.png',
        price: 10
    } ,
    {
        id: 23,
        name:'Patisse Cake Carrier',
        image: 'pattise_cake_carrier-removebg-preview.png',
        price: 30
    } ,
    {
        id: 24,
        name:'Patisse Cooling Rack 40x25cm  ',
        image: 'rack.jpeg',
        price: 15
    } ,
    {
        id: 25,
        name:'Patisse Crepe Pan Cast Iron 26cm        ',
        image: 'crap pan.jpeg',
        price: 60
    } ,
    {
        id: 26,
        name:'Patisse Lattice Pastry Cutter 10cm        ',
        image: 'pastry.jpeg',
        price: 10
    } ,
    {
        id: 27,
        name:'Patisse Mini Muffin Tray12 Piece 25x20cm',
        image: 'mini.jpeg',
        price: 20
    } ,
    {
        id: 28,
        name:'Patisse Mini Pancake Pan Cast Aluminium 25cm         ',
        image: 'Patisse Mini Pancake Pan Cast Aluminium 25cm.jpg',
        price: 95
    } ,
    {
        id: 29,
        name:'Patisse Muffin Tray 12 Piece 35x26cm        ',
        image: 'tray.jpg',
        price: 25
    }  ,
    {
        id: 30,
        name:'Patisse Muffin Tray 6 Piece 27*18CM        ',
        image: 'mintray.jpeg',
        price: 15
    } ,
    {
        id: 31,
        name:'Patisse Loaf Pan cm',
        image: 'loafpan.jpg',
        price: 20
    } ,
    {
        id: 32,
        name:'EarthAngel Carafe 500ml ',
        image: 'carafe.jpg',
        price: 5
    } ,

    {
        id: 33,
        name:'Vagnbys Champagne Sabre Matt Black',
        image: 'mattblack.avif',
        price: 200
    } ,
    {
        id: 34,
        name:'Picnic Basket Ivory  No Cutlery',
        image: 'picnic.jpeg',
        price: 85
    } ,
    {
        id: 35,
        name:'   Picnic Basket Moonlight 2 Persons',
        image: 'with ctlry.jpg',
        price: 100
    } ,
    {
        id: 36,
        name:'   Earthangel Giraffe Booty Cake Lifter        ',
        image: 'Earthangel Giraffe Booty Cake Lifter.jpeg',
        price: 45
    } ,
    {
        id: 37,
        name:'   Earthangel Giraffe Booty Salad Servers        ',
        image: 'Earthangel Giraffe Booty Salad Servers.jpeg',
        price: 90
    } ,
    {
        id: 38,
        name:'   Earthangel Leopard Salad Server        ',
        image: 'Earthangel Leopard Salad Server.jpeg',
        price: 115
    } ,
    {
        id: 39,
        name:'   Earthangel Elephant Booty Cake Lifter        ',
        image: 'Earthangel Elephant Booty Cake Lifter.jpeg',
        price: 45
    } ,
    {
        id: 40,
        name:' Earthangel Classic Salad Server Large        ',
        image: 'classic.jpeg',
        price: 90
    } ,
    {
        id: 41,
        name:' Earthangel African Wave Salad Server        ',
        image: 'africanwave.jpeg',
        price: 90
    } ,
    {
        id: 42,
        name:' Viners Toddler Cutlery Set 3 Piece        ',
        image: 't1.jpeg',
        price: 20
    } ,
    {
        id: 43,
        name:' Typhoon Otto White Tea Canister        ',
        image: 'tea.jpg',
        price: 25
    } ,
    {
        id: 44,
        name:' Typhoon Otto White Utensil Jar        ',
        image: 'utensils.jpeg',
        price: 20
    } ,
    {
        id: 45,
        name:' Typhoon Pure Water Bottle Colour Change Wired        ',
        image: 'bottle.jpeg',
        price: 15
        
    } ,




    
    
    
    
    
    
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}