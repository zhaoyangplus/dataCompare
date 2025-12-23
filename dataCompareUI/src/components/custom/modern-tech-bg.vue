<script lang="ts" setup>
import { computed } from 'vue';
import { getPaletteColorByNumber } from '@sa/color';

defineOptions({ name: 'ModernTechBg' });

interface Props {
  themeColor: string;
}

const props = defineProps<Props>();

const primaryColor = computed(() => getPaletteColorByNumber(props.themeColor, 500));
const secondaryColor = computed(() => getPaletteColorByNumber(props.themeColor, 300));
</script>

<template>
  <div class="absolute-lt z-1 size-full overflow-hidden">
    <!-- 亮色主题背景 -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900/30 dark:to-slate-900"></div>
    
    <!-- 精简网格 -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-grid"></div>
    </div>
    
    <!-- 左侧光晕 -->
    <div class="absolute top-0 left-0 w-96 h-96 opacity-30 dark:opacity-20">
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-400 dark:bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
    </div>
    
    <!-- 右侧光晕 -->
    <div class="absolute bottom-0 right-0 w-96 h-96 opacity-30 dark:opacity-20">
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 dark:bg-purple-500 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <!-- 简约几何元素 -->
    <svg class="absolute top-10 left-10 w-32 h-32 opacity-20 dark:opacity-30" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="none" :stroke="primaryColor" stroke-width="1" />
      <circle cx="50" cy="50" r="30" fill="none" :stroke="secondaryColor" stroke-width="1" />
      <circle cx="50" cy="50" r="20" fill="none" :stroke="primaryColor" stroke-width="1" />
    </svg>
    
    <svg class="absolute bottom-10 right-10 w-32 h-32 opacity-20 dark:opacity-30" viewBox="0 0 100 100">
      <rect x="10" y="10" width="80" height="80" fill="none" :stroke="primaryColor" stroke-width="1" />
      <rect x="20" y="20" width="60" height="60" fill="none" :stroke="secondaryColor" stroke-width="1" />
      <rect x="30" y="30" width="40" height="40" fill="none" :stroke="primaryColor" stroke-width="1" />
    </svg>
    
    <!-- 简约流动线条 -->
    <svg class="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="primaryColor" />
          <stop offset="100%" :stop-color="secondaryColor" />
        </linearGradient>
      </defs>
      <path 
        d="M0,100 Q200,50 400,100 T800,100" 
        stroke="url(#lineGradient)" 
        stroke-width="1" 
        fill="none"
        class="animate-flow"
      />
      <path 
        d="M0,300 Q200,250 400,300 T800,300" 
        stroke="url(#lineGradient)" 
        stroke-width="1" 
        fill="none"
        class="animate-flow"
        style="animation-delay: 3s;"
      />
      <path 
        d="M0,500 Q200,450 400,500 T800,500" 
        stroke="url(#lineGradient)" 
        stroke-width="1" 
        fill="none"
        class="animate-flow"
        style="animation-delay: 6s;"
      />
    </svg>
  </div>
</template>

<style scoped>
/* 流动线条动画 */
@keyframes flow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.animate-flow {
  animation: flow 15s ease-in-out infinite;
}

/* 简约网格 */
.bg-grid {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.dark .bg-grid {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
}
</style>