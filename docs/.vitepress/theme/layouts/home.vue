<template>
  <div :class="['vp-page', frontmatter.customPageClass]">
    <!-- Hero Section -->
    <section v-if="frontmatter.hero" class="VPHomeHero">
      <h1 class="name">{{ frontmatter.hero.name }}</h1>
      <p class="tagline">{{ frontmatter.hero.tagline }}</p>
      <div class="actions">
        <VPButton
          v-for="(action, index) in frontmatter.hero.actions"
          :key="index"
          :theme="action.theme"
          :to="action.link"
        >
          {{ action.text }}
        </VPButton>
      </div>
    </section>

    <!-- Markdown Content -->
    <Content />
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import VPButton from '@theme/components/VPButton.vue'

const { frontmatter } = useData()
</script>
