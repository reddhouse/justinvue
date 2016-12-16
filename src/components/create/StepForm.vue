<template>
  <div class="step-form-component">
    <!-- Email Input -->
    <div
      class="field-heading"
      v-show="editEmail">
      Email
    </div>
    <input
      type="text"
      v-if="editEmail"
      v-model="localEmail"
      placeholder="Email address"
      v-focus
      v-on:blur="onInputChange(localEmail, 'EMAIL')"
      v-on:keyup.enter="onInputChange(localEmail, 'EMAIL')"/>
    <div
      class="field-line"
      v-else
      v-on:click="editEmail = true">
      Email:
      <span class="field-value">
        {{ stateEmail }}
      </span>
    </div>
    <!-- Action Input -->
    <div
      class="field-heading"
      v-show="editAction">
      Action
    </div>
    <input
      type="text"
      v-if="editAction"
      v-model="localAction"
      placeholder="Specific action you are requesting of this person"
      v-focus
      v-on:blur="onInputChange(localAction, 'ACTION')"
      v-on:keyup.enter="onInputChange(localAction, 'ACTION')"/>
    <div
      class="field-line"
      v-else
      v-on:click="editAction = true">
      Action:
      <span class="field-value">
        {{ stateAction }}
      </span>
    </div>
    <!-- Instructions Input -->
    <div
      class="field-heading"
      v-show="editInstructions">
      Instructions
    </div>
    <input
      type="text"
      v-if="editInstructions"
      v-model="localInstructions"
      placeholder="Addtional instructions (optional)"
      v-focus
      v-on:blur="onInputChange(localInstructions, 'INSTRUCTIONS')"
      v-on:keyup.enter="onInputChange(localInstructions, 'INSTRUCTIONS')"/>
    <div
      class="field-line"
      v-else
      v-on:click="editInstructions = true">
      Instructions:
      <span class="field-value">
        {{ stateInstructions }}
      </span>
    </div>
    <!-- Due Date Input -->
    <div
      class="field-heading"
      v-show="editDueDate">
      Due Date
    </div>
    <input
      type="text"
      v-if="editDueDate"
      v-model="localDueDate"
      placeholder="Date this action should be completed"
      v-focus
      v-on:blur="onInputChange(localDueDate, 'DUEDATE')"
      v-on:keyup.enter="onInputChange(localDueDate, 'DUEDATE')"/>
    <div
      class="field-line"
      v-else
      v-on:click="editDueDate = true">
      Due Date:
      <span class="field-value">
        {{ stateDueDate }}
      </span>
    </div>
    <!-- End of Inputs -->
  </div>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'step-form-component',
  data () {
    return {
      localEmail: '',
      editEmail: true,
      localAction: '',
      editAction: true,
      localInstructions: '',
      editInstructions: true,
      localDueDate: '',
      editDueDate: true
    }
  },
  computed: {
    ...mapGetters([
      'stateEmail',
      'stateAction',
      'stateInstructions',
      'stateDueDate'
    ])
  },
  methods: {
    ...mapActions(['setField']),
    onInputChange: function (enteredText, inboundField) {
      if (enteredText !== '') {
        this.setField({ field: inboundField, text: enteredText })
        if (inboundField === 'EMAIL') {
          this.editEmail = false
        } else if (inboundField === 'ACTION') {
          this.editAction = false
        } else if (inboundField === 'INSTRUCTIONS') {
          this.editInstructions = false
        } else if (inboundField === 'DUEDATE') {
          this.editDueDate = false
        }
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

</style>
