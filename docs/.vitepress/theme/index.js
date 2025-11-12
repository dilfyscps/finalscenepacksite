import DefaultTheme from 'vitepress/theme'
import PosterCard from './components/PosterCard.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('PosterCard', PosterCard)
  }
}
