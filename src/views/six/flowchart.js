import { Graph } from '@antv/x6'
import { register } from '@antv/x6-vue-shape'
// import { createVNode } from 'vue'
// 判断是不是dom元素
function isElement (obj) {
  return obj && obj.nodeType === 1;
}

const line = {
  stroke: '#1890ff',
  strokeWidth: 2,
  targetMarker: 'block'
}

class Flowchart {
  constructor (id, options = {}) {
    this.graph = new Graph({
      container: isElement(id) ? id : document.getElementById(id),
      width: options.width || 800,
      height: options.height || 600,
      background: {
        color: options.background || '#f5f5f5'
      }
    })

  }
  addNode (options) {
    this.graph.addNode(options)
  }
  init (list, edges) {
    list.forEach(item => {
      const obj = {
        shape: item.shape,
        width: item.width,
        height: item.height,
        component: item.component,
      }
      register(obj)
      this.addNode({
        id: item.id,
        x: item.x,
        y: item.y,
        shape: item.shape,
        ...item
      })
      edges.forEach(edge => {
        this.graph.addEdge({
          source: edge.source,
          target: edge.target,
          attrs: edge.attrs || line
        })
      })
    })
    this.graph.centerContent()
  }
}

export default Flowchart;