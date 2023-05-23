<template>
  <ul>
    <li>
      <Button buttonName="Top" @onClick="onClickHeaderButton" />
    </li>
    <li>
      <Button buttonName="About" @onClick="onClickHeaderButton" />
    </li>
    <li>
      <Button buttonName="Class" @onClick="onClickHeaderButton" />
    </li>
    <li>
      <Button buttonName="Contact" @onClick="onClickHeaderButton" />
    </li>
    <li>
      <Button buttonName="Guests" @onClick="onClickHeaderButton" />
    </li>
    <li>
      <Button buttonName="Studio" @onClick="onClickHeaderButton" />
    </li>
    <li>
      <Button buttonName="Gallery" @onClick="onClickHeaderButton" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import Button from "@/components/atoms/HeaderButton.vue";

const emits = defineEmits<{
  (e: "onClickHeaderButton", value: string): void;
}>();
const onClickHeaderButton = (value: string): void => {
  emits("onClickHeaderButton", value);
};
</script>

<style>
ul {
  display: flex;
}
li {
  list-style: none;
}
</style>
