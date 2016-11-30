<template>
  <div class="hello-child-component">
    <h2>Welcom to our (child) HelloChild Component</h2>
    <div :style="styleObject">
      {{ msg }}
    </div>
    <button @click="reverseMessage">Reverse Message</button>
    <button @click="changeColor">Change Color</button>
    <p :title="hoverMsg">Hover on me to see dynamic title sent from the Vue instance</p>
    <p>Here is the message in the child component, reacively delivered:<p>
    {{ propsObject.msgFromParent }}
  </div>
</template>


<script>
export default {
  name: 'hello-child-component',
  props: ['propsObject'],
  data () {
    return {
      msg: 'HERE is example stupid',
      hoverMsg: 'You loaded this page on ' + new Date(),
      styleObject: {
        color: 'red'
      }
    }
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split(' ').reverse().join(' ')
    },
    changeColor: function () {
      this.styleObject.color === 'red' ? this.styleObject.color = 'blue' : this.styleObject.color = 'red'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
