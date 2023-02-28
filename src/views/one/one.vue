<template>
  <div>
    <img
      v-for="(val, key) in modules"
      :key="key"
      :src="modules[key].default"
    />
  </div>
</template>
<script setup>
// 自动匹配文件夹下的图片
// vite环境中不能使用require()  
// 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。
// 如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 或者用 import.meta.globEager
let modules = import.meta.glob("@/assets/image/**", { eager: true })
// let modules = import.meta.globEager("@/assets/image/**")

// 用此方法解析完整路径
// function resolvePath (url) {
//   return new URL(url, import.meta.url).href
// }

</script>
<style lang="scss" scoped>
img {
  width: 200px;
}
</style>
