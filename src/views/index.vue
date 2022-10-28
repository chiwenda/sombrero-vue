<!--
 * @Description: 首页
 * @Author: chiwenda
 * @Date: 2022-10-24 23:07:14
 * @LastEditTime: 2022-10-24 23:56:55
 * @LastEditors: chiwenda
 * @FilePath: /go-sombrero/Users/cwd/Documents/project/vue/sombrero-vue/src/views/index.vue
-->
<template>
  <v-card class="overflow-hidden">
    <v-app-bar absolute color="#6A76AB" dark dense>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
};
</script>
    