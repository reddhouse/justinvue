<template>
  <li class="hello-child-component">
    <h3>
      Welcome to our
      <span id="propstyle"> {{ propsSingle }} </span>
      (child) Component
    </h3>
    <div v-bind:style="styleObject">
      {{ msg }}
    </div>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <button v-on:click="changeColor">Change Color</button>
    <p v-bind:title="hoverMsg">Hover on me to see dynamic title sent from the Vue instance</p>
    <p>Here is the message in the child component, reacively delivered:<p>
    {{ propsObject.msgFromParent }}
  </li>
</template>


<script>
export default {
  name: 'hello-child-component',
  props: ['propsObject', 'propsSingle'],
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

#propstyle {
  color: green;
}

</style>
