<script>
import { mapActions } from 'vuex'
export default {
  name: 'form-field-component',
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
      <div class="form-field-component">
        { this.localEditMode
          ? <input
              value={this.title}
              onChange={(event) => this.onInputChange(event.target.value)}
              onBlur={(event) => this.handleNoChange(event.target.value)}
              placeholder="Process Title"
            />
          : <p onClick={(event) => this.toggleEditMode()}>Clickable & Editable Title: {this.fieldValue}</p>
        }
      </div>
    )
  }
}
</script>
