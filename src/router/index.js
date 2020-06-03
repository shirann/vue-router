import VueRouter from 'vue-router'
import Vue from "vue"
import Home from "../components/Home";
import Video from "../components/Video";
import Music from "../components/Music";
import Picture from "../components/Picture";
import Logo from "../components/Logo";

//懒加载
const home = () => import('../components/Home')
const video = () => import('../components/Video')
const music = () => import('../components/Music')
const picture = () => import('../components/Picture')
const others = () => import('../components/Others')

//安装Vue Routerc插件
Vue.use(VueRouter)

//创建映射
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/video',
        component: Video
    },
    {
        path: '/music',
        component: Music
    },
    {
        path: '/picture',
        component: Picture
    },
    {
        path: '/logo',
        component: Logo
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router