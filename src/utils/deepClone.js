
function deepClone (value) {
  const cache = new WeakMap()
  function _deepClone (value) {
    if (typeof value !== 'object' || value === null) {
      return value
    }
    if (cache.has(value)) {
      return cache.get(value)
    }
    const result = Array.isArray(value) ? [] : {}
    Object.setPrototypeOf(result, Object.getPrototypeOf(value))
    cache.set(value, result)
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        result[key] = _deepClone(value[key])
      }
    }
    return result
  }
  return _deepClone(value)
}

export { deepClone }
