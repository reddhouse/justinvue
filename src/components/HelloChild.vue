<template>
  <div class="hello-child-component">
    <h1>Testing HelloChild Component</h1>
    {{ msg }}
    <p :title="hovermsg">Hover on me to see dynamic title sent from the Vue instance</p>
  </div>
</template>


<script>
export default {
  name: 'hello-child-component',
  data () {
    return {
      msg: 'This message is inside of HelloChild.vue',
      hovermsg: 'You loaded this page on ' + new Date()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
