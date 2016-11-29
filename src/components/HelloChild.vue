<template>
  <div class="hello-child-component">
    <h1>Testing HelloChild Component</h1>
    {{ msg }}
  </div>
</template>


<script>
export default {
  name: 'hello-child-component',
  data () {
    return {
      msg: 'This message is inside of HelloChild.vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
