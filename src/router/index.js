import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import("../views/Home/Home.vue")
const Classify = () => import("../views/Classify/Classify.vue")
const shopCar = () => import("../views/ShopCar/shopCar.vue")
const Profile = () => import("../views/Profile/Profile.vue")

const routes = [
  {
    path:"",
    redirect:'/home'
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/classify",
    component:Classify
  },
  {
    path:"/shopcar",
    component:shopCar
  },
  {
    path:"/profile",
    component:Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
