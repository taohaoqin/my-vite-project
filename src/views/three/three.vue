<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="Name"
        width="180"
      />
      <el-table-column
        prop="num"
        label="Num"
        width="180"
      />
      <el-table-column
        prop="price"
        label="Price"
        width="180"
      />
      <el-table-column label="Address">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="scope.row.num++"
          >+</el-button>
          <span>{{ computedPrice(scope.row)}}</span>
          <el-button
            type="primary"
            size="small"
            @click="scope.row.num--"
          >-</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import useComputed from '@/hooks/useComputed'
const tableData = reactive([
  {
    name: 'a',
    num: '2',
    price: '3',

  },
  {
    name: 'b',
    num: '3',
    price: '5',
  },
  {
    name: 'c',
    num: '3',
    price: '6',
  },
  {
    name: 'd',
    num: '3',
    price: '7',
  },
])

function totalPrice (row) {
  console.log('计算')
  return row.price * row.num
}
const computedPrice = useComputed(totalPrice)
</script>