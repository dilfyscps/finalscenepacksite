<template>
  <div class="poster-card">
    <img :src="img" :alt="name" />
    <div class="poster-info">
      <p class="poster-name">{{ name }}</p>
      <p>{{ description }}</p>
      <a class="poster-btn" :href="link" target="_blank">Open Mega</a>
      <span class="hidden-text">{{ name }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  img: String,
  link: String,
  description: String
})
</script>
