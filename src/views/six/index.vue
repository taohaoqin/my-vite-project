<template>
  <div id="container"></div>
  <div>
    <JsxNode />
  </div>
</template>

<script setup lang="jsx">
import { onMounted,  getCurrentInstance } from 'vue'
import Flowchart from "./flowchart"
function JsxNode () {
  return <div>jsx</div>
}
console.log(getCurrentInstance())
onMounted(() => {
  // 1. 使用渲染函数定义 Vue 组件

  const flowchart = new Flowchart('container',)
  flowchart.init(
    [
      {
        id: 'start',
        shape: 'start-node',
        component: <div style={ {
          width: '100%',
          height: '100%',
          background: '#52c41a',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
          boxShadow: '0 4px 12px rgba(82, 196, 26, 0.3)'
        }}>开始</div>,
        width: 80,
        height: 80,
        x: 360,
        y: 50
      }, {
        id: 'process1',
        shape: 'process-node1',
        component: <div style={{
          width: '100%',
          height: '100%',
          background: 'white',
          border: '2px solid #1890ff',
          borderRadius: '8px',
          padding: '16px',
          boxSizing: 'border-box',
          fontFamily: 'Arial, sans-serif',
          display: 'flex',
          flexDirection: 'column'
        }}>开发流程1</div>,
        width: 200,
        height: 100,
        x: 300,
        y: 180,
      },{
        id: 'process2',
        shape: 'process-node2',
        component: <div style={{
          width: '100%',
          height: '100%',
          background: 'white',
          border: '2px solid #1890ff',
          borderRadius: '8px',
          padding: '16px',
          boxSizing: 'border-box',
          fontFamily: 'Arial, sans-serif',
          display: 'flex',
          flexDirection: 'column'
        }}>开发流程2</div>,
        width: 200,
        height: 100,
        x: 300,
        y: 320,
      },{
        id: 'end',
        shape: 'end-node',
        component: <div style={{
          width: '100%',
          height: '100%',
          background: '#ff4d4f',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
          boxShadow: '0 4px 12px rgba(255, 77, 79, 0.3)'
        }}>结束</div>,
        width: 80,
        height: 80,
        x: 360,
        y: 460
      }
    ],
    [
       {
      source: 'start',
      target: 'process1',
       },
       {
      source: 'process1',
      target: 'process2',
       },
       {
       source: 'process2',
      target: 'end',
       }
    ]
  )
})



</script>

<style scoped>
#container {
  width: 100%;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>