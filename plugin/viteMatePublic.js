
export default () => {
  let command
  return {
    name: 'my-config',
    configResolved(resolvedConfig) {
      // 存储最终解析的配置
      command = resolvedConfig.command
      console.log(command, 'command')
    },
    transform(code, id) {
      // if (command === 'build') { // 此处可以做一下代码的转换

      // }
      return code;
    },
    // buildEnd() {
    //   console.log('Build finished!');
    // }
  }
}