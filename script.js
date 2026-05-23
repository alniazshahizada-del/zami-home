const products = [
    // Подушки из первой таблицы
    { 
        id: 1, 
        name: "Подушка 100% хлопок, наполнение гусиный пух", 
        price: 16900, 
        category: "Подушки", 
        description: "Наперник 100% хлопок, наполнение гусиный пух 100%",
        size: "50x70 см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "img/pillow-gus.jpg"
    },
    { 
        id: 3, 
        name: "Подушка 100% хлопок, наполнение шелкопряд", 
        price: 4900, 
        category: "Подушки", 
        description: "Наперник 100% хлопок, наполнение шелкопряд",
        size: "50x70 см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "img/pillow-shelk.jpg"
    },
    { 
        id: 4, 
        name: "Подушка детская", 
        price: 5000, 
        category: "Подушки", 
        description: "100% хлопок, наполнение шелкопряд",
        size: "50x70 см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "img/pillow-kids.jpg"
    },
    { 
        id: 5, 
        name: "Подушка с эффектом памяти", 
        price: 7800, 
        category: "Подушки", 
        description: "Сохранение памяти головы, наполнение шелкопряд с изголовьем, чехол вискоза",
        size: "50x70 см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "img/pillow-memory.jpg"
    },
    { 
        id: 6, 
        name: "Подушка с гречкой и шелкопрядом", 
        price: 13500, 
        category: "Подушки", 
        description: "Одна сторона фиолетовая с гречкой, вторая - шелкопряд, чехол 100% хлопок",
        size: "50x70 см",
        color: "фиолетовый и белый",
        icon: "fas fa-pillow",
        image: "img/гречка (6).png" 
    },
    { 
        id: 7, 
        name: "Подушка массажная с шелкопрядом", 
        price: 12750, 
        category: "Подушки", 
        description: "Одна сторона с массажными шариками, вторая - шелкопряд, чехол 100% хлопок",
        size: "50x70 см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "img/pillow-massage.jpg"
    },
    
    // Полотенца из второй таблицы
    { 
        id: 29, 
        name: "Комплект полотенец белый с коричневой коймой", 
        price: 9000, 
        category: "Полотенца", 
        description: "Комплект (для тела 90x155, для рук 45x85, гигиеническое 30x30) 100% хлопок",
        size: "Набор из 3 полотенец",
        color: "белый с коричневой коймой",
        icon: "fas fa-bath",
        image: "img/towel-hand.jpg"
    },
    { 
        id: 32, 
        name: "Комплект полотенец цветной", 
        price: 6000, 
        category: "Полотенца", 
        description: "Комплект (для тела 90x155, для рук 45x85, гигиеническое 30x30) 100% хлопок",
        size: "Набор из 3 полотенец",
        color: "синий, черный, сиреневый",
        icon: "fas fa-bath",
        image: "img/towels-color.jpg"
    },
    { 
        id: 30, 
        name: "Полотенце для рук", 
        price: 1800, 
        category: "Полотенца", 
        description: "100% хлопок, белый с коричневой коймой",
        size: "45x85 см",
        color: "белый с коричневой коймой",
        icon: "fas fa-bath",
        image: "img/towel-hand.jpg"
    },
    { 
        id: 33, 
        name: "Полотенце для рук цветное", 
        price: 1200, 
        category: "Полотенца", 
        description: "100% хлопок, цветное",
        size: "45x85 см",
        color: "синий, черный, сиреневый",
        icon: "fas fa-bath",
        image: "img/towels-color.jpg"
    },
    
    // Халаты
    { 
        id: 35, 
        name: "Халат вафельный взрослый", 
        price: 13000, 
        category: "Халаты", 
        description: "Вафельный с крупной вафлей",
        size: "L, XL, XXL",
        color: "разные цвета",
        icon: "fas fa-tshirt",
        image: "img/robe-adult.jpg"
    },
    { 
        id: 36, 
        name: "Халат вафельный белый с каемочкой", 
        price: 13000, 
        category: "Халаты", 
        description: "Вафельный взрослый белый с коричневой каемочкой",
        size: "L, XL",
        color: "белый с коричневой каемочкой",
        icon: "fas fa-tshirt",
        image: "img/robe-white.jpg"
    },
    { 
        id: 37, 
        name: "Халат вафельный с мелкой вафлей", 
        price: 13000, 
        category: "Халаты", 
        description: "Вафельный взрослый с мелкой вафлей",
        size: "L, XL, XXL, XXXL",
        color: "разные цвета",
        icon: "fas fa-tshirt",
        image: "img/robe-small.jpg"
    },
    { 
        id: 38, 
        name: "Халат детский", 
        price: 8500, 
        category: "Халаты", 
        description: "Детский халат",
        size: "S, M, L",
        color: "разные цвета",
        icon: "fas fa-tshirt",
        image: "img/robe-kids.jpg"
    },
    
    // Коврики
    { 
        id: 39, 
        name: "Коврик для ванной махровый", 
        price: 9000, 
        category: "Коврики", 
        description: "Коврик для ванной белый, махровый",
        size: "60×90 см",
        color: "белый",
        icon: "fas fa-rug",
        image: "img/rug-mahrovy.jpg"
    },
    { 
        id: 40, 
        name: "Коврик для ванной хлопок/вискоза", 
        price: 3800, 
        category: "Коврики", 
        description: "Коврик для ванной хлопок/вискоза",
        size: "50x80 см",
        color: "серый в клеточку, бежевый в крапинку, бежевый однотонный",
        icon: "fas fa-rug",
        image: "img/rug-cotton.jpg"
    },
    { 
        id: 41, 
        name: "Коврик для ванной шерсть/вискоза", 
        price: 4900, 
        category: "Коврики", 
        description: "Коврик для ванной шерсть/вискоза",
        size: "50x80 см",
        color: "серый",
        icon: "fas fa-rug",
        image: "img/rug-wool.jpg"
    },

    // Покрывало-одеяла из новой таблицы
    { 
        id: 42, 
        name: "Покрывало-одеяло с кружевами", 
        price: 28500, 
        category: "Покрывала-одеяла", 
        description: "С кружевами по краям, в комплекте 2 наволочки. Состав 100% хлопок, наполнение холлофайбер",
        size: "230-250 см, наволочки 50x70 см",
        color: "белый",
        icon: "fas fa-blanket",
        image: "img/blanket-lace.jpg"
    },
    { 
        id: 43, 
        name: "Покрывало-одеяло сжатый хлопок", 
        price: 28900, 
        category: "Покрывала-одеяла", 
        description: "Сжатый хлопок, в комплекте 2 наволочки. Состав 100% хлопок, наполнение шелкопряд",
        size: "230-250 см, наволочки 50x70 см",
        color: "белый",
        icon: "fas fa-blanket",
        image: "img/blanket-compressed.jpg"
    },
    { 
        id: 44, 
        name: "Покрывало-одеяло сжатый хлопок розовое", 
        price: 28900, 
        category: "Покрывала-одеяла", 
        description: "Сжатый хлопок, в комплекте 2 наволочки. Состав 100% хлопок, наполнение шелкопряд",
        size: "230-250 см, наволочки 50x70 см",
        color: "розовый",
        icon: "fas fa-blanket",
        image: "img/blanket-pink.jpg"
    },
    { 
        id: 45, 
        name: "Покрывало-одеяло цветное серое", 
        price: 15000, 
        category: "Покрывала-одеяла", 
        description: "Цветное покрывало-одеяло, состав 100% хлопок, наполнение шелкопряд",
        size: "180x210 см",
        color: "серый",
        icon: "fas fa-blanket",
        image: "img/blanket-gray.jpg"
    },
    { 
        id: 46, 
        name: "Покрывало-одеяло цветное бежевое", 
        price: 15000, 
        category: "Покрывала-одеяла", 
        description: "Цветное покрывало-одеяло, состав 100% хлопок, наполнение шелкопряд",
        size: "180x210 см",
        color: "бежевый",
        icon: "fas fa-blanket",
        image: "img/blanket-beige.jpg"
    },
    { 
        id: 47, 
        name: "Покрывало-одеяло с розовыми цветами", 
        price: 15000, 
        category: "Покрывала-одеяла", 
        description: "Цветное покрывало-одеяло, состав 100% хлопок, наполнение шелкопряд",
        size: "180x210 см",
        color: "розовые цветы",
        icon: "fas fa-blanket",
        image: "img/blanket-flowers.jpg"
    },
    { 
        id: 48, 
        name: "Покрывало-одеяло с зелеными лепестками", 
        price: 15000, 
        category: "Покрывала-одеяла", 
        description: "Цветное покрывало-одеяло, состав 100% хлопок, наполнение шелкопряд",
        size: "180x210 см",
        color: "зеленые лепестки",
        icon: "fas fa-blanket",
        image: "img/blanket-green.jpg"
    },
    { 
        id: 49, 
        name: "Покрывало-одеяло с желтыми лепестками", 
        price: 12000, 
        category: "Покрывала-одеяла", 
        description: "Цветное покрывало-одеяло, состав 100% хлопок, наполнение шелкопряд",
        size: "180x210 см",
        color: "желтые лепестки",
        icon: "fas fa-blanket",
        image: "img/blanket-yellow.jpg"
    },
    { 
        id: 50, 
        name: "Покрывало-одеяло розовое с зеленью", 
        price: 12000, 
        category: "Покрывала-одеяла", 
        description: "Цветное покрывало-одеяло, состав 100% хлопок, наполнение шелкопряд",
        size: "150x210 см",
        color: "розовые с зеленью",
        icon: "fas fa-blanket",
        image: "img/blanket-pink-green.jpg"
    },
    { 
        id: 51, 
        name: "Покрывало-одеяло с синими цветами", 
        price: 12000, 
        category: "Покрывала-одеяла", 
        description: "Цветное покрывало-одеяло, состав 100% хлопок, наполнение шелкопряд",
        size: "150x210 см",
        color: "синие цветы",
        icon: "fas fa-blanket",
        image: "img/blanket-blue.jpg"
    },

    // Одеяла из новой таблицы
    { 
        id: 52, 
        name: "Одеяло гусиный пух 150x200", 
        price: 40700, 
        category: "Одеяла", 
        description: "Одеяло - чехол 100% хлопок, наполнение 100% гусиный пух",
        size: "150x200 см",
        color: "кремовый",
        icon: "fas fa-bed",
        badge: "Скидка",
        image: "img/comforter-goose.jpg"
    },
    { 
        id: 53, 
        name: "Одеяло гусиный пух 180x220", 
        price: 50900, 
        category: "Одеяла", 
        description: "Одеяло - чехол 100% хлопок, наполнение 100% гусиный пух",
        size: "180x220 см",
        color: "кремовый",
        icon: "fas fa-bed",
        badge: "Скидка",
        image: "img/comforter-goose-large.jpg"
    },
    { 
        id: 54, 
        name: "Одеяло гусиный пух 220x230", 
        price: 50900, 
        category: "Одеяла", 
        description: "Одеяло - чехол 100% хлопок, наполнение 100% гусиный пух",
        size: "220x230 см",
        color: "кремовый",
        icon: "fas fa-bed",
        badge: "Скидка",
        image: "img/comforter-goose-king.jpg"
    },
    { 
        id: 55, 
        name: "Одеяло холлофайбер 150x200", 
        price: 18500, 
        category: "Одеяла", 
        description: "Одеяло - чехол 100% хлопок, наполнение холлофайбер теплый",
        size: "150x200 см",
        color: "белый",
        icon: "fas fa-bed",
        image: "img/comforter-hollofiber.jpg"
    },
    { 
        id: 56, 
        name: "Одеяло холлофайбер 180x200", 
        price: 21000, 
        category: "Одеяла", 
        description: "Одеяло - чехол 100% хлопок, наполнение холлофайбер теплый",
        size: "180x200 см",
        color: "белый",
        icon: "fas fa-bed",
        image: "img/comforter-hollofiber-queen.jpg"
    },
    { 
        id: 57, 
        name: "Одеяло холлофайбер 200x200", 
        price: 23000, 
        category: "Одеяла", 
        description: "Одеяло - чехол 100% хлопок, наполнение холлофайбер теплый",
        size: "200x200 см",
        color: "белый",
        icon: "fas fa-bed",
        image: "img/comforter-hollofiber-king.jpg"
    },
    { 
        id: 58, 
        name: "Одеяло стеганое с крестиком 150x200", 
        price: 18900, 
        category: "Одеяла", 
        description: "Стеганое облегченное одеяло - 100% хлопок, наполнение шелкопряд",
        size: "150x200 см",
        color: "белое с крестиком",
        icon: "fas fa-bed",
        image: "img/крестик.png"
    },
    { 
        id: 59, 
        name: "Одеяло стеганое с крестиком 180x220", 
        price: 22000, 
        category: "Одеяла", 
        description: "Стеганое облегченное одеяло - 100% хлопок, наполнение шелкопряд",
        size: "180x220 см",
        color: "белое с крестиком",
        icon: "fas fa-bed",
        image: "img/comforter-quilted-large.jpg"
    },
    { 
        id: 60, 
        name: "Одеяло стеганое с крестиком 220x230", 
        price: 25000, 
        category: "Одеяла", 
        description: "Стеганое облегченное одеяло - 100% хлопок, наполнение шелкопряд",
        size: "220x230 см",
        color: "белое с крестиком",
        icon: "fas fa-bed",
        image: "img/comforter-quilted-king.jpg"
    },
    { 
        id: 61, 
        name: "Одеяло стеганое кремовое 150x200", 
        price: 19200, 
        category: "Одеяла", 
        description: "Стеганое облегченное одеяло - 100% хлопок, наполнение шелкопряд",
        size: "150x200 см",
        color: "кремовый",
        icon: "fas fa-bed",
        image: "img/comforter-cream.jpg"
    },
    { 
        id: 62, 
        name: "Одеяло стеганое кремовое 180x220", 
        price: 22500, 
        category: "Одеяла", 
        description: "Стеганое облегченное одеяло - 100% хлопок, наполнение шелкопряд",
        size: "180x220 см",
        color: "кремовый",
        icon: "fas fa-bed",
        image: "img/comforter-cream-large.jpg"
    },
    { 
        id: 63, 
        name: "Одеяло стеганое кремовое 220x230", 
        price: 26000, 
        category: "Одеяла", 
        description: "Стеганое облегченное одеяло - 100% хлопок, наполнение шелкопряд",
        size: "220x230 см",
        color: "кремовый",
        icon: "fas fa-bed",
        image: "img/comforter-cream-king.jpg"
    }
];

