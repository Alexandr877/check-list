<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" width="600px">
      <v-btn primary dark slot="activator">Add Step</v-btn>
      <v-card>
        <v-card-text>
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Add your next step</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field name="input-7-1" label="Label Text" multi-line v-model="note"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn class="green--text darken-1" flat="flat" @click="removeItem(list)" @click.native="dialog = false">Remove Case</v-btn>
          <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Cancel</v-btn>
          <v-btn class="green--text darken-1" flat="flat" @click="Update(list)" @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import firebase from '../../../node_modules/firebase'
let db = firebase.database()
let testCase = db.ref('test')

export default {
  props: ['list'],
  data() {
    return {
      dialog: false,
      note: ''
    }
  },
  firebase: {
    test: testCase
  },
  methods: {
    addCase: function () {
      testCase.push(this.testD)
      this.testD.name = ''
      this.testD.check1 = false
      this.testD.title1 = ''
    },
    Update: function (item) {
      String.prototype.hashCode = function () {
        if (Array.prototype.reduce) {
          return this.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
        }
        var hash = 0;
        if (this.length === 0) return hash;
        for (var i = 0; i < this.length; i++) {
          var character = this.charCodeAt(i);
          hash = ((hash << 5) - hash) + character;
          hash = hash & hash;
        }
        return hash;
      }
      let newKey;
      function rand() {
        var Randomtext;
        Randomtext = Math.random().toString(36).substring(2);
        return Randomtext
      };
      if (this.note !== '') {
        newKey = "title" + new String(rand()).hashCode()
        let myObj = {};
        let note = this.note;
        myObj[newKey] = { title: note, check1: false }
        testCase.child(item['.key']).child('title').update(myObj)
        return this.note = ''
      }
      else{
        alert('WTF!!!!!!')
      }
    },
    removeItem: function (item) {
      testCase.child(item['.key']).remove()
    }
  },
}
</script>

