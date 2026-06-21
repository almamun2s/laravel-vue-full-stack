import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'

import DefaultLayout from './components/DefaultLayout.vue'
import GuestLayout from './components/GuestLayout.vue'

import NotFound from './pages/NotFound.vue'
import Home from './pages/Home.vue'
import MyImages from './pages/MyImages.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'

import useUserStore from './store/user'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '/', name: 'Home', component: Home },
            { path: '/images', name: 'MyImages', component: MyImages },
        ],
        beforeEnter: async (to, from, next) => {
            try {
                const userStore = useUserStore();
                await userStore.fetchUsers();
                next();

            } catch (error) {
                // console.error('Failed to fetch data:', error)
                next(false) // Prevent navigation on error
            }
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
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router