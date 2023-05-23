<template>
  <a :href="props.link" target="_blank"><slot /></a>
</template>

<script setup lang="ts">
const props = defineProps({
  link: String,
});
</script>

<style lang="scss" scoped>
a {
  background-color: "#000";
  color: "#787";
}
</style>
