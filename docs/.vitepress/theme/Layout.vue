<template>
  <DefaultTheme.Layout>
    <slot />
  </DefaultTheme.Layout>
</template>

<script>
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme.Layout
}
</script>
