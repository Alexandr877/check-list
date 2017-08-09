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
                    <infoewizard class="alwaysleft" v-bind:info="step, i"></infoewizard>
                    <div class="alwaysleft">
                        <v-btn icon class="blue--text text--lighten-2" @click="changeColorResset(item, i)">
                            <v-icon>refresh</v-icon>
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
            <v-btn icon class="red--text text--lighten-2" @click="resetData()"><v-icon>refresh</v-icon></v-btn>
    </v-expansion-panel>
</template>
 <script src='../app/ewizard.js'>
</script>
<style src='../stylus/ewizard.css' lang="stylus">
  @import '../../stylus/main'
</style>