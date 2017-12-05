// 引入资源
import Vue from 'vue';




// 注册全局过滤器 开始
import Moment from 'moment';
Vue.filter('convertTime',(value)=>{   //{'abc'| convert   }
    //2015-04-16T03:50:28.000Z
    return Moment(value).format('YYYY-MM-DD');
});
//处理title太长的问题
Vue.filter('convertTitle',(value,limit)=>{
    if(!value)return;
    //判断
    if(value.length > limit){
       return value.substr(0,limit) + '...'
    }
    //返回原数据
    return value;
})
// 注册全局过滤器 结束



// 注册全局组件 开始
import MyLi from './components/Commons/MyLi.vue';
import MyUl from './components/Commons/MyUl.vue';
import NavBar from './components/Commons/NavBar.vue';
Vue.component(NavBar.name,NavBar);
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
// 注册全局组件 结束


// 路由相关组件 开始
import App from './components/App.vue';
import Home from './components/Home/Home.vue';
import Member from './components/Member/Member.vue';
import Shopcart from './components/Shopcart/Shopcart.vue';
import Search from './components/Search/Search.vue';
import NewsList from './components/News/NewsList.vue';
import NewsDetail from './components/News/NewsDetail.vue';
import PhotoList from './components/Photos/PhotosList.vue';
import PhotoDetail from './components/Photos/PhotosDetail.vue';


// 路由相关组件 结束

// VueRouter 开始
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter();
router.addRoutes([
    // 重定向 到首页
    { path:'/',redirect:{
        name:'home'
    }},
    {name:'home',path:'/home',component:Home},//首页
    {name:'member',path:'/member',component:Member},//会员
    {name:'shopcart',path:'/shopcart',component:Shopcart},//购物车
    {name:'search',path:'/search',component:Search},//查找
    {name:'news.list',path:'/news/list',component:NewsList},//新闻列表
    {name:'news.detail',path:'/news/detail',component:NewsDetail},//新闻详情
    {name:'photos.list',path:'/photos/list',component:PhotosList},//图片分享
    {name:'photos.detai;',path:'/photos/detail',component:PhotosDetail}//图片详情
    
]);
// VueRouter 结束

// MintUi 开始
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
// MintUi 结束






// 考虑未来可能有样式的覆盖，在之后再引入自己的css
import './static/css/global.css';



// Axios 开始
import Axios from 'axios';
Vue.prototype.$axios = Axios;
//设置默认URL请求基础路径
Axios.defaults.baseURL = '192.168.159.80:8899/api/';
// Axios 结束


new Vue({
    el:'#app',
    render:c=>c(App),
    router
});