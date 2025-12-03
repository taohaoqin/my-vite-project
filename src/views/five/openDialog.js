import { ElDialog, ElButton } from 'element-plus'
import { createApp, h, ref } from 'vue'

let app = null
const visible = ref(true)
function openDialog (page) {
  console.log(page)
  if (app) {
    visible.value = true
    return
  }
  setupPageLifecycle(page)
  const dialog = {
    setup () {
      return () => h(ElDialog, {
        title: '弹框',
        modelValue: visible.value,
        onClose: closeDialog,
      }, {
        default: () => h(page.vnode),
        footer: () => [h(ElButton, { type: 'primary', onClick: closeDialog }, () => '确认'), h(ElButton, { onClick: closeDialog }, () => '取消')]
      })
    }
  }

  const div = document.createElement('div')
  document.body.appendChild(div)
  app = createApp(dialog)
  app.mount(div)
  console.log(app)
}

function closeDialog () {
  visible.value = false
}
// 监听页面组件生命周期
function setupPageLifecycle (vm) {
  // 使用组件的生命周期
  const um = vm.um || []// 组件销毁钩子
  function umount () {
    console.log('组件销毁')
    app.unmount()
    app = null
  }
  um.push(umount)
  vm.um = um
}

export default openDialog