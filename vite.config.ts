import { defineConfig } from 'vite'
import preactRefresh from '@prefresh/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: process.env.GH_PAGES === 'gh_pages'
    ? ''
    : '/',
    plugins: [
      preactRefresh()
    ],
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: `import { h, Fragment } from 'preact'`,
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    },
    define: {
      'process.env': process.env
    },
  }
})
