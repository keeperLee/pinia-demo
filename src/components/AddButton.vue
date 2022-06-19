<template>
  <div ><button @click="handleClick">添加</button></div>
</template>

<script lang="ts" setup>
import {mainStore} from "../store";
const  store = mainStore();

const handleClick = ()=>{
  store.count++
}
</script>

<style scoped>

</style>
