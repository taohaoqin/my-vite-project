<template>
  <div class="my-input">
    <el-input
      ref="elInp"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in $slots"
        #[name]="scopedData"
      >
        <slot
          :name="name"
          v-bind="scopedData"
        ></slot>
      </template>
    </el-input>
  </div>
</template>
<script>
// 组件的二次封装 把原来组件的插槽和属性都设置上
export default {
  mounted () {
    const inp = this.$refs.elInp
    for (const key in inp) {
      this[key] = inp[key]
    }
  }
}
</script>
<style scoped>
.my-input {
  transition: 0.3s;
}
.my-input:hover,
.my-input:focus-within {
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
}
</style>