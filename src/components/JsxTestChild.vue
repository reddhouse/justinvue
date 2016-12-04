<template>
  <div class="jsx-test-child-component">
    <p>Here is our message inside of the JsxTestChild Component</p>
    {{ propsSingle }}
  </div>
</template>


<script>
export default {
  name: 'jsx-test-child-component',
  props: ['propsSingle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
