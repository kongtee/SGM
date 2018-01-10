/**
 * Created by hanguangtian on 2018/1/10.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    // mode: 'hash',
    // linkActiveClass: 'is-active',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            name: '首页',
            path: '*',
            meta: {},
            component: () => import('../views/images/ImagesUpload.vue')
        },
        {
            name: '图片上传',
            path: '/images/ImagesUpload',
            meta: {},
            component: () => import('../views/images/ImagesUpload.vue')
        }
    ]
});