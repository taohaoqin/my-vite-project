<template>
  <div ref="el"></div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
const emit = defineEmits(["click"])
const props = defineProps({
  url: String,
  type: {
    type: String,
    default: 'svg'
  }
})
defineExpose({
  getSvgDom
})
const el = ref(null)
let $el = null
let loading = false
function domParser(dom) {
  return new DOMParser().parseFromString(dom, "image/svg+xml");
}
function svgReplace(dom) {
  const svg = domParser(dom)
  $el = svg.firstChild
  el.value.replaceWith($el)
  el.value = $el
  mouseEvent()
  loading = true
}

function mouseEvent() {
  el.value.onclick = function () {
    // svg.firstChild.onmouseenter = function () {
    //   this.style.fill = "red";
    //   const children = this.getElementsByTagName('path')
    //   for (let i of children) {
    //     i.style.fill = "red";
    //   }
    // }
    emit('click')
  }
}

function getSvgDom() {
  if (loading) {
    return el.value
  }
}

async function init() {
  if (props.url.includes('<svg')) {
    // 字符串转换成dom
    svgReplace(props.url)
  } else if (props.url.includes('.svg')) {
    if (props.type === 'img') {
      // 路径的形式只能以图片的形式展示
      const svg = document.createElement("img");
      svg.src = props.url
      $el = svg
      el.value.replaceWith(svg)
      el.value = $el
    } else {
      fetch(props.url).then(res => {
        return res.text()
      }).then(res => {
        svgReplace(res);
      }).catch(e => {
        loading = false
        console.log('svg文件加载失败')
      })
    }
  }
}

watch(() => props.url, () => {
  init()
})

onMounted(() => {
  init()
})

</script>