<template>
  <div class="home">
    <v-row>
      <v-col cols="12" md="6">
        <About />
      </v-col>
      <v-col cols="12" md="6">
        <Totd />
      </v-col>
    </v-row>
    <v-divider class="my-10"></v-divider>
    <p class="text-h5">Recent Posts</p>
    <v-row class="green lighten-3">
      <v-col v-for="post in posts" :key="post.index" cols="12" md="6">
        <PostCard :post="post" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import About from '../components/About.vue';
import Totd from '../components/Totd.vue';
import PostCard from '../components/PostCard.vue';
// import ProjectSummary from '../components/ProjectSummary.vue';

export default {
  name: 'Home',
  components: {
    About,
    Totd,
    PostCard,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          link: '#',
          title: 'This is the blog',
          body: 'Lorem ',
          publishedOn: 'June 09, 2020',
          publishedBy: 'Pramod',
          lastEditedOn: 'July 22, 2020',
          category: 'Blog',
        },
        {
          id: 2,
          link: '#',
          title: 'This is the project',
          body: 'project Lorem',
          category: 'Project',
          publishedOn: 'June 09, 2020',
          publishedBy: 'Pramod',
          lastEditedOn: 'July 22, 2020',
        },
        {
          id: 5,
          link: '#',
          title: 'This is the poem',
          body: 'poem Lorem',
          category: 'Poem',
          publishedOn: 'June 09, 2020',
          publishedBy: 'Pramod',
          originalAuthor: 'Bal Krishna Sam',
          originallyWrittenOn: 'Apr 22, 1994',
          lastEditedOn: 'July 22, 2020',
        },
      ],
    };
  },

  computed: {
    numPostRows() {
      return this.posts.length / 2;
    },
  },
};
</script>
