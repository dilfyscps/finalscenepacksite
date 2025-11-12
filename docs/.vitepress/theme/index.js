import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import './custom.css' // your custom CSS

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Inject Vercel Analytics (client-side only)
    if (typeof window !== 'undefined') {
      inject()
    }

    // Register Vercel Speed Insights as a Vue component
    app.component('SpeedInsights', SpeedInsights)

    // You can put page-specific logic here if needed
    // For now, this just keeps the custom CSS and default theme intact
  }
}
