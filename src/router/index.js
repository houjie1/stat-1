import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Shishifenxi from '../components/dingzhifenxi/Shishifenxi'
import Dingzhibaogao from '../components/dingzhifenxi/Dingzhibaogao'
import Yonghuqushi from '../components/yonghufenxi/Yonghuqushi'
import Yonghuhuaxiang from '../components/yonghufenxi/Yonghuhuaxiang'
import Huoyueyonghu from '../components/yonghufenxi/Huoyueyonghu'
import Diyufenxi from '../components/yonghufenxi/Diyufenxi'
import Zhongduanfenxi from '../components/yonghufenxi/Zhongduanfenxi'
import Banbenfenxi from '../components/yonghufenxi/Banbenfenxi'
import Shishifangke from '../components/yonghufenxi/Shishifangke'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/time',
        component: Shishifenxi
      },
      {
        path: '/port',
        component: Dingzhibaogao
      },
      {
        path: '/userqushi',
        component: Yonghuqushi
      },
      {
        path: '/huoyuq',
        component: Huoyueyonghu
      },
      {
        path: '/paint',
        component: Yonghuhuaxiang
      },
      {
        path: '/earth',
        component: Diyufenxi
      },
      {
        path: '/tem',
        component: Zhongduanfenxi
      },
      {
        path: '/banben',
        component: Banbenfenxi
      },
      {
        path: '/fangke',
        component: Shishifangke
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从哪个路径跳转而来
//   // next 是一个函数，表示执行
//   // next()放行 next('/login')强制跳转
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenstr = window.sessionStorage.getItem('token')
//   if (!tokenstr) {
//     return next('/login')
//   }
//   next()
// })
export default router
