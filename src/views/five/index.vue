<template>
  <div>
    <h1>This is the Five page</h1>
    <el-button
      type="primary"
      @click="handleClick"
    >Click me</el-button>
  </div>
</template>
<script setup>
import openDialog from './openDialog'
import { ref, getCurrentInstance, onUnmounted } from 'vue'
const instance = getCurrentInstance()
// 定义公共方法
function handleClick () {
  openDialog(instance)
  // 调用公共方法打开el-dialog
  // openDialog()
}
// onUnmounted(() => {
//   console.log('组件销毁')
// })


// </script>
<style>
</style>
