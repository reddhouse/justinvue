<template>
  <div class="hello-component">
    <h2>{{ msg }}</h2>
    <p>Let's use a computed function to return the message above, capitalized</p>
    <p>{{ capsmsg }}</p>
    <h2>Now, tell me something to pass to my child component</h2>
    <input v-model="parentObject.msgFromParent" placeholder="Tell me anything...">
    <p>You typed: {{ parentObject.msgFromParent }}</p>
    <ul>
      <hello-child
        v-for="(item, index) in parentObject.simpleArray"
        :propsSingle="item"
        :propsObject="parentObject">
      </hello-child>
    </ul>
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
        msgFromParent: null,
        simpleArray: ['Foo', 'Bar', 'Baz']
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
