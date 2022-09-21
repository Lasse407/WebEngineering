import { createRouter, createWebHistory } from "vue-router";

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
        redirect: {
            name: 'admin/screens',
        }
    },
    {
        path: '/administration/vorlesungsplan',
        name: 'admin/vorlesungsplan',
        component: import('../views/Administration/Administration_Vorlesungsplan.vue')
    },
    {
        path: '/administration/social-media',
        name: 'admin/social-media',
        component: import('../views/Administration/Administration_Social-Media.vue')
    },
    {
        path: '/administration/news',
        name: 'admin/news',
        component: import('../views/Administration/Administration_News.vue')
    },
    {
        path: '/administration/screens',
        name: 'admin/screens',
        component: import('../views/Administration/Administration_Screens.vue')
    },
    {
        path: '/administration/veranstaltungen',
        name: 'admin/veranstaltungen',
        component: import('../views/Administration/Administration_Veranstaltungen.vue')
    },
    {
        path: '/administration/blog',
        name: 'admin/blog',
        component: import('../views/Administration/Administration_Blog.vue')
    },
    {
        path: '/administration/user',
        name: 'admin/user',
        component: import('../views/Administration/Administration_User.vue')
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

