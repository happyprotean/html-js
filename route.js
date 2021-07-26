function index() {
  return import(/* webpackChunkName: "index" */ '@/pages/index.vue')
}
function users() {
  return import(/* webpackChunkName: "users" */ '@/pages/users.vue')
}
function users__id() {
  return import(/* webpackChunkName: "users-id" */ '@/pages/users/_id.vue')
}

export default [
  {
    name: 'index',
    path: '/',
    component: index,
  },
  {
    name: 'users',
    path: '/users',
    component: users,
    children: [
      {
        name: 'users-id',
        path: ':id?',
        component: users__id,
      },
    ],
  },
]
