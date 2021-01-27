import Vue from 'vue'
import App from './App.vue'
import router from './router'
/*饿了么UI库*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import leftMenu from './layout/left-menu'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component("leftMenu", leftMenu);
new Vue({
    router,
    render: h => h(App),
    data: {

    }
}).$mount('#app') //mount挂载，#是选择器的意思，app是App.vue里id为app