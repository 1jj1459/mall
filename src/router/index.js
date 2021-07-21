import Vue from 'vue'
import Router from 'vue-router'
const Home =()=>import("../views/home/Home.vue");
const Category=()=>import("../views/category/Category.vue");
const Cart= () => import("../views/cart/Cart.vue");
const Profile = () => import("../views/profile/Profile.vue");
Vue.use(Router)
//  在App.vue 中给每个tab-bar-item设置activeColor属性 可以保证四个颜色不一样activeColor="green"
// 解决报错
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: Home
    },
    {
      path: "/Home",
      component: Home
    },
    {
      path: "/Category",
      component: Category
    },
    {
      path: "/Cart",
      component: Cart
    },
    {
      path: "/Profile",
      component: Profile
    }
  ],
  mode:"history"
});
export default router;