let cart = [];
let cartCount = 0;
let cartTotal = 0;
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    initMap();
    updateCartCount();
    
    document.getElementById('searchInput').addEventListener('input', function(e) {
        searchProducts();
    });
    
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('cartModal');
        if (event.target === modal) {
            closeCart();
        }
    });
});

function displayProducts(filteredProducts = products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-light);">
                <i class="fas fa-search" style="font-size: 60px; margin-bottom: 20px; color: var(--gold-light);"></i>
                <h3 style="margin-bottom: 15px; color: var(--text-dark);">Товары не найдены</h3>
                <p>Попробуйте изменить поисковый запрос или выберите другую категорию</p>
                <button onclick="resetFilters()" class="btn-primary" style="margin-top: 20px;">
                    <i class="fas fa-redo"></i> Сбросить фильтры
                </button>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const imageContent = product.image 
            ? `<img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">`
            : `<i class="${product.icon}"></i>`;
        
        productCard.innerHTML = `
            <div class="product-img">
                ${imageContent}
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-details">
                    <span><i class="fas fa-ruler-combined"></i> ${product.size}</span>
                    <span><i class="fas fa-palette"></i> ${product.color}</span>
                </div>
                <div class="product-price">${product.price.toLocaleString()} ₸</div>
                <div class="product-actions">
                    <button class="btn-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i> В корзину
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn').classList.add('active');
    currentFilter = 'all';
    displayProducts();
}

function filterProducts(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    currentFilter = category;
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    let filteredProducts = products;
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    if (searchTerm !== '') {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.color.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(filteredProducts);
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    let filteredProducts = products;
    
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
    }
    
    if (searchTerm !== '') {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.color.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(filteredProducts);
}

function initMap() {
    DG.then(function() {
        const map = DG.map('map2gis', {
            center: [51.1282, 71.4305],
            zoom: 16
        });
        
        DG.marker([51.141330, 71.492404]).addTo(map)
            .bindPopup(`
                <b>Zami Home Factory</b><br>
                🫶🏻 Традиции и стиль в каждом изделии<br>
                🍃 100% эко-материалы<br>
                <br>
                <b>Адрес:</b> г. Астана, ул. Борили, 42<br>
                <b>Телефон:</b> +7 (777) 123-45-67<br>
                <b>Время работы:</b> 10:00 - 20:00
            `)
            .openPopup();
    }).catch(function(error) {
        console.log('Ошибка загрузки карты:', error);
        document.getElementById('map2gis').innerHTML = `
            <div style="height: 400px; display: flex; align-items: center; justify-content: center; background-color: var(--gray-light); color: var(--text-light); border-radius: 12px;">
                <div style="text-align: center;">
                    <i class="fas fa-map-marker-alt" style="font-size: 50px; margin-bottom: 15px; color: var(--gold-light);"></i>
                    <h3>Наш адрес:</h3>
                    <p><strong>г. Астана, ул. Борили, 42</strong></p>
                    <p>Для просмотра карты требуется интернет-соединение</p>
                </div>
            </div>
        `;
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    cartCount++;
    cartTotal += product.price;
    
    updateCartCount();
    
    showNotification(`"${product.name}" добавлен в корзину!`);
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cartCount;
    document.getElementById('cartTotal').textContent = cartTotal.toLocaleString();
}

function openCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-light);">
                <i class="fas fa-shopping-bag" style="font-size: 60px; margin-bottom: 20px; color: var(--gold-light);"></i>
                <h3 style="margin-bottom: 15px; color: var(--text-dark);">Корзина пуста</h3>
                <p>Добавьте товары из каталога</p>
                <button onclick="closeCart()" class="btn-primary" style="margin-top: 20px;">
                    <i class="fas fa-shopping-bag"></i> Перейти к покупкам
                </button>
            </div>
        `;
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <div class="cart-item-details">
                        <span><i class="fas fa-ruler-combined"></i> ${item.size}</span> | 
                        <span><i class="fas fa-palette"></i> ${item.color}</span>
                    </div>
                </div>
                <div class="cart-item-price">
                    <div class="price">${(item.price * item.quantity).toLocaleString()} ₸</div>
                    <div class="quantity">${item.price.toLocaleString()} ₸ × ${item.quantity} шт.</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    modal.style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        cartCount -= item.quantity;
        cartTotal -= item.price * item.quantity;
        
        cart.splice(itemIndex, 1);
        
        updateCartCount();
        openCart();
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста! Добавьте товары перед оформлением заказа.', 'warning');
        return;
    }
    
    let message = `*ЗАКАЗ С САЙТА ZAMI HOME FACTORY*%0A%0A`;
    message += `🫶🏻 *Традиции и стиль в каждом изделии*%0A`;
    message += `🍃 *100% эко-материалы*%0A`;
    message += `✨ *Zami home - подарки, которые греют душу* 🎁%0A%0A`;
    message += `*СОСТАВ ЗАКАЗА:*%0A`;
    message += `=========================%0A`;
    
    cart.forEach((item, index) => {
        message += `*${index + 1}. ${item.name}*%0A`;
        message += `   ${item.description}%0A`;
        message += `   Размер: ${item.size} | Цвет: ${item.color}%0A`;
        message += `   ${item.price.toLocaleString()} ₸ × ${item.quantity} шт. = ${(item.price * item.quantity).toLocaleString()} ₸%0A%0A`;
    });
    
    message += `=========================%0A`;
    message += `*ИТОГО: ${cartTotal.toLocaleString()} ₸*%0A%0A`;
    message += `*КОНТАКТНЫЕ ДАННЫЕ:*%0A`;
    message += `Имя: ________%0A`;
    message += `Телефон: ________%0A`;
    message += `Адрес доставки: ________%0A%0A`;
    message += `*СПОСОБ ДОСТАВКИ:*%0A`;
    message += `□ Самовывоз (ул. Борили, 42, Астана)%0A`;
    message += `□ Доставка по городу (500 ₸)%0A`;
    message += `□ Доставка по Казахстану%0A%0A`;
    message += `*СПОСОБ ОПЛАТЫ:*%0A`;
    message += `□ Наличные при получении%0A`;
    message += `□ Перевод на карту%0A%0A`;
    message += `Подписывайтесь на нас в Instagram: @zami_home_factory%0A`;
    message += `Сайт: zamihome.kz`;

    const phoneNumber = '+7 (777) 123-45-67';
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    showNotification('Заказ отправлен в WhatsApp! Заполните ваши контактные данные.', 'success');
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'notification';
    
    let bgColor = 'var(--gold-primary)';
    if (type === 'warning') bgColor = '#ff9800';
    if (type === 'info') bgColor = '#2196f3';
    if (type === 'success') bgColor = '#4CAF50';
    
    notification.style.backgroundColor = bgColor;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}