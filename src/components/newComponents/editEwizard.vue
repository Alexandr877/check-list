<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" width="600px">
            <v-btn icon dark slot="activator" class="blue--text text--lighten-2">
                <v-icon>edit</v-icon>
            </v-btn>
            <v-card>
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex xs6>
                            <v-text-field v-text="step.title"></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field name="input-7-1" label="enter new text of step" multi-line v-model="note"></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field v-text="step.info"></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field name="input-7-1" label="Edit information about step" multi-line v-model="description"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false" @click="Update(edit, i, step)">Save</v-btn>
                        <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Cancel</v-btn>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
import firebase from '../../../node_modules/firebase'
import Rx from '../../../node_modules/rxjs/Rx'
let app = firebase.database()
let testCase = app.ref('test')

export default {
    props: ['edit', 'i', 'step'],
    data() {
        return {
            dialog: false,
            test: true,
            note: '',
            description: ''
        }
    },
    methods: {
        Update: function (item, i, step) {
            if (this.note !== '') {
                console.log(item, i, step);
                let myObj = {};
                let description = this.description;
                let note = this.note;
                myObj = { title: note, check1: false, info: description }
                testCase.child(item['.key']).child('title').child(i).update(myObj)
                this.description = ''
                return this.note = ''
            }
            else {
                alert('WTF!!!!!!')
            }
        }
    }
}
</script>