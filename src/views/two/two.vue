<template>
  <p>count:{{count}}</p>
  <p>倍数:{{multiple}}</p>
  <div>
    <button @click="increase(10)">加一</button>
    <button @click="decrease(10)">减一</button>
  </div>
  <div class="container">
    <Watermark>
      <div>2222</div>
    </Watermark>
    <MyInput
      ref="inpRef"
      v-model="text"
    >
      <template #prepend>
        <el-button>Http://</el-button>
      </template>
      <template #append>
        <el-button>search</el-button>
      </template>
    </MyInput>
    <MySearch v-model="searchData" />
    <!-- <MultiLine :text="text2" /> -->
    <stereoscopicText />
    <FusionText />
  </div>
</template>


<script setup>
import Watermark from '@/components/Watermark.vue'
import MyInput from '@/components/MyInput.vue'
import MySearch from '@/components/MySearch.vue'
import MultiLine from '@/components/MultiLine.vue'
import stereoscopicText from '@/components/stereoscopicText.vue'
import FusionText from '@/components/FusionText.vue'
import useCount from "@/hooks/count.js"

import { onMounted, ref } from 'vue'
const text = ref('hello world')
const inpRef = ref(null)
const { count, multiple, increase, decrease } = useCount(10)
let text2 = ref('啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊')

// onMounted(() => {
//   console.log(inpRef.value)
//   inpRef.value.focus()
// })


const searchData = ref({
  value: '',
  value1: '',
  options: [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ]
})

</script>
<style scoped>
.container {
  width: 100%;
  height: 500px;
  /* background: red; */
}
</style>
