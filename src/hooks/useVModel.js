import { computed } from "vue";
// vue3.4已经支持了 defineModel也正式转正了。它可以简化父子组件之间的双向绑定，是目前官方推荐的双向绑定实现方式
export default function useVModel (props, propName, emit) {
  const model = computed({
    get () {
      const proxy = new Proxy(props[propName], {
        get (target, key) {
          return Reflect.get(target, key)
        },
        set (target, key, value) {
          emit('update:' + propName, {
            ...target,
            [key]: value
          })
          return true
        }
      })
      return proxy
    },
    set (val) {
      emit('update:' + propName, val)
    }
  })
  return model
}