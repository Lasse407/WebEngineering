import { createRouter,createWebHistory } from "vue-router";

const routes = [
{
    path: '/',
    name: 'home',
    component: import('../views/Home.vue')
},
{
    path: '/login',
    name: 'login',
    component: import('../views/Login.vue')
},
{
    path: '/administration',
    name: 'administration',
    component: import('../views/Administration.vue')
},
{
    path: '/aktuelles',
    name: 'aktuelles',
    component: import('../views/Aktuelles.vue')
},
{
    path: '/vorlesungsplan',
    name: 'vorlesungsplan',
    component: import('../views/Vorlesungsplan.vue')
},
{
    path: '/blog',
    name: 'blog',
    component: import('../views/Blog.vue')
},
{
    path: '/register',
    name: 'register',
    component: import('../views/Register.vue')
}
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

