<template>
  <div :id="props.sectionId">
    <LinkButton :link="'https://www.facebook.com/Martsballetstudio/'"
      ><font-awesome-icon icon="fa-brands fa-facebook-f" style="color: #231718"
    /></LinkButton>
    <LinkButton :link="'https://www.instagram.com/m.arts_ballet_studio/'"
      ><font-awesome-icon icon="fa-brands fa-instagram" style="color: #231718"
    /></LinkButton>
  </div>
  <img alt="MArtsBalletStudioLogo" src="@/assets/logo.png" />
  <Header />
</template>

<script setup lang="ts">
const props = defineProps({
  sectionId: String,
});
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.linkButton {
  a {
    font-size: 30px;
  }
}
</style>
