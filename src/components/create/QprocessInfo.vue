<template>
  <div class="qprocess-info-component">
    <div
      class="field-heading"
      v-show="editTitle">
      Title
    </div>
    <input
      type="text"
      v-bind:size="titleFieldWidth"
      v-if="editTitle"
      v-model="localTitle"
      placeholder="Click to enter process title"
      v-focus
      v-on:blur="onInputChange(localTitle, 'TITLE')"
      v-on:keyup.enter="onInputChange(localTitle, 'TITLE')"/>
    <div
      class="field-line"
      v-else
      v-on:click="editTitle = true">
      Title:
      <span class="field-value">
        {{ stateTitle }}
      </span>
    </div>
    <div
      class="field-heading"
      v-show="editDesciption">
      Description
    </div>
    <input
      type="text"
      v-bind:size="descriptionFieldWidth"
      v-if="editDesciption"
      v-model="localDescription"
      placeholder="Click to enter description of process"
      v-focus
      v-on:blur="onInputChange(localDescription, 'DESCRIPTION')"
      v-on:keyup.enter="onInputChange(localDescription, 'DESCRIPTION')"/>
    <div
      class="field-line"
      v-else
      v-on:click="editDesciption = true">
      Description:
      <span class="field-value">
        {{ stateDescription }}
      </span>
    </div>
  </div>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'qprocess-info-component',
  data () {
    return {
      localTitle: '',
      editTitle: true,
      localDescription: '',
      editDesciption: true
    }
  },
  computed: {
    ...mapGetters(['stateTitle', 'stateDescription']),
    titleFieldWidth: function () {
      let textWidth = this.localTitle.length
      return textWidth >= 30 ? textWidth + 5 : 30
    },
    descriptionFieldWidth: function () {
      let textWidth = this.localDescription.length
      return textWidth >= 30 ? textWidth + 5 : 30
    }
  },
  methods: {
    ...mapActions(['setField']),
    onInputChange: function (enteredText, inboundField) {
      if (enteredText !== '') {
        this.setField({ field: inboundField, text: enteredText })
        if (inboundField === 'TITLE') {
          this.editTitle = false
        } else if (inboundField === 'DESCRIPTION') {
          this.editDesciption = false
        }
      }
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<style scoped>

.field-heading {
  font-weight: bold;
  margin: 5px 0px 5px 0px;
}

.field-line {
  font-weight: bold;
  margin: 5px 0px 5px 0px;
}

.field-value {
  font-weight: normal;
}

input {
  border: none;
}

:focus {
  outline:none;
}


</style>
