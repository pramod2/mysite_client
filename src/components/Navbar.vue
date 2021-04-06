<template>
  <v-app-bar app dense color="teal lighten-2" dark flat>
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)">
      </v-img>
    </template>

    <v-app-bar-nav-icon @click="toggleDrawer" class="d-md-none"></v-app-bar-nav-icon>

    <v-toolbar-title>
      <span class="text-h5"
        ><router-link style="text-decoration:none; color:inherit;" to="/">
          Pramod Kandel
        </router-link></span
      >
      <span class="text-caption d-none d-md-inline">
        Not related to
        <router-link style="color:inherit;" to="https://en.wikipedia.org/wiki/Eric_Kandel">
          Eric Kandel
        </router-link>
      </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn v-for="page in pages" :key="page.name" text :to="page.path" class="d-none d-md-flex">
      <v-icon left>{{ page.icon }}</v-icon>
      {{ page.name }}
    </v-btn>

    <v-responsive max-width="260" class="my-1" v-if="search">
      <v-text-field dense flat hide-details rounded solo-inverted></v-text-field>
    </v-responsive>

    <v-btn icon @click="search = !search">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon class="mr-md-1">
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    search: false,
  }),

  computed: {
    pages() {
      return this.$store.state.pages;
    },
  },

  methods: {
    toggleDrawer() {
      console.log('Toggle drawer called.');
      this.$store.commit('toggleDrawer');
      console.log(this.$store.state.drawer);
    },
  },
};
</script>
