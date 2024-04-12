function randomColor () {
  // 产生随机颜色
  return '#' + Math.random().toString(16).substring(2, 8).padEnd(6, '0')
}

function randomString (len = 6) {
  return Math.random().toString(36).substring(2, 2 + len).padEnd(len, '0')
}

export {
  randomColor,
  randomString
}