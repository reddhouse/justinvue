<script>
import JsxTestChild from './JsxTestChild'

export default {
  name: 'jsx-test-component',
  components: [
    JsxTestChild
  ],
  data () {
    return {
      msg: 'Who Dat?'
    }
  },
  render (h) {
    return (
      <div class="jsx-test-component">
        <h1>We Are Rendering!</h1>
        <JsxTestChild propsSingle= { this.msg } />
      </div>
    )
  }
}
</script>
