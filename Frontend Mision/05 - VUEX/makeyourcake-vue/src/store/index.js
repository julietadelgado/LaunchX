import { createStore } from 'vuex'

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('hola')
}
export default createStore({
    state: {
        checkedFlavors: [],
        checkedToppings: [],
        checkedAccesories: [],
        cart: [],
        pricePersonalizeCake: 0,
        totalCart: 0,
        products: [{
                id: 1,
                name: "Pastel Personalizado",
                price: 300,
                status: "Available",
                image: require('@/assets/img/products/crea-tu-pastel.jpg'),
                category: "cakes"
            },
            {
                id: 2,
                name: "Pastel de chocolate",
                price: 300,
                status: "Out of stock",
                image: require('@/assets/img/products/pastel-de-chocolate.jpg'),
                category: "cakes"
            },
            {
                id: 3,
                name: "Pastel de zanahoria",
                price: 280,
                status: "Out of stock",
                image: require('@/assets/img/products/pastel-de-zanahoria.jpg'),
                category: "cakes"
            },
            {
                id: 4,
                name: "Cheesecake",
                price: 330,
                status: "Out of stock",
                image: require('@/assets/img/products/cheesecake.jpg'),
                category: "cakes"
            },
            {
                id: 5,
                name: "Gelatina individual de mango",
                price: 30,
                status: "Out of stock",
                image: require('@/assets/img/products/gelatina-de-mango.jpg'),
                category: "cakes"
            },
            {
                id: 6,
                name: "Gelatina de pitaya",
                price: 250,
                status: "Out of stock",
                image: require('@/assets/img/products/gelatina-de-pitaya.jpg'),
                category: "cakes"
            },
            {
                id: 7,
                name: "Vela Pirotecnia",
                price: 40,
                status: "Available",
                image: require('@/assets/img/products/vela-de-pirotecnia.jpg'),
                category: "accesories",
                quantity: 250
            },
            {
                id: 8,
                name: "Vela de números",
                price: 25,
                status: "Available",
                image: require('@/assets/img/products/vela-de-numero.jpg'),
                category: "accesories",
                quantity: 300
            },
            {
                id: 9,
                name: "Fresas",
                price: 20,
                status: "Available",
                image: require('@/assets/img/products/topping-fresas.jpg'),
                category: "toppings",
                quantity: 120
            },
            {
                id: 10,
                name: "Duraznos",
                price: 20,
                status: "Available",
                image: require('@/assets/img/products/topping-duraznos.jpg'),
                category: "toppings",
                quantity: 120
            },
            {
                id: 11,
                name: "Nueces",
                price: 40,
                status: "Available",
                image: require('@/assets/img/products/topping-nueces.jpg'),
                category: "toppings",
                quantity: 120
            },
            {
                id: 12,
                name: "Frutos Rojos",
                price: 30,
                status: "Available",
                image: require('@/assets/img/products/topping-frutos-rojos.jpg'),
                category: "toppings",
                quantity: 120
            },
            {
                id: 13,
                name: "Trufas",
                price: 40,
                status: "Available",
                image: require('@/assets/img/products/topping-trufas.jpg'),
                category: "toppings",
                quantity: 120
            },
            {
                id: 14,
                name: "Chocolate",
                price: 10,
                status: "Available",
                image: require('@/assets/img/products/pan-chocolate.jpg'),
                category: "flavors",
                quantity: 80
            },
            {
                id: 15,
                name: "Fresa",
                price: 10,
                status: "Available",
                image: require('@/assets/img/products/pan-fresa.jpg'),
                category: "flavors",
                quantity: 80
            },
            {
                id: 16,
                name: "Zanahoria",
                price: 10,
                status: "Available",
                image: require('@/assets/img/products/pan-zanahoria.jpg'),
                category: "flavors",
                quantity: 80
            },
            {
                id: 17,
                name: "Frambuesa",
                price: 25,
                status: "Available",
                image: require('@/assets/img/products/pan-frambuesa.jpg'),
                category: "flavors",
                quantity: 0
            },
            {
                id: 18,
                name: "Cheesecake",
                price: 30,
                status: "Available",
                image: require('@/assets/img/products/pan-cheesecake.jpg'),
                category: "flavors",
                quantity: 80
            }
        ],
        currentOrderName: "",
        currentOrderPhone: "",
        currentOrderEmail: "",
        currentOrderShipping: "",
        currentOrderStreet: "",
        currentOrderZip: "",
        orders: [{
                id: 1,
                name: 'Julieta Delgado',
                phone: "3333333333",
                email: "example@example.com",
                date: '3/24/2022 19:33:04',
                products: [{
                    id: 1,
                    name: "Pastel Personalizado",
                    idPers: "pers-1",
                    accesories: [],
                    category: "cakes",
                    flavors: ['Fresa', 'Zanahoria', 'Cheesecake'],
                    image: require('@/assets/img/products/crea-tu-pastel.jpg'),
                    price: 390,
                    quantity: 1,
                    status: "Available",
                    toppings: ['Trufas']
                }],
                total: 390,
                shipping: 'Enviar a domicilio',
                street: 'Street 10',
                zip: '1515'
            },
            {
                id: 2,
                name: 'Julieta Delgado',
                phone: "3333333333",
                email: "example@example.com",
                date: '3/25/2022 11:13:54',
                products: [{
                    id: 1,
                    name: "Pastel Personalizado",
                    idPers: "pers-1",
                    accesories: [],
                    category: "cakes",
                    flavors: ['Chocolate', 'Zanahoria', 'Cheesecake'],
                    image: require('@/assets/img/products/crea-tu-pastel.jpg'),
                    price: 390,
                    quantity: 1,
                    status: "Available",
                    toppings: ['Trufas']
                }, {
                    id: 1,
                    name: "Pastel Personalizado",
                    idPers: "pers-2",
                    accesories: ['Vela Pirotecnia'],
                    category: "cakes",
                    flavors: ['Cheesecake'],
                    image: require('@/assets/img/products/crea-tu-pastel.jpg'),
                    price: 410,
                    quantity: 1,
                    status: "Available",
                    toppings: ['Fresas', 'Duraznos']
                }],
                total: 800,
                shipping: 'Enviar a domicilio',
                street: 'Street 10',
                zip: '1515'
            }
        ]
    },
    getters: {
        personalizedCake(state) {
            let product = state.products.find(product => product.id === 1)
            state.pricePersonalizeCake = product.price
            return product
        },
        cakes(state) {
            return state.products.filter(function(product) {
                return product.category == "cakes"
            })
        },
        flavors(state) {
            return state.products.filter(function(product) {
                return product.category == "flavors"
            })
        },
        toppings(state) {
            return state.products.filter(function(product) {
                return product.category == "toppings"
            })
        },
        accesories(state) {
            return state.products.filter(function(product) {
                return product.category == "accesories"
            })
        },
        orders(state) {
            return state.orders
        }

    },
    mutations: {
        addToCart(state, product) {
            //console.log(product);
            let item = state.cart.filter(i => i.id === product.id)
            if (product.id != 1) {
                if (item) {
                    //alert(item.quantity)
                    item.quantity++
                } else {
                    //alert("no existe")
                    state.cart.push({...product, quantity: 1 })
                    state.totalCart = state.totalCart + product.price
                    updateLocalStorage(state.cart)
                }
            } else {
                let errors = "";
                if (state.checkedFlavors.length <= 0)
                    errors += "Selecciona al menos 1 sabor"

                if (errors == "") {
                    let times = 1;
                    if (item) {
                        //console.log(item)
                        times = item.length + 1;
                    }
                    state.cart.push({...product, quantity: 1, idPers: 'pers-' + times, price: state.pricePersonalizeCake, flavors: state.checkedFlavors, toppings: state.checkedToppings, accesories: state.checkedAccesories })
                    state.checkedFlavors = []
                    state.checkedToppings = []
                    state.checkedAccesories = []

                    state.totalCart = state.totalCart + state.pricePersonalizeCake

                    state.pricePersonalizeCake = state.products.find(product => product.id === 1).price
                    alert("Se ha agregado el producto. Puedes crear nuevos pasteles o ir al carrito.")

                    updateLocalStorage(state.cart)

                } else {
                    alert(errors)
                }
            }
        },
        removeToCart(state, product) {
            let item = state.cart.find(i => i.id === product.id)
            if (item) {
                if (product.id == 1)
                    state.cart = state.cart.filter(i => i.idPers !== product.idPers)
                else
                    state.cart = state.cart.filter(i => i.id !== product.id)

                state.totalCart = state.totalCart - product.price

            }

            updateLocalStorage(state.cart)
        },
        updateCartFromLocalStorage(state) {
            const cart = localStorage.getItem('cart')
            if (cart) {
                state.cart = JSON.parse(cart)
            }
        },
        changeCheckedFlavors(state, flavor) {
            state.checkedFlavors = flavor
        },
        addToPrice(state, price) {
            state.pricePersonalizeCake += price
        },
        reduceToPrice(state, price) {
            state.pricePersonalizeCake -= price
        },
        refreshPricePersonalizeCake() {
            let product = state.products.find(product => product.id === 1)
            state.pricePersonalizeCake = product.price
        },
        updateQuantityProduct(state, { productId, value }) {
            state.products.find(i => i.id === productId).quantity = parseFloat(value);
        },
        updatePriceProduct(state, { productId, value }) {
            state.products.find(i => i.id === productId).price = parseFloat(value);
        },
        updateTotalCart(state) {
            const cart = state.cart
            if (cart) {
                let total = cart.reduce(function(accumulator, currentValue) {
                    return accumulator + currentValue.price;
                }, 0);

                state.totalCart = total
            }
        },
        updateOrderName(state, value) {
            state.currentOrderName = value
        },
        updateOrderPhone(state, value) {
            state.currentOrderPhone = value
        },
        updateOrderEmail(state, value) {
            state.currentOrderEmail = value
        },
        updateOrderStreet(state, value) {
            state.currentOrderStreet = value
        },
        updateOrderZip(state, value) {
            state.currentOrderZip = value
        },
        updateCurrentOrderShipping(state, shipping) {
            state.currentOrderShipping = shipping
            if (shipping != "Enviar a domicilio") {
                state.currentOrderStreet = ""
                state.currentOrderZip = ""
            }

        },
        createOrder(state) {
            var d = new Date,
                dformat = [d.getMonth() + 1,
                    d.getDate(),
                    d.getFullYear()
                ].join('/') + ' ' + [d.getHours(),
                    d.getMinutes(),
                    d.getSeconds()
                ].join(':');

            let lastIDOrder = state.orders.slice(-1)[0].id + 1

            //console.log(state.products.find(i => i.name === state.orders).quantity

            state.cart.map(function(product) {
                product.flavors.map(function(flavor) {
                    state.products.find(i => i.name === flavor).quantity -= 1
                });

                product.accesories.map(function(accesory) {
                    state.products.find(i => i.name === accesory).quantity -= 1
                });

                product.toppings.map(function(topping) {
                    state.products.find(i => i.name === topping).quantity -= 1
                });
            });

            let order = {
                id: lastIDOrder,
                name: state.currentOrderName,
                phone: state.currentOrderPhone,
                email: state.currentOrderEmail,
                date: dformat,
                products: state.cart,
                total: state.totalCart,
                shipping: state.currentOrderShipping,
                street: state.currentOrderStreet,
                zip: state.currentOrderZip
            }

            state.orders.push(order)

            state.cart = []
            state.totalCart = 0
            updateLocalStorage(state.cart)
        }
    },
    actions: {},
    modules: {}
})