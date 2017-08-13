<template>
    <v-layout row wrap>
        <v-dialog v-model="dialog" width="300px">
            <v-btn icon dark slot="activator" class="blue--text text--lighten-2" @click="my(sinfo)">
                <v-icon>info_outline</v-icon>
            </v-btn>
                <v-card class="card-padding">
                    <div v-html="sinfo.name"></div>
                    <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="360" v-bind:value="sinfo.passValue" class="teal--text">
                        {{ sinfo.passValue }}
                    </v-progress-circular>
                    <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="90" v-bind:value="sinfo.failValue" class="red--text">
                        {{ sinfo.failValue }}
                    </v-progress-circular>
    
                </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
import firebase from '../../../node_modules/firebase'
import Rx from '../../../node_modules/rxjs/Rx'
let app = firebase.database()
let testCase = app.ref('test')
const data = require('../../helpers/data')
function roundUp(num, precision) {
  return Math.ceil(num * precision) / precision
}
export default {
    props: ['sinfo'],
    data() {
        return {
            value: 0,
            fvalue: 0,
            dialog: false
        }
    },
        firebase: {
        test: testCase
    },
    methods:{
        my: (item) => {
            console.log(item);
            let myArray = [];
            let failArray = [];
            console.log(9999999999999999, Object.keys(item.title));
            Rx.Observable.from(Object.keys(item.title)).subscribe((Mitem) =>{ 
                myArray.push(item.title[Mitem].proccent_pass)
            })
            Rx.Observable.from(Object.keys(item.title)).subscribe((Mitem) =>{ 
                failArray.push(item.title[Mitem].proccent_failed)
            })
            Rx.Observable.from(myArray)
            .reduce((a,b) =>  a+b)
            .subscribe((item) => console.log(98756, this.value=item))
            Rx.Observable.from(failArray)
            .reduce((a,b) =>  a+b)
            .subscribe((item) => console.log(98756, this.fvalue=item))
            console.log(555555555555555555, this.fvalue)
            let passVal = {
                failValue: roundUp(this.fvalue, 10),
                passValue: roundUp(this.value, 10)}
            return testCase.child(item['.key']).update(passVal)
        } 
    }
}
</script>
<style src='../stylus/info.css' lang="stylus">
  @import '../../stylus/main'
</style>

