<template>
  <div class="fusion-text">
    <span class="text">精准而优雅</span>
  </div>
</template>
<style lang="scss" scoped>
.fusion-text {
  text-align: center;
  background: #000;
  filter: contrast(10);
  .text {
    font-size: 100px;
    color: #fff;
    animation: expand 3s forwards;
  }
}
@keyframes expand {
  from {
    letter-spacing: -100px;
    filter: blur(5px);
  }
  to {
    letter-spacing: 0px;
    filter: blur(2px);
  }
}
</style>