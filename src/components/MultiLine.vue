<template>
  <div class="multiline-container">
    <p>{{ text }}</p>
    <p class="eraser">
      <span
        class="text restart"
        ref="textdom"
      >
        {{ text }}
      </span>
    </p>
  </div>
</template>
<script setup>
import { nextTick, onMounted, ref, watch } from "vue";
// 多行渐变组件
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  frequency: {
    type: Number,
    default: 50
  }
})

const time = 5
const textdom = ref()

// 重新开始动画
function restartAnimation () {
  textdom.value.classList.remove('restart')
  void textdom.value.offsetWidth // 强制重绘
  textdom.value.classList.add('restart')
}

function setFrequency (v) {
  const newTime = parseInt(v.length / props.frequency) || 1
  textdom.value.style.setProperty('--s', newTime + 's')
}
watch(() => props.text, (newVal, oldVal) => {
  setFrequency(newVal)
  restartAnimation()
})


onMounted(() => {
  setFrequency(props.text)
})
</script>
<style lang="scss" >
.multiline-container {
  --bgcolor: #fff;
  background: var(--bgcolor);
  width: 100%;
  margin: 1em auto;
  text-indent: 2em;
  line-height: 2;
  font-family: Courier, monospace;
  position: relative;
  .eraser {
    position: absolute;
    inset: 0;
    top: -1px;
    .text {
      --p: 0%;
      --s: 5s;
      background: linear-gradient(
        to right,
        #0000 var(--p),
        var(--bgcolor) calc(var(--p) + 30px)
      );
      color: transparent;
    }
    .restart {
      animation: erase var(--s) linear forwards;
    }
  }
}
@property --p {
  syntax: "<percentage>";
  initial-value: 0%;
  inherits: false;
}

@keyframes erase {
  to {
    --p: 100%;
  }
}
</style>