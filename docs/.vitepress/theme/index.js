import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Hero action buttons and analytics (your previous code)
    if (typeof window !== 'undefined') {
      import('@vercel/analytics').then(({ inject }) => inject()).catch(() => {})
      import('@vercel/speed-insights').then(({ injectSpeedInsights }) => injectSpeedInsights()).catch(() => {})
    }

    // Last Updated logic
    app.mixin({
      computed: {
        lastUpdated() {
          const pagePath = this.$page?.filePathRelative
          if (!pagePath) return 'unknown'

          // Use Vite import.meta.glob to get timestamps
          const modules = import.meta.glob('/docs/**/*.md', { eager: true })
          const file = modules[`/docs/${pagePath}`]
          if (!file || !file.mtime) return 'unknown'
          const date = new Date(file.mtime)
          return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
        }
      }
    })
  }
}
