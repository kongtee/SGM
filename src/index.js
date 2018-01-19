/**
 * Created by hanguangtian on 2017/12/13.
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';

Vue.use(ElementUI, { size: 'small' });

const app = new Vue({
    router,
    ...App
});

app.$mount('#app');