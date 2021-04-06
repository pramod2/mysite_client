import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    pages: [
      { name: 'Home', path: '/', icon: 'mdi-home' },
      //   { name: 'Login', path: '/login' },
      { name: 'Blogs', path: '/blogs', icon: 'mdi-blogger' },
      { name: 'Projects', path: '/projects', icon: 'mdi-code-braces' },
    ],
    categories: [
      { name: 'Blog', icon: 'mdi-blogger' },
      { name: 'Project', icon: 'mdi-code-braces' },
      { name: 'Poem', icon: 'mdi-air-filter' },
    ],
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {},
  modules: {},
});
