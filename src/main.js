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

import { checkToken } from './api/api'

//设置前置守卫：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    console.log(next);
    //如果是登录页面，则不拦截
    //否则就检查用户角色：管理员不拦截；普通用户的话跳转到首页
    //可以用path，也可以在路由里添加属性例如 requireLogin 进行判断
    if (to.path === '/login') {
        //这里还能继续优化
        next();
    } else {
        //后台需要提供一个通过token来获取用户信息的接口（这个教程要配合另外的后端课程，我没写）
        //axios.get('/user/check-token')
        checkToken()
            .then(result => {
                //let res = result.data;
                console.log(result);
                // 这些code、roles字段都是后端规定的，可以从log中获取到
                if (result.code === 20000) {
                    if (result.data.roles === "role_admin") {
                        next();
                    } else {
                        location.href = "https://www.sunofbeach.com";
                    }
                } else {
                    next({
                        path: "/login"
                    })
                }
            })
    }
});

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