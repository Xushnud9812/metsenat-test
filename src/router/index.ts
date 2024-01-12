import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [

    {
      path: '/',
      component: () => import('@/pages/home.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('@/pages/dashboard.vue')
        }, {
          path: '/sponsors',
          name: 'sponsors',
          component: () => import('@/pages/sponsors.vue')
        }, {
          path: '/students',
          name: 'students',
          component: () => import('@/pages/students.vue')
        },
      ]
    },
    {
      path: '/sponsor/:id',
      name: 'sponsor-id',
      component: () => import('@/pages/about-sponsor.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/auth/login.vue')
    }

  ]
})
router.beforeEach((to, from, next) => {
  console.log('from', from)
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
})

export default router