<template>

  <div>
    <img src="../../public/image/car.png" alt="">
  </div>
</template>

<script lang="ts" setup>
import {mainStore} from "../store";
const  store = mainStore();
//方式一 直接操作store
const handleClick1 = ()=>{
  store.count++
}

//方式一 $patch，传对象
const handleClick2= ()=>{
  //适合多数据状态改变
  store.$patch({
    count:store.count + 2,
    helloWorld: store.helloWorld === 'helloWold' ? 'abcde' :'xxxxx'
  })
}

//方式三 $patch，传函数
const handleClick3 = ()=>{
  store.$patch((state)=>{
    state.count += 100
    state.helloWorld = 'funny'
  })
}

//方式四 使用action
const handleClick4= ()=>{
  store.changeState()
}
</script>

<style scoped>

</style>
