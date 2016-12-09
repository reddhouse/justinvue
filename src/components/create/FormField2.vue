<script>
import { mapActions } from 'vuex'
export default {
  name: 'form-field2-component',
  props: [
    'editMode',
    'fieldName',
    'fieldValue'
  ],
  data () {
    return {
      localEditMode: this.editMode,
      title: ''
    }
  },
  methods: {
    ...mapActions(['setField']),
    onInputChange: function (enteredText) {
      if (enteredText !== '') {
        this.title = enteredText
        this.setField({ field: this.fieldName, text: enteredText })
        this.localEditMode = false
      }
    },
    handleNoChange: function (textInBox) {
      if (textInBox === this.title) {
        this.localEditMode = false
      }
    },
    toggleEditMode: function () {
      this.localEditMode = true
    }
  },
  render (h) {
    return (
      <div class="form-field2-component">
        { this.localEditMode
          ? <input
              value={this.title}
              // autoFocus="true"
              onChange={(event) => this.onInputChange(event.target.value)}
              onBlur={(event) => this.handleNoChange(event.target.value)}
              placeholder="Process Title"
            />
          : <p onClick={(event) => this.toggleEditMode()}>Title: {this.fieldValue}</p>
        }
      </div>
    )
  }
}
</script>
