<template>
  <v-navigation-drawer disable-resize-watcher v-model="drawer" app>
    <!--     <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ drawer }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider> -->

    <v-list dense nav>
      <v-list-item v-for="page in pages" :key="page.title" link :to="page.path">
        <v-list-item-icon>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ page.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'NavDrawer',
  data() {
    return {};
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(value) {
        this.$store.state.drawer = value;
      },
    },
    pages() {
      return this.$store.state.pages;
    },
  },
};
</script>
