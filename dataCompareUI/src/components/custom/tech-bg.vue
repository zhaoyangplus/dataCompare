<script lang="ts" setup>
import { computed } from 'vue';
import { getPaletteColorByNumber } from '@sa/color';

defineOptions({ name: 'TechBg' });

interface Props {
  themeColor: string;
}

const props = defineProps<Props>();

const primaryColor = computed(() => getPaletteColorByNumber(props.themeColor, 500));
const secondaryColor = computed(() => getPaletteColorByNumber(props.themeColor, 300));
const accentColor = computed(() => getPaletteColorByNumber(props.themeColor, 700));
</script>

<template>
  <div class="absolute-lt z-1 size-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- 网格背景 -->
    <div class="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
    
    <!-- 科技感粒子效果 -->
    <div class="absolute inset-0">
      <div v-for="i in 50" :key="i" 
           class="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 5}s`,
             opacity: Math.random() * 0.5 + 0.2
           }">
      </div>
    </div>
    
    <!-- 动态六边形网格 -->
    <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagonPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" 
                   fill="none" 
                   :stroke="primaryColor" 
                   stroke-width="0.5" 
                   opacity="0.3"/>
        </pattern>
        <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="primaryColor" stop-opacity="0.8" />
          <stop offset="50%" :stop-color="secondaryColor" stop-opacity="0.6" />
          <stop offset="100%" :stop-color="accentColor" stop-opacity="0.8" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagonPattern)" />
    </svg>
    
    <!-- 左上角科技元素 -->
    <div class="absolute top-0 left-0 w-96 h-96 opacity-60">
      <svg viewBox="0 0 400 400" class="w-full h-full">
        <defs>
          <linearGradient id="topLeftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" :stop-color="primaryColor" stop-opacity="0.8" />
            <stop offset="100%" :stop-color="secondaryColor" stop-opacity="0.2" />
          </linearGradient>
        </defs>
        <path d="M0,0 L400,0 L300,100 L200,50 L100,150 L0,100 Z" fill="url(#topLeftGradient)" class="animate-pulse" />
        <circle cx="50" cy="50" r="30" fill="none" :stroke="accentColor" stroke-width="1" opacity="0.6" class="animate-ping" />
        <circle cx="350" cy="50" r="20" fill="none" :stroke="primaryColor" stroke-width="1" opacity="0.6" class="animate-ping" style="animation-delay: 1s;" />
        <circle cx="200" cy="200" r="40" fill="none" :stroke="secondaryColor" stroke-width="1" opacity="0.6" class="animate-ping" style="animation-delay: 2s;" />
      </svg>
    </div>
    
    <!-- 右下角科技元素 -->
    <div class="absolute bottom-0 right-0 w-96 h-96 opacity-60">
      <svg viewBox="0 0 400 400" class="w-full h-full">
        <defs>
          <linearGradient id="bottomRightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" :stop-color="accentColor" stop-opacity="0.2" />
            <stop offset="100%" :stop-color="primaryColor" stop-opacity="0.8" />
          </linearGradient>
        </defs>
        <path d="M400,400 L0,400 L100,300 L200,350 L300,250 L400,300 Z" fill="url(#bottomRightGradient)" class="animate-pulse" />
        <circle cx="350" cy="350" r="30" fill="none" :stroke="secondaryColor" stroke-width="1" opacity="0.6" class="animate-ping" />
        <circle cx="50" cy="350" r="20" fill="none" :stroke="accentColor" stroke-width="1" opacity="0.6" class="animate-ping" style="animation-delay: 1s;" />
        <circle cx="200" cy="200" r="40" fill="none" :stroke="primaryColor" stroke-width="1" opacity="0.6" class="animate-ping" style="animation-delay: 2s;" />
      </svg>
    </div>
    
    <!-- 中心科技环 -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-40">
      <svg viewBox="0 0 400 400" class="w-full h-full animate-spin-slow">
        <defs>
          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" :stop-color="primaryColor" stop-opacity="0.8" />
            <stop offset="100%" :stop-color="accentColor" stop-opacity="0.8" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="none" :stroke="primaryColor" stroke-width="1" opacity="0.6" stroke-dasharray="10 5" />
        <circle cx="200" cy="200" r="120" fill="none" :stroke="secondaryColor" stroke-width="1" opacity="0.6" stroke-dasharray="5 10" />
        <circle cx="200" cy="200" r="90" fill="none" :stroke="accentColor" stroke-width="1" opacity="0.6" stroke-dasharray="15 5" />
        <circle cx="200" cy="200" r="60" fill="none" :stroke="primaryColor" stroke-width="1" opacity="0.6" stroke-dasharray="5 15" />
      </svg>
    </div>
    
    <!-- 流动光线效果 -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-flow-top"></div>
      <div class="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30 animate-flow-middle"></div>
      <div class="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-flow-bottom"></div>
    </div>
  </div>
</template>

<style scoped>
/* 慢速旋转动画 */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 60s linear infinite;
}

/* 流动光线动画 */
@keyframes flow-top {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}

@keyframes flow-middle {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}

@keyframes flow-bottom {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}

.animate-flow-top {
  animation: flow-top 8s linear infinite;
  top: 20%;
}

.animate-flow-middle {
  animation: flow-middle 12s linear infinite;
  top: 50%;
  animation-delay: 4s;
}

.animate-flow-bottom {
  animation: flow-bottom 10s linear infinite;
  top: 80%;
  animation-delay: 2s;
}

/* 网格背景样式 */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>