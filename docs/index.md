---
layout: home
hero:
  name: DILFYSCPS CVMSCPS
  text: Offical Scenepack Directory
  tagline: Your favorite website for high-quality Male Scenepacks
  image:
  actions:
    - theme: brand
      text: Affiliates
      link: /affiliates/
    - theme: alt
      text: Socials
      link: /socials/
      
features:
  - icon: 🧔
    title: DILFYSCPS
    details: All Scenepack links.
    link: /dilfyscps
  - icon: 🥛
    title: CVMSCPS
    details: Not Done Yet!
---

<!-- Dismissible Fixed Banner -->
<div v-if="showBanner" class="announcement" :class="{ hide: !showBanner }">
  ALL SCENEPACKS FOR DILFYSCPS ARE BACK
  <button @click="dismissBanner">×</button>
</div>

<script setup>
import { ref, onMounted } from 'vue'

const showBanner = ref(true)

const dismissBanner = () => {
  showBanner.value = false
  localStorage.setItem('announcementDismissed', 'true')
}

onMounted(() => {
  if (localStorage.getItem('announcementDismissed') === 'true') {
    showBanner.value = false
  } else {
    // Auto-hide after 10 seconds
    setTimeout(() => {
      showBanner.value = false
    }, 10000)
  }
})
</script>

<style>
.announcement {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #12365dff; /* Blue color */
  color: white;
  text-align: center;
  padding: 0.75rem 1rem;
  font-weight: bold;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Slide up and fade effect when hiding */
.announcement.hide {
  transform: translateY(-100%);
  opacity: 0;
}

.announcement button {
  position: absolute;
  right: 1rem;
  top: 0.2rem;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
}

.site-content {
  margin-top: 3rem; /* Push page content below banner */
}
</style>
