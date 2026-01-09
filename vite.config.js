import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'; // 进行打包分析
import AutoImport from 'unplugin-auto-import/vite' // 自动导入
import Components from 'unplugin-vue-components/vite' // 自动导入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 自动导入
// import preloadImages from './plugin/preloadImages'
// import preloadSrcImages from './plugin/preloadSrcImages'
// import viteMatePublic from './plugin/viteMatePublic'

// https://vitejs.dev/config/

function pathResolve (dir) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // preloadImages({
    //   dir: 'img/*.{jpg,jpeg,png,gif}',
    //   attrs: {
    //     rel: 'prefetch',
    //   }
    // }),

    // preloadSrcImages({
    //   dir: 'src/assets/**/*.{jpg,jpeg,png}',
    //   attrs: {
    //     rel: 'prefetch',
    //   }
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

    // viteMatePublic()
    // visualizer({
    //   emitFile: false,// 设置会true 分析文件会放入打包目录中
    //   title: '打包分析',
    //   filename: "report.html",//生成分析网页文件名
    //   open: false,//在默认用户代理中打开生成的文件
    //   gzipSize: true,//从源代码中收集 gzip 大小并将其显示在图表中
    //   brotliSize: true,//从源代码中收集 brotli 大小并将其显示在图表中
    // })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src')
      },
    ],
    dedupe: ['vue']
  },
  // base: './',
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: id => {
          // 将element中的代码单独打包
          if (id.includes('node_modules/element-plus')) {
            return 'element'
          }
          // 将node_modules中的代码单独打包
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      },
    },

    // outDir: 'output',
    // assetsDir: 'static', // 静态资源的存放路径
    cssCodeSplit: true, // CSS 代码拆分
    assetsInlineLimit: 4096 * 10, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    chunkSizeWarningLimit: 1024 // 规定 触发警告的 chunk 大小。（以 kbs 为单位）
  },
  server: {
    host: true,
  }
})
