<template>
  <p class="hero-updates">
    Last Updated: {{ formatted }}
  </p>
</template>

<script setup>
import { useData } from 'vitepress'

const { page } = useData()
const formatted = page.value.lastUpdated
  ? new Date(page.value.lastUpdated).toLocaleDateString()
  : 'Unknown'
</script>

<style>
.hero-updates {
  text-align: center;
  margin: 1rem 0 2rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  opacity: 0.8;
}
</style>
