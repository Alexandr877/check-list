<template>
    <v-expansion-panel>
        <v-expansion-panel-content v-for="(myItem,i) in test" :key="i">
            <div class="headerN" slot="header" @click="changeSort(myItem, i)">
                <v-layout row class="testspace">
                    <v-flex xs10>
                        <v-text-field class="titletext" name="input-7-3" label="Label Text" v-html="myItem.name" multi-line></v-text-field>
                    </v-flex>
                    <div class="alwaysleft">
                        <v-btn icon class="blue--text text--lighten-2" @click="setUser(myItem, test)">
                            <v-icon>rowing</v-icon>
                        </v-btn>
                    </div>
                </v-layout>
            </div>
            <div>
                <v-layout row class="testspace">
                    <table class="table is-striped">
                        <thead>
                            <tr>
                                <th>Name/Idea</th>
                                <th>Precondition Steps</th>
                                <th>Steps</th>
                                <th>Expected Result</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in test">
                            <tr v-for="(step,i) in item.title">
                                <td>{{step.name}}</td>
                                <td>{{step.over}}</td>
                                <td>{{step.step}}</td>
                                <td>{{step.info}}</td>
                                <td>{{step.comment}}</td>
                            </tr>
                        </tbody>
                    </table>
                </v-layout>
            </div>
            <testCaseDialog v-bind:list="myItem"></testCaseDialog>
        </v-expansion-panel-content>
        <addTestCase></addTestCase>
    </v-expansion-panel>
</template>
<script src="../app/testCase.js">
</script>
<style>
</style>

