<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent>
            <v-btn primary small dark slot="activator">Create new check list</v-btn>
            <v-card>
                <v-card-title>
                    <span class="headline">New Check List</span>
                </v-card-title>
                <v-card-text>
                    <v-text-field label="Check List Header" v-model="testD.name" required></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                    <v-btn class="blue--text darken-1" flat @click="addCase" @click.native="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
import firebase from '../../../node_modules/firebase'
let db = firebase.database()
let cobaltB = db.ref('cobalt')
export default {
    data() {
        return {
            testD: {
                name: ''
            },
            dialog: false
        }
    },
    firebase: {
        test: cobaltB
    },
    methods: {
        addCase: function () {
            if (this.testD.name !== '') {
                cobaltB.push(this.testD)
                return this.testD.name = ''
            }
            alert('WTF!!!!')
        }
    }
}
</script>
