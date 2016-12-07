<template>
  <div id="app">
    <qprocess-info></qprocess-info>
    <hello></hello>
    <counter></counter>
    <jsx-test></jsx-test>
    <img src="./assets/logo.png">
    <div class="footer"></div>
  </div>
</template>

<script>
import QprocessInfo from './components/create/QprocessInfo'
import Hello from './components/Hello'
import Counter from './components/Counter'
import JsxTest from './components/JsxTest'

export default {
  name: 'app',
  components: {
    QprocessInfo,
    Hello,
    Counter,
    JsxTest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 60px 60px;
}

.footer {
  margin-top: 120px;
}
</style>
