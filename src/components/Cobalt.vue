<template>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(item,i) in test" :key="i">
          <div class="headerN" slot="header">
                <v-layout row class="testspace">
                    <v-flex xs10>
                        <v-text-field class="titletext" name="input-7-3" label="Label Text" v-html="item.name" multi-line></v-text-field>
                    </v-flex>
                    <div class="alwaysleft">
                        <v-text-field class="titletext" name="input-7-3" label="Label Text" v-html="item.user"></v-text-field>
                        <v-btn icon class="blue--text text--lighten-2" @click="setUser(item, test)">
                            <v-icon>rowing</v-icon>
                        </v-btn>
                    </div>
                </v-layout>
            </div>
          <div v-for="(step,i) in item.title">
            <v-layout row class="testspace">
              <v-flex xs10 v-bind:style="{ 'background-color': step.color }">
                <v-text-field class="titletext" name="input-7-3" label="Label Text" v-html="step.title" multi-line></v-text-field>
              </v-flex>
              <infocobalt class="alwaysleft" v-bind:info="step, i"></infocobalt>
              <div class="alwaysleft">
                <v-btn icon class="blue--text text--lighten-2" @click="changeColorResset(item, i)">
                  <v-icon>autorenew</v-icon>
                </v-btn>
                <v-btn icon class="blue--text text--lighten-2" @click="changeColorPass(item, i)">
                  <v-icon>thumb_up</v-icon>
                </v-btn>
                <v-btn icon class="red--text text--lighten-2" @click="changeColorFalse(item, i)">
                  <v-icon>thumb_down</v-icon>
                </v-btn>
                <v-btn icon class="blue--text text--lighten-2" @click="removeItem(item, i)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </div>
            </v-layout>
          </div>
          <dialogCobalt v-bind:list="item"></dialogCobalt>
        </v-expansion-panel-content>
        <addCobalt></addCobalt>
        <v-btn icon class="red--text text--lighten-2" @click="resetData()">
                <v-icon>refresh</v-icon>
            </v-btn>
      </v-expansion-panel>
</template>

<script>
import firebase from '../../node_modules/firebase'
import config from '../helpers/firebaseConfig'
import dialogCobalt from './newComponents/dialogCobalt'
import addCobalt from './newComponents/addCobalt'
import infocobalt from './newComponents/infocobalt'
import Rx from '../../node_modules/rxjs/Rx'
let app = firebase.database()
let cobalt = app.ref('cobalt')
const data = require('../helpers/data')
export default {
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
      resetData: function() {
            let itemArray = []
            let cleanUserData = {
                status: "",
                progrescolor: "#80CBC4",
                user:""
            }
            console.log(data.getData('all_case')[0]);
            Rx.Observable.from(data.getData('all_case'))
            // .toArray((array) => itemArray.push(array))
            .subscribe((step) => {
                // data.setData('arrayStep', step)
                // console.log(1234, data.getData('arrayStep'));
                cobalt.child(step['.key']).update(cleanUserData)
            })
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
    test: cobalt
  },
  methods: {
    setUser: function (item, test){
      data.setData('all_case', test)
            let user = firebase.auth().currentUser;
            console.log(user.displayName);
            let myuser = this.user;
            let myDataObj = {
                status: "in_progress",
                progrescolor: "#80CBC4",
                user:"in progress by " + user.displayName
            }
            return cobalt.child(item['.key']).update(myDataObj)

        },
    changeColorPass: function (item, i) {
        let note = this.note;
        let myObj= {color: '#a5d6a7'}
        return cobalt.child(item['.key']).child('title').child(i).update(myObj)
    },
    changeColorResset: function (item, i) {
        let note = this.note;
        let myObj= {color: ''}
        return cobalt.child(item['.key']).child('title').child(i).update(myObj)
    },
    changeColorFalse: function (item, i) {
        let note = this.note;
        let myObj= {color: '#ff5252'}
        return cobalt.child(item['.key']).child('title').child(i).update(myObj)
    },
    removeItem: function (item, i) {
      console.log(item['.key'], i);
      console.log(cobalt.child(item['.key']).child('title').child(i));
      cobalt.child(item['.key']).child('title').child(i).remove()
    }
  },
  components: { dialogCobalt, addCobalt, infocobalt }
}
</script>

<style lang="stylus">
  @import '../stylus/main'
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
