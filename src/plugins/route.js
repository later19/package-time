/**
 * Created by F1231657 on 2018/1/4.
 */
// 1.引入vue和vue-router并赋值给相应的Vue和Router
import Vue from 'vue';
import Router from 'vue-router';
 
// import app from '@/App.vue';
import ceshi from '@/components/ceshi.vue';
 
// 2.通过Vue的use方法注入Router
Vue.use(Router)
// 3.创建 router 实例，然后传 `routes` 配置
const  router = new Router({
    // linkActiveClass: 'active',
    // hashbang: true, // 将路径格式化为#!开头
    // history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
    routes: [
        {
            path: "/",
            redirect: "/ceshi"
        },
        {
            path: '/ceshi',
            name: "ceshi",
            component: ceshi,
            // children:{
            //     path:"/button",
            //     name: "button",
            //     component:button,
            // }
        },
    ]
})
/**
 * @desc 全局监听路由变化
 */
// router.beforeEach((to, from, next) => {
//     next()
// })
// 5.导出路由
export default router