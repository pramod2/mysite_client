<template>
  <v-app>
    <NavDrawer />
    <Navbar />
    <v-main class="grey lighten-4">
      <v-container class="pa-10" style="min-height:800px">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import NavDrawer from './components/NavDrawer.vue';

export default {
  name: 'App',

  components: {
    NavDrawer,
    Navbar,
  },
};
</script>
<style>
.ProseMirror:focus {
  outline: none;
}
blockquote {
  border-left: 3px solid rgb(140, 140, 140);
  color: rgba(0, 0, 0, 0.8);
  padding-left: 0.8rem;
  font-style: italic;
}

pre {
  padding: 0.7rem 1rem;
  border-radius: 5px;
  color: white;
  overflow-x: auto;
  background-color: rgb(120, 120, 120);
}
</style>
