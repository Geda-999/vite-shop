const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../view/home/home.vue')
    },
    {
        name: 'list',
        path: '/list',
        component: () => import('../view/list/list.vue')
    },
    {
        name: 'shop',
        path: '/shop',
        component: () => import('../view/shop/shop.vue')
    },
    {
        name: 'user',
        path: '/user',
        component: () => import('../view/user/user.vue')
    },
    
];

export default routes
