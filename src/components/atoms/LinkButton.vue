<template>
  <a :href="link" target="_blank"><slot /></a>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    link: String,
  },
})
export default class LinkButton extends Vue {
  link!: string;
}
</script>

<style lang="scss" scoped>
a {
  background-color: "#000";
  color: "#787";
}
</style>
