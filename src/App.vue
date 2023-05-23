<template>
  <Top :sectionId="'Top'" @onClickHeader="scrollToSection" />
  <About :sectionId="'About'" />
</template>

<script setup lang="ts">
import Top from "./containers/TopContainer.vue";
import About from "./containers/About.vue";

const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView();
};
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
