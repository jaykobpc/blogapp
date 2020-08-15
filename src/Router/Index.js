import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/** Routes */
import Home from '../components/Homeview';
import Post from '../components/Postview';
import Category from '../components/Category';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/post',
        name: 'Post',
        component: Post
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    }
];

export default new VueRouter({
    routes,
});