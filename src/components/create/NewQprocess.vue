<script>
import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'new-qprocess-component',
  data () {
    return {
      title: '',
      titleBlurred: false
    }
  },
  computed: {
    ...mapGetters(['qpTitle'])
  },
  methods: {
    ...mapActions(['setTitle']),
    onInputChange: function (enteredText) {
      this.title = enteredText
    },
    onExitTextBox: function (currentTitle) {
      this.setTitle({ title: currentTitle })
    }
  },
  render (h) {
    return (
      <div class="new-qprocess-component">
        <h3>Process</h3>
        { this.qpTitle
          ? <p>Title: {this.qpTitle}</p>
          : <input
              onBlur={(event) => this.onExitTextBox(this.title)}
              value={this.title}
              onChange={(event) => this.onInputChange(event.target.value)}
              placeholder="Process Title"
            />
        }
      </div>
    )
  }
}
</script>


<style scoped>

.new-qprocess-component {
  
}

</style>
