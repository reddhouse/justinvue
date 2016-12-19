<template>
  <div class="step-field-component">
    <div
      class="field-heading"
      v-if="blankField || editingField">
      <div>
        {{ keyToText(propsKey) }}:
      </div>
      <input
        type="text"
        v-model="localField"
        placeholder="Enter Text"
        v-focus
        v-on:blur="onInputChange(localField, propsKey)"
        v-on:keyup.enter="onInputChange(localField, propsKey)"/>
    </div>
    <div
      class="field-heading"
      v-else
      v-on:click="editingField = true">
      {{ keyToText(propsKey) }}:
      <span class="field-value">
        {{ propsValue }}
      </span>
    </div>
  </div>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
import { mapActions } from 'vuex'

export default {
  name: 'step-field-component',
  props: ['propsValue', 'propsKey', 'propsIndex'],
  data () {
    return {
      editingField: false,
      localField: this.propsValue
    }
  },
  computed: {
    // ...mapGetters(['titleState'])
    blankField: function () {
      if (this.propsValue === '') {
        return true
      } else return false
    }
  },
  methods: {
    ...mapActions(['setField2']),
    keyToText: function (key) {
      let returnValue = null
      switch (key) {
        case 'email':
          returnValue = 'Email'
          break
        case 'action':
          returnValue = 'Action'
          break
        case 'dueDate':
          returnValue = 'Due Date'
          break
        case 'instructions':
          returnValue = 'Instructions'
          break
        case 'notify':
          returnValue = 'Notify'
          break
        case 'pause':
          returnValue = 'Pause'
          break
      }
      return returnValue
    },
    onInputChange: function (enteredText, inboundField) {
      if (enteredText !== '') {
        this.editingField = false
        this.setField2({ field: inboundField, text: enteredText, index: this.propsIndex })
      }
    }
  },
  filters: {

  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  components: {
    // HelloChild
  }
}
</script>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<style scoped>

.field-heading {
  font-weight: bold;
  margin: 5px 0px 5px 0px;
}

.field-value {
  font-weight: normal;
}

</style>
