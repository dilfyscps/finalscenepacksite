import DefaultTheme from 'vitepress/theme'
import './custom.css' // your custom CSS

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // You can put page-specific logic here if needed
    // For now, this just keeps the custom CSS and default theme intact
  }
}
