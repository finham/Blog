import Vue from 'vue'
import App from './App.vue'
import router from './router'
/*饿了么UI库*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import leftMenu from './layout/left-menu'
import topHeader from './layout/top-header'
//代表目前处在开发模式
/**
 * 开发模式：npm run dev是前端自己开发用的
 * 生产模式：npm run build 打包之后给后端放在服务端上用的
 */
Vue.config.productionTip = false;
Vue.use(ElementUI);
//
Vue.component("leftMenu", leftMenu);
Vue.component("topHeader", topHeader);

new Vue({
    router,
    //这是ES6的写法，
    //createElement就是h，一个形参，没有具体意义，可以随意改变书写
    //   render:(function(createElement){
    //       return createElement(App);
    //     })
    //render是一个方法，自带一个形参createElement，这个参数也是一个方法，
    //是用来创建vue 节点的，也就是html模板的，然后渲染(render)到指定的节点上
    render: h => h(App),
    data: {

    }
    //手动挂载到id为app的dom中的意思
}).$mount('#app') //mount挂载，#是选择器的意思，app是App.vue里id为app