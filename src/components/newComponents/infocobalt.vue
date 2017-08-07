<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" width="600px">
            <v-btn icon dark slot="activator" class="blue--text text--lighten-2">
                <v-icon>info_outline</v-icon>
            </v-btn>
            <v-card>
                <v-card-title>{{info.de}}
                </v-card-title>
                <v-card-text v-html="info.info"></v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
import firebase from '../../../node_modules/firebase'
let app = firebase.database()
let testCase = app.ref('cobalt')
export default {
    props: ['info','i'],
    data() {
        return {
            dialog: false,
            test: true,
            note: ''
        }
    }
}
</script>