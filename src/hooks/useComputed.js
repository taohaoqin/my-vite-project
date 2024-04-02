import { computed } from 'vue'
// 计算属性封装函数
export default function useComputed (fn) {
  const cache = new Map()
  function getCache (args) {
    return cache.get(JSON.stringify(args))
  }
  return function (...args) {
    const cacheResult = getCache(args)
    if (cacheResult) {
      return cacheResult
    }
    const result = computed(() => fn(...args))
    cache.set(JSON.stringify(args), result)
    return result
  }
}