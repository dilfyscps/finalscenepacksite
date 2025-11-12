import DefaultTheme from 'vitepress/theme'
import './custom.css'

// Only import these dynamically on the client side
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      // Dynamically import to avoid breaking SSR
      import('@vercel/analytics').then(({ inject }) => {
        inject()
      }).catch(() => {})

      // Optional: Speed Insights (Vue)
      import('@vercel/speed-insights').then(({ injectSpeedInsights }) => {
        injectSpeedInsights()
      }).catch(() => {})
    }
  }
}
