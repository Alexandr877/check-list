<template>
  <v-app light>
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
      <v-btn icon light @click.native.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon light @click.native.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(item,i) in test" :key="i">
          <div slot="header" v-html="item.name">
          </div>
          <v-list-tile avatar v-for="(step,i) in item.title">
            <v-list-tile-content>
              <v-list-tile-title v-html="step.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-btn fab dark small primary @click="removeItem(item, i)">
              <v-icon dark>remove</v-icon>
            </v-btn>
          </v-list-tile>
          <fulldialog v-bind:list="item"></fulldialog>
        </v-expansion-panel-content>
      </v-expansion-panel>
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
      <addchecklist></addchecklist>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from '../../node_modules/firebase'
import config from '../helpers/firebaseConfig'
import fulldialog from './newComponents/fulldialog'
import addchecklist from './newComponents/addchecklist'
import progress from './newComponents/progress'
let app = firebase.database()
let testCase = app.ref('test')
export default {
  data() {
    return {
      dialogm1: '',
      dialog: false,
      clipped: true,
      drawer: true,
      fixed: false,
      testD: {
        name: ''
      },
      items: [
        { icon: 'bubble_chart', title: 'in progress' },
        { icon: 'bubble_chart', title: 'in progress' },
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
    removeItem: function (item, i) {
      console.log(item['.key'], i);
      console.log(testCase.child(item['.key']).child('title').child(i));
      testCase.child(item['.key']).child('title').child(i).remove()
    }
  },
  components: { fulldialog, addchecklist, progress }
}
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
