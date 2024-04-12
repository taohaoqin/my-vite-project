<template>
  <div>
    <!-- <img
      v-for="(val, key) in modules"
      :key="key"
      :src="modules[key].default"
    /> -->
    <img
      v-for="(val) in imgs"
      :key="val"
      :src="val"
    />

    <svgIcon
      :url="url"
      @click="handleClick"
      ref="svg"
    />
    <svgIcon
      :url="svgImg"
      type="img"
    />
    <svgIcon :url="viteImg" />
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from "vue";
import svgIcon from '@/components/svgIcon.vue'

import svgImg from '@/assets/vue.svg'
import viteImg from '/vite.svg?raw'

let url = ref(svgImg)
const svg = ref(null)

// setTimeout(() => {
//   url.value = viteImg
// }, 2000)

// 自动匹配文件夹下的图片
// vite环境中不能使用require()  安装了@rollup/plugin-commonjs或者vite-plugin-commonjs都不行 放弃了
// 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。
// 如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 或者用 import.meta.globEager('废弃')
// let modules = import.meta.glob("@/assets/image/**", { eager: true })
// console.log(import.meta.resolve('./'))
// let modules = import.meta.globEager("@/assets/image/**")

function getPublic() { // 动态加载public文件夹下的图片方法(打包后不可修改)
  let imgs = import.meta.glob("/public/img/*.{png,jpg,jpeg}")
  const list = []
  for (let i in imgs) {
    list.push(`${import.meta.env.BASE_URL}${i.replace('/public/', '')}`)
  }
  return list
}
let imgs = getPublic()


// 用此方法解析完整路径
// function resolvePath (url) {
//   return new URL(url, import.meta.url).href
// }
function handleClick() {
  console.log('鼠标点击事件')
}

onMounted(() => {
  // console.log(svg.value.getSvgDom())
  console.log(import.meta.env, '当前环境')
})

</script>
<style lang="scss" scoped>
img {
  width: 50px;
}
</style>
