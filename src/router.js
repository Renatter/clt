import {
    createRouter,
    createWebHistory
} from 'vue-router';

import HomePage from './view/HomePage.vue'
import Catalog from './view/Catalog.vue'
import Basket from './view/basket.vue'
import Admin from './view/Admin.vue'
import AddItem from './view/AddItem.vue'
import Order from './view/Order.vue'
import About from './view/About.vue'
import Contacts from './view/Contacts.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: '/',
            component: HomePage,
        },
        {
            path: '/contacts',
            name: '/contacts',
            component: Contacts,
        },
        {
            path: '/about',
            name: '/about',
            component: About,
        },
        {
            path: '/catalogs',
            name: '/catalogs',
            component: Catalog,
        },
        {
            path: '/basket',
            name: '/basket',
            component: Basket,
        },
        {
            path: '/admin',
            name: '/admin',
            component: Admin,
        },
        {
            path: '/addItem',
            name: '/addItem',
            component: AddItem,
        },
        {
            path: '/order',
            name: '/order',
            component: Order,
        },
    ]
})

export default router;