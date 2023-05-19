<h1>{{ msg }}</h1>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class H1 extends Vue {
  msg!: string
}
</script>