import fg from 'fast-glob'
export default function (options) {
  let assetsImages = []
  const { dir, attrs = {} } = options
  return {
    name: 'preload-scr-images',
    generateBundle (_, bundle) {
      const values = Object.values(bundle)
      // 遍历所有打包出来的文件
      values.forEach(i => {
        // 判断是否是png、jpg、jpeg、gif格式的图片
        if (i.type === 'asset' && /\.(png|jpg|jpeg)$/.test(i.fileName)) {
          assetsImages.push(i.fileName)
        }
      })
      console.log('assetsImages111', assetsImages)
    },
    transformIndexHtml (html, ctx) {
      let images = ''
      if (ctx.server) {
        const files = fg.sync(dir)
        const base = ctx.server?.config.base
        images = files.map(file => base + file)
      } else {
        images = assetsImages
      }
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
  };
}