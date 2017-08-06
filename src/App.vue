<template>
<v-app light>
  <div id="app">
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher>
      <v-list>
          <div value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile :href="item.href" :router="item.router">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-btn icon light @click.native.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon light @click.native.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon light @click.native.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer">
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>some beautiful feature
            <br> will be here</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed">
      
    </v-footer>
  </div>
</v-app>
</template>

<script>
import firebase from '../node_modules/firebase'
import db from './firebase'
import fulldialog from './components/newComponents/fulldialog'
import addchecklist from './components/newComponents/addchecklist'
import eWizard from './components/newComponents/eWizard'

let testCase = db.ref('test')
export default {
  name: 'app',
  data() {
    return {
      dialogm1: '',
      color: '',
      dialog: false,
      clipped: true,
      drawer: true,
      fixed: false,
      testD: {
        name: ''
      },
      items: [
        { icon: 'bubble_chart', title: 'eWizard', href: "#/success" },
        { icon: 'bubble_chart', title: 'Cobalt', href: "#/cobalt" },
        { icon: 'bubble_chart', title: 'in progress' },
        { icon: 'bubble_chart', title: 'in progress' },
        { icon: 'bubble_chart', title: 'in progress' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Cobalt & eWizard QA project',
    }
  },
  firebase: {
    test: testCase
  },
  methods: {
    changeColorPass: function (item, i) {
      let note = this.note;
      let myObj = { color: '#a5d6a7' }
      return testCase.child(item['.key']).child('title').child(i).update(myObj)
    },
    changeColorResset: function (item, i) {
      let note = this.note;
      let myObj = { color: '' }
      return testCase.child(item['.key']).child('title').child(i).update(myObj)
    },
    changeColorFalse: function (item, i) {
      let note = this.note;
      let myObj = { color: '#ff5252' }
      return testCase.child(item['.key']).child('title').child(i).update(myObj)
    },
    removeItem: function (item, i) {
      console.log(item['.key'], i);
      console.log(testCase.child(item['.key']).child('title').child(i));
      testCase.child(item['.key']).child('title').child(i).remove()
    }
  },
  components: { fulldialog, addchecklist, eWizard }
}
</script>

<style lang="stylus">
  @import './stylus/main'
  .titletext
    padding-left: 20px
  .red
    background-color: green
  .newItem
    padding-right: 20px
  .alwaysleft
    justify-content: flex-end
    display: flex
  .testspace
    background-color: color
    justify-content: space-between
  .testheader
    padding-right: 50px
</style>
