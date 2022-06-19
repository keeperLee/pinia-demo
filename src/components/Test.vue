<template>
  <p></p>
  <div>{{store.helloWorld}}</div>
  <div>{{store.count}}</div>
  <p></p>
  <hr>
  <p></p>
  <div>{{helloWorld}}</div>
  <div>{{count}}</div>
  <hr>
  <p></p>
  <div>{{store.phoneHidden}}</div>
</template>

<script lang="ts" setup>
import {mainStore} from "../store";
import {storeToRefs} from "pinia";
const  store = mainStore();
const {helloWorld, count} = storeToRefs(store)

</script>

<style scoped>

</style>
