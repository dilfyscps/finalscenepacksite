import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://use.typekit.net/ddn4vkj.css' // Your Adobe font link
    document.head.appendChild(link)
  }
}
