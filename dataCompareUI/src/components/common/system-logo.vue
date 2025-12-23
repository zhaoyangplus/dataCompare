<script lang="ts" setup>
defineOptions({ name: 'SystemLogo' });
</script>

<template>
  <div class="logo-container">
    <img src="/DataCompareLogo.png" alt="Logo" class="logo-image" />
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* 移除width: 100%，让容器大小由父元素决定 */
  height: 100%;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Ensure consistent sizing and prevent layout shifts */
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.3s ease;
  /* Prevent font or language changes from affecting the image */
  font-family: sans-serif;
  line-height: 0;
}

.logo-image:hover {
  transform: scale(1.05);
}
</style>
