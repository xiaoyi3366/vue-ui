import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddActivity from '../views/function/AddActivity'
import AddProblem from '../views/function/AddProblem'
import ActivityManagement from '../views/management/ActivityManagement'
import ProblemManagement from '../views/management/ProblemManagement'
import NotFound from '@/components/NotFound'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/helloWorld1',
      name: 'helloWorld1',
      hideInMenu: true,
      meta: { icon: "appstore", title: "功能" },
      component: HelloWorld,
      children:[
        {
          path: '/function/addActivity',
          name: 'addActivity',
          
          component: AddActivity,
        },
        {
          path: '/function/addProblem',
          name: 'addProblem',
          component: AddProblem,
        },
      ]
    },
    {
      path: '/helloWorld2',
      name: 'helloWorld2',
      meta: { icon: "appstore", title: "功能" },
      component: HelloWorld,
      children:[
        {
          path: '/function/addActivity',
          name: 'addActivity',
          meta: { title: "添加活动" },
          component: AddActivity,
        },
        {
          path: '/function/addProblem',
          name: 'addProblem',
          meta: { title: "添加问题" },
          component: AddProblem,
        },
      ]
    },
    {
      path: '/helloWorld3',
      name: 'helloWorld3',
      meta: { icon: "area-chart", title: "管理" },
      component: HelloWorld,
      children:[
        {
          path: '/management/ActivityManagement',
          name: 'activityManagement',
          meta: { title: "活动管理" },
          component: ActivityManagement,
        },
        {
          path: '/management/ProblemManagement',
          name: 'problemManagement',
          meta: { title: "问题管理" },
          hideChildrenInMenu: true,
          component: ProblemManagement,
          children:[
              
              {
                path: '/management/ProblemManagement',
                name: 'problemManagement',
                meta: { title: "问题统计" },
                hideChildrenInMenu: true,
                component: ProblemManagement,
                
              },
              {
                path: '/management/ActivityManagement3',
                name: 'activityManagement3',
                meta: { title: "活动分类" },
                component: ActivityManagement,
              },
            ]
        },
      ]
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFound
    },
  ]
})

export default router
