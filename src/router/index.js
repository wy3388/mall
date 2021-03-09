import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hot from "@/views/Hot";
import Order from "@/views/Order";
import My from "@/views/My";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/hot',
        name: 'Hot',
        component: Hot
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/my',
        name: 'My',
        component: My
    }
]

const router = new VueRouter({
    routes
})

export default router
