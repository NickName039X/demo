import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const index = () => import('@c/hello/index.vue');
const table = () => import('@c/table/table.vue');
const parent = () => import('@c/parent.vue');
const child = () => import('@c/child.vue');
const son = () => import('@c/son.vue');




const router = new Router({
    // mode:'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/table',
            name: 'table',
            component: table,
            redirect:'/table/parent',
            children: [
                {
                    path: 'son',
                    name: 'son',
                    component: son
                },
                {
                    path: 'parent',
                    name: 'parent',
                    component: parent
                },
            ]
        },
        {
            path: '/child',
            name: 'child',
            component: child
        },
        {
            path: '/parent',
            name: 'parent',
            component: parent
        },
    ]
});
export default router;
