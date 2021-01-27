import Vue from 'vue'
import VueRouter from 'vue-router'

//不使用的话import语句会报错，这是eslint的检查机制
Vue.use(VueRouter);

// () = > import() 这个语法是懒加载(比较困惑)
/*仪表盘*/
const index = () => import("@/page/dashboard/index");
/*登录*/
const login = () => import("@/page/login/login");
/*内容*/
const manageArticle = () => import("@/page/content/manage-article");
const manageComment = () => import("@/page/content/manage-comment");
const manageImage = () => import("@/page/content/manage-image");
const postArticle = () => import("@/page/content/post-article");
/*运营*/
const manageCategory = () => import("@/page/operation/manage-category");
const manageLoop = () => import("@/page/operation/manage-loop");
/*设置*/
const friendLink = () => import("@/page/settings/friend-link");
const websiteInfo = () => import("@/page/settings/website-info");
/*用户*/
const email = () => {
    import("@/page/user/email");
};
const info = () => import("@/page/user/info");
const list = () => import("@/page/user/list");
const resetPassword = () => import("@/page/user/reset-password");
/*布局*/
const baseView = () => import("@/layout/base-view");
const rightContent = () => import("@/layout/right-content");

/*路由*/
export const routes = [
    {
        path: '',
        component: baseView,
        redirect: "/index",
        children: [
            {
                path: "/index", //path指的是浏览器你要再后面添加的url地址
                name: '首页',
                icon: 'el-icon-star-on',
                hidden: false,
                component: index
            },
            {
                path: "/content",
                name: '内容',
                icon: 'el-icon-star-on',
                hidden: false,
                component: rightContent,
                children: [
                    {
                        path: 'post-article',  //在js里单引号和双引号是一样的作用
                        name: '发表文章',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: postArticle
                    },
                    {
                        path: 'manage-article',
                        name: '管理文章',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: manageArticle
                    },
                    {
                        path: 'manage-comment',
                        name: '管理评论',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: manageComment
                    },
                    {
                        path: 'manage-image',
                        name: '管理图片',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: manageImage
                    }
                ]
            },
            {
                path: "/user",
                name: '用户',
                icon: 'el-icon-star-on',
                hidden: false,
                component: rightContent,
                children: [
                    {
                        path: 'list',
                        name: '用户列表',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: list
                    },
                    {
                        path: 'info',
                        name: '管理员信息',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: info
                    },
                    {
                        path: 'email',
                        name: '管理员邮箱',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: email
                    },
                    {
                        path: 'reset-password',
                        name: '重置密码',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: resetPassword
                    }
                ]
            },
            {
                path: "/operation",
                name: '运营',
                icon: 'el-icon-star-on',
                hidden: false,
                component: rightContent,
                children: [
                    {
                        path: 'manage-category',
                        name: '管理分类',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: manageCategory
                    },
                    {
                        path: 'manage-loop',
                        name: '管理轮播图',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: manageLoop
                    }
                ]
            },
            {
                path: "/settings",
                name: '设置',
                icon: 'el-icon-star-on',
                hidden: false,
                component: rightContent,
                children: [
                    {
                        path: 'friend-link',
                        name: '友情链接',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: friendLink
                    },
                    {
                        path: 'website-info',
                        name: '网站信息',
                        icon: 'el-icon-star-on',
                        hidden: false,
                        component: websiteInfo
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        component: login
    }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

export default router;