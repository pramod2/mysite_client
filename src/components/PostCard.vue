<template>
  <v-card min-height="150" class="green lighten-5" flat>
    <v-card-title>
      <router-link style="text-decoration:none; color:inherit;" :to="post.link">
        {{ post.title }}
      </router-link>
    </v-card-title>
    <v-card-text style="text-overflow:ellipsis height:50px">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita veritatis
      doloribus vel quisquam, doloremque illum maxime. Commodi laboriosam veritatis mollitia
      sapiente accusantium error, cum tenetur iure, perspiciatis voluptate optio?</v-card-text
    >
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="deep-purple lighten-2" text :to="post.link">
        Read full post
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: { post: Object },
};
</script>

<style></style>
