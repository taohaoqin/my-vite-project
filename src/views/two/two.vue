<template>
  <p>count:{{count}}</p>
  <p>倍数:{{multiple}}</p>
  <div>
    <button @click="increase(10)">加一</button>
    <button @click="decrease(10)">减一</button>
  </div>
</template>
<script setup>
import useCount from "@/hooks/count.js"
const { count, multiple, increase, decrease } = useCount(10)
</script>