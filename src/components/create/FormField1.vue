<script>
import { mapGetters, mapActions } from 'vuex'
import FormField2 from './FormField2'
import FormField3 from './FormField3'

export default {
  name: 'form-field1-component',
  components: {
    FormField2,
    FormField3
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
      <div class="form-field1-component">
      <br />
      <hr />
        {/* First Attempt */}
        <h3>Input Test 1 - Uses render/JSX and updates app level state.</h3>
        { this.qpTitle
          ? <p>Title: {this.qpTitle}</p>
          : <input
              type="text"
              onBlur={(event) => this.onExitTextBox(this.title)}
              value={this.title}
              onChange={(event) => this.onInputChange(event.target.value)}
              placeholder="Process Title"
            />
        }
        {/* Second Attempt */}
        <h3>Input Test 2 - Uses render/JSX and has editable but buggy input.</h3>
        <form-field2
          editMode={true}
          fieldName={'TITLE'}
          fieldValue={this.qpTitle}>
        </form-field2>
        {/* Third Attempt */}
        <h3>Input Test 3 - Uses vue &lt;template&gt; feature and has key and blur events fixed.</h3>
        <form-field3
          editMode={true}
          fieldName={'TITLE'}
          fieldValue={this.qpTitle}>
        </form-field3>
      </div>
    )
  }
}
</script>
