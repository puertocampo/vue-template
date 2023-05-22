<template>
  <ul>
    <li>
      <Button buttonName="Top" />
    </li>
    <li>
      <Button buttonName="About" />
    </li>
    <li>
      <Button buttonName="Class" />
    </li>
    <li>
      <Button buttonName="Contact" />
    </li>
    <li>
      <Button buttonName="Guests" />
    </li>
    <li>
      <Button buttonName="Studio" />
    </li>
    <li>
      <Button buttonName="Gallery" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/atoms/HeaderButton.vue";

@Options({
  components: {
    Button,
  },
})
export default class App extends Vue {}
</script>

<style>
ul {
  display: flex;
}
li {
  list-style: none;
}
</style>
