import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hot from "../views/Hot";
import Order from "../views/Order";
import My from "../views/My";
import Info from "../views/Info";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Edit from "../views/Edit";
import Star from "../views/Star";
import {getData} from "../util";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            auth: true
        }
    },
    {
        path: '/hot',
        name: 'Hot',
        component: Hot,
        meta: {
            auth: true
        }
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
        meta: {
            auth: true
        }
    },
    {
        path: '/my',
        name: 'My',
        component: My,
        meta: {
            auth: true
        }
    },
    {
        path: '/info',
        name: 'Info',
        component: Info,
        meta: {
            auth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: {
            auth: true
        }
    },
    {
        path: '/edit',
        name: 'Edit',
        component: Edit,
        meta: {
            auth: true
        }
    },
    {
        path: '/star',
        name: 'Star',
        component: Star,
        meta: {
            auth: true
        }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.auth)) {
        let user = getData('user')
        if (user === null || user === '' || user === undefined) {
            next({path: '/login'})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
