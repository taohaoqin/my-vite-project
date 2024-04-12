<template>
  <el-select
    v-model="model.value"
    class="m-2"
    placeholder="Select"
    style="width: 240px"
  >
    <el-option
      v-for="item in modelValue.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-input v-model="model.value1" />
</template>
<script setup>
import useVModel from '@/hooks/useVModel'
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emit)
</script>