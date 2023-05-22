<template>
  <TopView />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopView from "@/views/Top.vue";

@Options({
  components: {
    TopView,
  },
  props: {
    msg: String,
  },
})
export default class Top extends Vue {
  msg!: string;
}
</script>
