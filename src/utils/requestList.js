

class RequestList {
  map = {}
  list = []
  success = []
  fail = []
  constructor (fnlist, reTryTme = 3) {
    this.list = fnlist
    fnlist.forEach((fn, index) => {
      let _id = 'id_' + index
      this.map[_id] = fn
      fn.id = _id
      fn.hasTry = 0
      fn.reTry = reTryTme
    });
  }

  createPromise (fn) {
    return new Promise((resolve, reject) => {
      fn().then((res) => {
        resolve({
          id: fn.id,
          value: res
        })
      }).catch((err) => {
        reject({
          id: fn.id,
          value: err
        })
      })
    })
  }
  send () {
    return new Promise((resolve) => {
      let _que = []
      this.list.forEach((fn) => {
        _que.push(this.createPromise(fn))
      })
      const sendAllSettled = () => {
        Promise.allSettled(_que).then((results) => {
          _que = []
          results.forEach((result) => {
            if (result.status === 'fulfilled') {
              this.success.push(result.value.value)
            } else {
              let _id = result.reason.id
              let _fn = this.map[_id]
              if (_fn.hasTry < _fn.reTry) {
                _que.push(this.createPromise(_fn))
                _fn.hasTry++
              } else {
                this.fail.push(result.reason.value)
              }
            }
          })
          if (_que.length > 0) {
            sendAllSettled()
          } else {
            resolve({
              success: this.success,
              fail: this.fail
            })
          }
        })
      }
      sendAllSettled()
    })
  }
}

// function f1 () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('f1')
//       reject('f1');
//     }, 1000)

//   })
// }

// function f2 () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('f2')
//       resolve('f2');
//     }, 1000)
//   })
// }

// function f3 () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('f3')
//       resolve('f3');
//     }, 1000)
//   })
// }
// new RequestList([f1, f2, f3]).send().then((res) => {
//   console.log(res.success)
//   console.log(res.fail)
// })

export default RequestList