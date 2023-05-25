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
import {
  getWpPosts,
  getWpImages,
  filterImagesByName,
} from "./services/service";

const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView();
};

var posts: any = null;
onMounted(async () => {
  posts = await getWpPosts();
  console.log(posts[0]?.content?.rendered);
  const images = await getWpImages();
  const filteredImage = filterImagesByName(images, "logo_landscape");
  console.log(filteredImage, "filtered!");
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
