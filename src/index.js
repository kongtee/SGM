/**
 * Created by hanguangtian on 2017/12/13.
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
// import store from './store';

Vue.use(ElementUI, { size: 'small' });

Vue.config.errorHandler = function (err, vm, info) {
    // handle error
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // 只在 2.2.0+ 可用
    console.error(err, vm, info);
};

Vue.config.warnHandler = function (msg, vm, trace) {
    // `trace` 是组件的继承关系追踪
    console.warn(msg, vm, trace);
};

Vue.config.performance = true;

const app = new Vue({
    router,
    // store,
    ...App
});

app.$mount('#app');