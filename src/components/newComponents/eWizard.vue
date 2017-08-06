<template>
    <v-expansion-panel>
        <v-expansion-panel-content v-for="(item,i) in test" :key="i">
            <div class="testheader" slot="header" v-html="item.name"></div>
            <div v-for="(step,i) in item.title">
                <v-layout row class="testspace">
                    <v-flex xs10 v-bind:style="{ 'background-color': step.color }">
                        <v-text-field class="titletext" name="input-7-3" label="Label Text" v-html="step.title" multi-line></v-text-field>
                    </v-flex>
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
            <fulldialog v-bind:list="item"></fulldialog>
        </v-expansion-panel-content>
        <addchecklist></addchecklist>
    </v-expansion-panel>
</template>
<script>
import firebase from '../../../node_modules/firebase'
import config from '../../helpers/firebaseConfig'
import fulldialog from './fulldialog'
import addchecklist from './addchecklist'
let app = firebase.database()
let testCase = app.ref('test')
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
            items: [
                { icon: 'bubble_chart', title: 'eWizard', href: "success" },
                { icon: 'bubble_chart', title: 'Cobalt', router: "cobalt" },
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
    components: { fulldialog, addchecklist }
}
</script>

<style lang="stylus">
  @import '../../stylus/main'
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