<template>
  <div class="form-field3-component">
    <input
      v-if="localEditMode"
      v-model="title"
      placeholder="Process Title"
      v-focus
      v-on:blur="onInputChange(title)"
      v-on:keyup.enter.prevent="onInputChange(title)"/>
    <div
      v-else
      v-on:click="localEditMode = true">
    Title: {{ fieldValue }}
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex'
export default {
  name: 'form-field3-component',
  props: [
    'editMode',
    'fieldName',
    'fieldValue'
  ],
  data () {
    return {
      title: '',
      localEditMode: this.editMode
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
    }
  },
  directives: {
    // Register a global custom directive called v-focus
    focus: {
      // When the bound element is inserted into the DOM...
      inserted (el) {
        // Focus the element
        el.focus()
      }
    }
  }
}
</script>
