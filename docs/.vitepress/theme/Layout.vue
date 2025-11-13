<!-- .vitepress/theme/Layout.vue -->
<template>
  <div>
    <!-- Dismissible Announcement -->
    <div v-if="showBanner" class="announcement">
      🎉 New Feature Released! <a href="/docs/new-feature">Check it out</a>
      <button @click="dismissBanner">×</button>
    </div>

    <!-- Site content -->
    <Content />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive flag for showing banner
const showBanner = ref(true)

// Persist dismiss state in localStorage
const dismissBanner = () => {
  showBanner.value = false
  localStorage.setItem('announcementDismissed', 'true')
}

// Check localStorage on mount
onMounted(() => {
  if (localStorage.getItem('announcementDismissed') === 'true') {
    showBanner.value = false
  }
})
</script>

<style>
.announcement {
  position: relative;
  background-color: #fffae6;
  color: #333;
  text-align: center;
  padding: 0.5rem 1rem;
  font-weight: bold;
  z-index: 1000;
}
.announcement a {
  text-decoration: underline;
  margin-left: 0.5rem;
}
.announcement button {
  position: absolute;
  right: 0.5rem;
  top: 0.2rem;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
