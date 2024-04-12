<template>
  <h1>{{ text }}</h1>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '立体文字'
  }
})
</script>
<style>
h1 {
  font-size: 5em;
  text-shadow: -1px 1px #bbb, -2px 2px #bbb, -3px 3px #bbb, -4px 4px #bbb,
    -5px 5px #bbb, -10px 10px #0008;
}
</style>