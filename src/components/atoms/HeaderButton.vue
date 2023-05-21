<template>
  <button>{{ buttonName }}</button>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  
  @Options({
    props: {
      buttonName: String
    }
  })
  export default class HeaderButton extends Vue {
    buttonName!: string
  }
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