import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'
import './custom.css' // your custom CSS

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Inject Vercel Analytics on the client side
    if (typeof window !== 'undefined') {
      inject()
    }

    // You can put page-specific logic here if needed
    // For now, this just keeps the custom CSS and default theme intact
  }
}
