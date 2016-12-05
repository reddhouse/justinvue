<template>
  <div id="app">
    <new-qprocess></new-qprocess>
    <hello></hello>
    <counter></counter>
    <jsx-test></jsx-test>
    <img src="./assets/logo.png">
    <div class="footer"></div>
  </div>
</template>

<script>
import NewQprocess from './components/create/NewQprocess'
import Hello from './components/Hello'
import Counter from './components/Counter'
import JsxTest from './components/JsxTest'

export default {
  name: 'app',
  components: {
    NewQprocess,
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  margin-top: 120px;
}
</style>
