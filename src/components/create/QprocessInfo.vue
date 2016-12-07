<script>
import { mapGetters, mapActions } from 'vuex'
import FormField from './FormField'
// import HelloChild from './HelloChild'

export default {
  name: 'qprocess-info-component',
  components: {
    FormField
  },
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
      <div class="qprocess-info-component">
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
        <h3>Process2</h3>
        <form-field
          editMode={true}
          fieldName={'TITLE'}
          fieldValue={this.qpTitle}>
        </form-field>
      </div>
    )
  }
}
</script>


<style scoped>

.qprocess-info-component {

}

</style>
