import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const index = () => import('@c/index.vue');
const table = () => import('@c/table.vue');
const parent = () => import('@c/parent.vue');
const child = () => import('@c/child.vue');
const son = () => import('@c/son.vue');

const template = () => import('@c/template.vue');


const router = new Router({
    // mode:'history',
    routes: [
        {
            path: '/template',
            name: 'template',
            component: template
        },
        {
            path: '/',
            name: 'index',
            component: index,
            redirect:'/table'
        },
        {
            path: '/table',
            name: 'index',
            component: () => import('@/views/table')
        },
        {
            path: '/table',
            name: 'table',
            component: table,
            redirect:'/table/son',
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
