<template>
  <el-button
    type="primary"
    @click="expandAll"
  >展开</el-button>
  <el-button
    type="primary"
    @click="collapseAll"
  >收起</el-button>
  <el-button
    type="primary"
    @click="exportImage"
  >导出图片</el-button>
  <div id="jsmind"></div>

</template>
<script setup>
import JSMind from '@/utils/jsmind'
import { onMounted } from 'vue';
const mindData = [
  { topic: '标签', id: '1', isroot: true },
  { topic: '标签1', id: '2', parentid: '1' },
  { topic: '标签2', id: '3', parentid: '1' },
  { topic: '标签3', id: '4', parentid: '1' },
  { topic: '标签4', id: '5', parentid: '1' },
  { topic: '标签5', id: '6', parentid: '1' },
  { topic: '标签6', id: '7', parentid: '1' },
  { topic: '标签7', id: '8', parentid: '1' },
  { topic: '标签8', id: '9', parentid: '1' },
  { topic: '标签9', id: '10', parentid: '1' },
  { topic: '标签10', id: '11', parentid: '1' },
  { topic: '标签11', id: '12', parentid: '1' },
  { topic: '标签12', id: '13', parentid: '1' },
  { topic: '标签13', id: '14', parentid: '1' },
  { topic: '标签14', id: '15', parentid: '1' },
  { topic: '标签15', id: '16', parentid: '1' },
  { topic: '标签16', id: '17', parentid: '1' },
  { topic: '标签17', id: '18', parentid: '2' },
  { topic: '标签18', id: '19', parentid: '2' },
  { topic: '标签19', id: '20', parentid: '3' },
  { topic: '标签20', id: '21', parentid: '3' },
  { topic: '标签21', id: '22', parentid: '4' },
  { topic: '标签22', id: '23', parentid: '4' },
  { topic: '标签23', id: '24', parentid: '5' },
  { topic: '标签24', id: '25', parentid: '5' },
  { topic: '标签25', id: '26', parentid: '6' },
  { topic: '标签26', id: '27', parentid: '6' },
  { topic: '标签27', id: '28', parentid: '7' },
  { topic: '标签28', id: '29', parentid: '7' },
  { topic: '标签29', id: '30', parentid: '8' },
  { topic: '标签30', id: '31', parentid: '8' },
  { topic: '标签31', id: '32', parentid: '9' },
  { topic: '标签32', id: '33', parentid: '9' },
  { topic: '标签33', id: '34', parentid: '10' },
  { topic: '标签34', id: '35', parentid: '10' },
  { topic: '标签35', id: '36', parentid: '11' },
  { topic: '标签36', id: '37', parentid: '11' },
  { topic: '标签37', id: '38', parentid: '12' },
  { topic: '标签38', id: '39', parentid: '12' },
  { topic: '标签39', id: '40', parentid: '13' },
  { topic: '标签40', id: '41', parentid: '13' },
  { topic: '标签41', id: '42', parentid: '14' },
  { topic: '标签42', id: '43', parentid: '14' },
  { topic: '标签43', id: '44', parentid: '15' },
  { topic: '标签44', id: '45', parentid: '15' },
  { topic: '标签45', id: '46', parentid: '16' },
  { topic: '标签46', id: '47', parentid: '16' },
  { topic: '标签47', id: '48', parentid: '17' },
  { topic: '标签48', id: '49', parentid: '17' }
]

let jm = null

function expandAll () {
  jm.expandAll()
}
function collapseAll () {
  jm.collapseAll()
}

function exportImage () {
  jm.exportImage();
}

onMounted(() => {
  jm = new JSMind({
    container: 'jsmind',
    list: mindData
  })
  console.log(jm)
})
</script>
<style>
#jsmind {
  background: antiquewhite;
  width: 1000px;
  height: 900px;
}
jmexpander {
  line-height: 8px;
  font-size: 12px;
  width: 12px;
  height: 12px;
}
</style>