import Vue from 'vue'
import Router from 'vue-router'
import findLast from "lodash/findLast";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import HelloWorld from '@/components/HelloWorld'
import AddActivity from '../views/function/AddActivity'
import AddProblem from '../views/function/AddProblem'
import ActivityManagement from '../views/management/ActivityManagement'
import ProblemManagement from '../views/management/ProblemManagement'
import Login from '../views/user/Login'
import Forbidden from '@/components/Forbidden'
import NotFound from '@/components/NotFound'
import { check, isLogin } from "../utils/auth";
import { notification } from "ant-design-vue";
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
      meta: { icon: "appstore", title: "功能", authority: ["user", "admin"] },
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
      meta: { icon: "area-chart", title: "管理",authority: ["admin"] },
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
      path: "/403",
      name: "403",
      hideInMenu: true,
      component: Forbidden
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFound
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  const record = findLast(to.matched, record => record.meta.authority);
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== "/user/login") {
      next({
        path: "/user/login"
      });
    } else if (to.path !== "/403") {
      notification.error({
        message: "403",
        description: "你没有权限访问，请联系管理员咨询。"
      });
      next({
        path: "/403"
      });
    }
    NProgress.done();
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router
