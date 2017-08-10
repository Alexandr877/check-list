<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-btn primary dark slot="activator">add</v-btn>
      <v-card>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs2>
              <v-subheader>Idea of Test Case</v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-text-field name="input-7-1" label="Label Text" 
              multi-line v-model="note"></v-text-field>
            </v-flex>
            <v-flex xs2>
              <v-subheader>Precondition steps</v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-text-field name="input-7-1" label="Label Text"
               multi-line v-model="precondition"></v-text-field>
            </v-flex>
            <v-flex xs2>
              <v-subheader>Steps</v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-text-field name="input-7-1" label="Label Text"
               multi-line v-model="steps"></v-text-field>
            </v-flex>
            <v-flex xs2>
              <v-subheader>Expected Result</v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-text-field name="input-7-1" label="Label Text"
               multi-line v-model="description"></v-text-field>
            </v-flex>
            <v-flex xs2>
              <v-subheader>Comment</v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-text-field name="input-7-1" label="Label Text"
               multi-line v-model="comment"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn class="green--text darken-1" flat="flat"
           @click="removeItem(list)" 
           @click.native="dialog = false">Remove Case</v-btn>
          <v-btn class="green--text darken-1" flat="flat"
           @click.native="dialog = false">Cancel</v-btn>
          <v-btn class="green--text darken-1" flat="flat"
           @click="Update(list)" @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script src="../app/dialogTestCase">
</script>

