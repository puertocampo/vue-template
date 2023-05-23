<template>
  <TopView :sectionId="props.sectionId" @onClickHeader="onClickHeader" />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import TopView from "@/views/Top.vue";

const props = defineProps({
  sectionId: String,
});
const emits = defineEmits<{ (e: "onClickHeader", value: string): void }>();
const onClickHeader = (value: string): void => {
  emits("onClickHeader", value);
};
</script>
