<template>
    <v-expansion-panel>
        <v-expansion-panel-content v-for="(myItem,i) in test" :key="i">
            <div class="headerN" slot="header">
                <v-layout row class="testspace">
                    <v-flex xs10>
                        <v-text-field class="titletext" name="input-7-3" label="Label Text" v-html="myItem.name" multi-line></v-text-field>
                    </v-flex>
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
                        <tbody v-for="(step,i) in myItem.title">
                            <tr>
                                <td v-html="step.name"></td>
                                <td v-html="step.over"></td>
                                <td v-html="step.step"></td>
                                <td v-html="step.info"></td>
                                <td v-html="step.comment"></td>
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
<style src='../stylus/testCase.css' lang="stylus">
</style>

