import DefaultTheme from 'vitepress/theme'
import './custom.css'
import LastUpdated from './components/LastUpdated.vue'

export default {
  ...DefaultTheme,
  lastUpdated: true,
  enhanceApp({ app }) {
    app.component('LastUpdated', LastUpdated)

    if (typeof window !== 'undefined') {
      import('@vercel/analytics').then(({ inject }) => inject()).catch(() => {})
      import('@vercel/speed-insights').then(({ injectSpeedInsights }) => injectSpeedInsights()).catch(() => {})
    }
  }
}
