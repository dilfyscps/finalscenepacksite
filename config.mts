import { defineConfig } from 'vitepress'

export default defineConfig({
  cleanUrls: true,

  title: "DILFYSCPS",
  description: "Scenepack Directory",

  themeConfig: {
    logo: 'https://www.freepnglogos.com/uploads/cum-png/cum-white-splatter-clip-art-clkerm-vector-clip-art-9.png',

    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      { text: 'Home', link: '/' },
      {
        text: 'Scenepacks',
        collapsed: true,
        items: [
          { text: 'TV SHOWS', link: '/tvshows' },
          { text: 'MOVIES', link: '/movies' },
          { text: 'TIKTOKERS & OF CREATORS', link: '/tiktokers' },
          { text: 'CELEBS', link: '/celebs' },
          { text: 'TRAILERS', link: '/trailers' }
        ]
      },
      {
        text: 'Others',
        collapsed: true,
        items: [
          { text: 'AFFILIATES', link: '/affiliates' },
          { text: 'FAQ', link: '/faq' },
          { text: 'RULES', link: '/rules' }
        ]
      },
      {
        text: 'Socials',
        collapsed: true,
        items: [
          { text: 'DILFYSCPS IG', link: 'https://instagram.com/dilfyscps' },
          { text: 'CVMSCPS IG', link: 'https://instagram.com/cvmscps' },
          { text: 'DILFYSCPS TIKTOK', link: 'https://tiktok.com/@castelloaep' },
          { text: 'CVMSCPS TIKTOK', link: 'https://tiktok.com/@cvmscps' }
        ]
      }
    ],

    // --- Algolia search integration ---
    search: {
      provider: 'algolia',
      options: {
        appId: '58JO3XHRWM',                        // Your Algolia App ID
        apiKey: 'd60c88800c8830d60aec5a4948af7e95', // Search-only API Key
        indexName: 'posters',                       // Your Algolia index
        placeholder: 'Search scene packs...',
      }
    }
  }
})
