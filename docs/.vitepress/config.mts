import { defineConfig } from 'vitepress'

export default defineConfig({
  cleanUrls: true,
  title: 'DILFYSCPS',
  description: 'Searchable ScenePack Directory',
  
  themeConfig: {
    search: {
      provider: 'local' // VitePress built-in search
    }
  }
})
