<template>
  <div class="card-path-component">
    <step-form
      v-for="(step, index) in stateStepList"
      v-bind:propsStep="step"
      v-bind:propsIndex="index">
    </step-form>
    <button
      v-on:click="handleNewForm()">
      Add Another Step
    </button>
  </div>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
import { mapGetters, mapActions } from 'vuex'
import StepForm from './StepForm'

export default {
  name: 'card-path-component',
  computed: {
    ...mapGetters(['stateStepList'])
  },
  methods: {
    ...mapActions(['addBlankForm']),
    handleNewForm: function () {
      this.addBlankForm({ numSteps: this.stateStepList.length })
    }
  },
  components: {
    StepForm
  }
}
</script>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<style scoped>

</style>
