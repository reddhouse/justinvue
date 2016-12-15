<template>
  <div class="hello-component">
    <br>
    <hr>
    <img src="../assets/logo.png">
    <h2
      v-bind:style="styles">
      {{ msg }}
    </h2>
    <span>Font Color:</span>
    <input
      type="text"
      v-model="fontColor"
      placeholder="Choose a color">
    <p>&#8226; Use a computed function to return the message above, capitalized</p>
    <p class="indent" v-bind:style="styles">{{ capsmsg }}</p>
    <p>&#8226; Use a filter to return the message above, undercased</p>
    <!-- Filters can be chained together. We coud add a second pipe here.  -->
    <p class="indent" v-bind:style="styles">{{ msg | undercase }}</p>
    <p>&#8226; Now, tell me something to pass to my child component</p>
    <span>Type Here:</span>
    <input
      type="text"
      v-model="parentObject.msgFromParent"
      placeholder="Tell me anything...">
    <p
      v-bind:class="{ 'easter-egg': isJustin }">
      You typed: {{ parentObject.msgFromParent }}
    </p>
    <p
      v-show="isJustin">
      Congrats! You found an easter egg!
    </p>
    <ul>
      <hello-child
        v-for="(item, index) in parentObject.simpleArray"
        v-bind:propsSingle="item"
        v-bind:propsObject="parentObject">
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
      msg: 'Welcome to our Parent Component',
      fontColor: '',
      parentObject: {
        msgFromParent: null,
        simpleArray: ['Foo', 'Bar']
      }
    }
  },
  computed: {
    capsmsg: function () {
      let caps = this.msg.toString()
      return caps.toUpperCase()
    },
    isJustin: function () {
      return this.parentObject.msgFromParent === 'Justin'
    },
    styles: function () {
      return {
        color: this.fontColor
      }
    }
  },
  filters: {
    undercase: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toLowerCase()
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
  margin: 0px 10px;
}

a {
  color: #42b983;
}

.indent {
  margin: 0px 0px 0px 30px;
}

.easter-egg {
  color: purple;
}
</style>
