<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from '../node_modules/firebase'
import config from './helpers/firebaseConfig'

let app = firebase.initializeApp(config)
let db = app.database()
let testCase = db.ref('test')
export default {
  name: 'app'
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
</style>
