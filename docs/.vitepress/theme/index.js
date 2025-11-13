import DefaultTheme from 'vitepress/theme'
import './custom.css' // your custom CSS

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Keep default theme logic
    // You can add page-specific logic here if needed later
  }
}
