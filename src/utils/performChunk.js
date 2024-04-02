function performChunk (datas, taskHandler) {
  if (typeof datas === 'number') {
    datas = { length: datas }
  }
  if (datas.length === 0) {
    return
  }
  let i = 0
  function _run () {
    if (i >= datas.length) {
      return
    }
    // 一个渲染帧中 空闲时间开启分片
    if (window.requestIdleCallback === void 0) {
      // 用requestAnimationFrame实现 requestIdleCallback
      requestAnimationFrame(() => {
        const time = performance.now()
        while (performance.now() - time < 16 && i < datas.length) {
          taskHandler(i, datas[i])
          i++
        }
        _run()
      })
    } else {
      requestIdleCallback((idle) => {
        while (idle.timeRemaining() > 0 && i < datas.length) {
          // 处理一部分数据
          taskHandler(i, datas[i])
          i++
        }
        _run()
      })
    }
  }
  _run()

}

export { performChunk }