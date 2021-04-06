import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/es5/services/goto';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Blogs from '../views/Blogs.vue';
import Projects from '../views/Projects.vue';
import PostEditor from '../views/PostEditor.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/editor',
    name: 'PostEditor',
    component: PostEditor,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;
    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
});

export default router;
