<!--NEED TO ADD KEYS TO ALL V-FORS  -->
<template>
  <div class="step-form-component">
    Step # {{ propsIndex + 1 }}
    <step-field
      v-for="(value, key) in propsStep"
      v-bind:propsValue="value"
      v-bind:propsKey="key"
      v-bind:propsIndex="propsIndex">
    </step-field>
    <br>
  </div>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
import StepField from './StepField'

export default {
  name: 'step-form-component',
  props: ['propsStep', 'propsIndex'],
  components: {
    StepField
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
