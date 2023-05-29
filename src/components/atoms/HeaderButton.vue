<template>
  <button @click="onClick(props.buttonName || '')">
    {{ props.buttonName }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  buttonName: String,
});
const emits = defineEmits<{
  (e: "onClick", value: string): void;
}>();
const onClick = (buttonName: string): void => {
  emits("onClick", buttonName);
};
</script>

<style scoped>
button {
  padding: 0 40px;
  width: 160px;

  outline: none;
  border: none;
  background-color: transparent;

  font-size: 40px;
}
</style>
