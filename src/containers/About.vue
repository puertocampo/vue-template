<template>
  <AboutView :sectionId="props.sectionId" />
</template>

<script setup lang="ts">
import AboutView from "@/views/About.vue";

const props = defineProps({
  sectionId: String,
});
</script>
