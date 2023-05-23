<template>
  <Top :sectionId="'Top'" @onClickHeader="scrollToSection" />
  <About :sectionId="'About'" />
  <li v-for="post in posts" :key="post.id">
    <h3>{{ post?.title?.rendered }}</h3>
    <div v-html="post.content.rendered"></div>
  </li>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Top from "./containers/TopContainer.vue";
import About from "./containers/About.vue";
import { getWpPosts } from "./services/service";

const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView();
};

var posts: any = null;
onMounted(async () => {
  const res = await getWpPosts();
  posts = res?.data;
  console.log(posts?.data[0]?.content?.rendered);
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
