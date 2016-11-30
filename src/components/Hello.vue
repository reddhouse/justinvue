<template>
  <div class="hello-component">
    <h1>{{ msg }}</h1>
    <h1>{{ capsmsg }}</h1>
    <h2>Tell me something to pass to my child component</h2>
    <input v-model="parentObject.msgFromParent" placeholder="Tell me anything...">
    <p>Message is: {{ parentObject.msgFromParent }}</p>
    <hello-child v-bind:propsObject="parentObject"></hello-child>
  </div>
</template>

<script>
import HelloChild from './HelloChild'

export default {
  name: 'hello-component',
  data () {
    return {
      msg: 'Welcome to our (parent) Hello Component',
      parentObject: {
        msgFromParent: null
      }
    }
  },
  computed: {
    capsmsg: function () {
      let caps = this.msg.toString()
      return caps.toUpperCase()
    }
  },
  components: {
    HelloChild
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
