import axios from 'axios'

let myRequest = (function () {
  let instance = axios.create({
    baseURL: 'http://localhost:3000/api', // api base url
    // timeout: 10000   // request timeout   
  })
  let mem = {}
  let hasRequest = []
  // 职责链模式 模块是否有缓存 缓存数据是否存在 请求是否已经提交 最终请求 最终处理 
  // data 搭载数据
  // go 是否下一步
  // cache 缓存数据
  // noRequest 没有请求
  // finalRequest 最终请求
  // finalHandle 最终处理
  // {type: 'then'/'catch' , go: true/false, data: any}
  return function (config) {
    let url = config.url
    let promise = Promise.resolve()
    function cache (result = { go: true }) {
      if (mem[url]) {
        return Promise.resolve({ go: false, type: 'then', data: mem[url] })
      } else {
        return Promise.resolve({ go: true, type: 'then', data: null })
      }
    }
    function noRequest (result = { go: true }) {
      if (hasRequest.includes(url)) {
        return Promise.reject({ go: false, type: 'catch', data: '请求已经提交' })
      } else {
        hasRequest.push(url)
        return Promise.resolve({ go: true, type: 'then' })
      }
    }
    async function finalRequest (result = { go: true }) {
      let res = await instance(config)
      return Promise.resolve({ go: true, type: 'then', data: res.data })
    }
    function finalHandle (result = { go: true }) {
      if (result.type === 'catch') {
        return Promise.reject(result.data) // 抛出错误
      }
      hasRequest.splice(hasRequest.indexOf(url), 1)
      mem[url] = result.data
      return Promise.resolve(result.data)
    }
    let _handleArr = [cache, noRequest, finalRequest, finalHandle]
    while (_handleArr.length) {
      let handle = _handleArr.shift()
      function _finalHandle (result = { go: true }) {
        if (!result.go) {
          return Promise.resolve(result)
        }
        return handle.call(this, result)
      }
      promise = promise.then(_finalHandle)
    }
    return promise
  }
})()

// let myRequest = (function () {
//   let instance = axios.create({
//     baseURL: 'http://localhost:3000/api',
//     timeout: 10000   // request timeout   
//   })
//   let mem = {}
//   let hasRequest = []
//   return function (config) {
//     let url = config.url
//     if (mem[url]) {
//       return Promise.resolve(mem[url])
//     } else {
//       if (hasRequest.includes(url)) {
//         return Promise.reject({ msg: '请求已经提交' })
//       }
//       hasRequest.push(url)
//       return instance(config).then(res => {
//         if (hasRequest.includes(url)) {
//           hasRequest.splice(hasRequest.indexOf(url), 1)
//         }
//         mem[url] = res.data
//         return res.data
//       })
//     }
//   }
// })()

export default myRequest