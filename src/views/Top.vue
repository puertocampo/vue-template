<template>
  <div>
    <LinkButton :link="'https://www.facebook.com/Martsballetstudio/'"
      ><font-awesome-icon icon="fa-brands fa-facebook-f" style="color: #231718"
    /></LinkButton>
    <LinkButton :link="'https://www.instagram.com/m.arts_ballet_studio/'"
      ><font-awesome-icon icon="fa-brands fa-instagram" style="color: #231718"
    /></LinkButton>
  </div>
  <img alt="Vue logo" src="../assets/logo.png" />
  <Header />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/molecules/Header.vue";
import LinkButton from "@/components/atoms/LinkButton.vue";

@Options({
  components: {
    Header,
    LinkButton,
  },
  props: {
    msg: String,
  },
})
export default class Top extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
