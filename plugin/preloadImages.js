import fg from 'fast-glob'
// 图片预加载插件
export default function (options) {
  let viteConfig;
  return {
    name: 'preloadImages',
    configResolved (resolvedConfig) {
      viteConfig = resolvedConfig;
    },
    transformIndexHtml (html, ctx) {
      const { dir, attrs = {} } = options
      const files = fg.sync(dir, {
        cwd: ctx.server?.config.publicDir || viteConfig.build.outDir,
      })
      const base = ctx.server?.config.base || viteConfig.base
      const images = files.map(file => base + file)
      return images.map(helf => {
        return {
          tag: 'link',
          attrs: {
            rel: 'prefetch',
            as: 'image',
            href: helf,
            ...attrs
          }
        }
      })
    }
  }
}