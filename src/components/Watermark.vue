<template>
  <div
    class="watermark-container"
    ref="parent"
  >
    <slot></slot>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: '水印组件'
  },
  fontSize: {
    type: Number,
    default: 40
  },
  gap: {
    type: Number,
    default: 40
  }
})

const bg = computed(() => {
  const canvas = document.createElement('canvas')
  const devicePixelRatio = window.devicePixelRatio || 1
  const fontSize = props.fontSize * devicePixelRatio
  const font = fontSize + 'px serif'
  const ctx = canvas.getContext('2d')
  const { width } = ctx.measureText(props.text)
  const canvasSize = Math.max(100, width) + props.gap * devicePixelRatio
  canvas.width = canvasSize
  canvas.height = canvasSize
  ctx.translate(canvas.width / 2, canvas.height / 2)
  ctx.rotate((Math.PI / 180) * -45)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = font
  ctx.fillText(props.text, 0, 0)
  return {
    base64: canvas.toDataURL(),
    size: canvasSize / devicePixelRatio
  }
})

const parent = ref(null)
let div

function resetWatermark () {
  if (!parent.value) {
    return
  }
  if (div) {
    div.remove()
  }
  const { base64, size } = bg.value
  div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.backgroundImage = `url(${base64})`
  div.style.backgroundSize = `${size}px ${size}px`
  div.style.backgroundRepeat = 'repeat'
  div.style.zIndex = 9999
  div.style.pointerEvents = 'none'
  div.style.inset = 0
  parent.value.appendChild(div)
}
// 监听dom的变化
const ob = new MutationObserver((entries) => {
  for (const entry of entries) {
    for (const node of entry.removedNodes) {
      if (div === node) {
        resetWatermark()
      }
    }
    if (entry.target === div) {
      resetWatermark()
    }
  }
})
onMounted(() => {
  resetWatermark()
  ob.observe(parent.value, {
    childList: true,
    subtree: true,
    attributes: true
  })
})
onUnmounted(() => {
  ob.disconnect()
})
</script>
<style scoped>
.watermark-container {
  height: 100%;
  position: relative;
}
</style>