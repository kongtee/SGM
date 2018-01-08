/**
 * Created by hanguangtian on 2017/12/13.
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';

Vue.use(ElementUI);

const app = new Vue({
    ...App
});

app.$mount('#app');