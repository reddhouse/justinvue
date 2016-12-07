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
      this.title = enteredText
    },
    onExitTextBox: function (currentValue) {
      if (currentValue !== '') {
        this.localEditMode = false
        this.setField({ field: this.fieldName, text: currentValue })
      }
    },
    setLocalEditMode: function () {
      this.localEditMode = true
    }
  },
  render (h) {
    return (
      <div class="form-field-component">
        { this.localEditMode
          ? <input
              onBlur={(event) => this.onExitTextBox(this.title)}
              value={this.title}
              onChange={(event) => this.onInputChange(event.target.value)}
              placeholder="Process Title"
            />
          : <p onClick={(event) => this.setLocalEditMode()}>Title (click to edit): {this.fieldValue}</p>
        }
      </div>
    )
  }
}
</script>
