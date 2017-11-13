import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/common/style/base.scss'

Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem('user');
	if(!user && to.path != '/login'){
    alert('没登录')
    next({
      path: '/login'
    })
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
