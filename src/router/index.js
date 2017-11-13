import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/home'
import Form from '@/components/nav1/Form'
import Table from '@/components/nav1/Table'
import user from '@/components/nav1/user'
import Page4 from '@/components/nav2/Page4'
import Page5 from '@/components/nav2/Page5'
import Page6 from '@/components/nav3/Page6'
import Charts from '@/components/charts/chart'
import NotFound from '@/components/404'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '',
      component: Login,
      hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ],
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'el-icon-info',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-menu',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'el-icon-search',
        children: [
            { path: '/chart', component: Charts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/Page6' }
    },
    
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    }
  ]
})
