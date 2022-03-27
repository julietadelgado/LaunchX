import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateYourCakeView from '../views/CreateYourCakeView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ManageStockView from '../views/ManageStockView.vue'
import OrdersView from '../views/OrdersView.vue'
import ThankYouView from '../views/ThankYouView.vue'
import CartView from '../views/CartView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/crea-tu-pastel',
        name: 'create-your-cake',
        component: CreateYourCakeView
    },
    {
        path: '/realizar-pedido',
        name: 'checkout',
        component: CheckoutView
    },
    {
        path: '/carrito',
        name: 'cart',
        component: CartView
    },
    {
        path: '/gracias',
        name: 'thankYou',
        component: ThankYouView
    },
    {
        path: '/cmsmyc',
        name: 'cms',
        component: LoginView
    },
    {
        path: '/cmsmyc/dashboard',
        name: 'dashboard',
        component: DashboardView
    },
    {
        path: '/cmsmyc/gestionar-existencias',
        name: 'manage-stock',
        component: ManageStockView
    },
    {
        path: '/cmsmyc/pedidos',
        name: 'orders',
        component: OrdersView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router