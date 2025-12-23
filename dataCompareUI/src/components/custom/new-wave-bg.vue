<script lang="ts" setup>
import { computed } from 'vue';
import { getPaletteColorByNumber } from '@sa/color';

defineOptions({ name: 'WaveBg' });

interface Props {
  themeColor: string;
}

const props = defineProps<Props>();

const lightColor = computed(() => getPaletteColorByNumber(props.themeColor, 200));
const darkColor = computed(() => getPaletteColorByNumber(props.themeColor, 500));
</script>

<template>
  <div class="absolute-lt z-1 size-full overflow-hidden">
    <!-- 主六边形背景（右上角） -->
    <div class="absolute -right-150px -top-150px lt-sm:(-right-100px -top-100px)">
      <svg height="600" width="600" class="animate-spin-slow">
        <defs>
          <linearGradient id="hexagonGradient-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" :stop-color="lightColor" stop-opacity="0.9" />
            <stop offset="100%" :stop-color="darkColor" stop-opacity="0.8" />
          </linearGradient>
        </defs>
        <path fill="url(#hexagonGradient-1)" d="M300,0 L600,150 L600,450 L300,600 L0,450 L0,150 Z" />
      </svg>
    </div>

    <!-- 次要六边形背景（左下角） -->
    <div class="absolute -bottom-120px -left-120px lt-sm:(-bottom-80px -left-80px)">
      <svg height="480" width="480" class="animate-spin-slow" style="animation-direction: reverse;">
        <defs>
          <linearGradient id="hexagonGradient-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" :stop-color="darkColor" stop-opacity="0.9" />
            <stop offset="100%" :stop-color="lightColor" stop-opacity="0.8" />
          </linearGradient>
        </defs>
        <path fill="url(#hexagonGradient-2)" d="M240,0 L480,120 L480,360 L240,480 L0,360 L0,120 Z" />
      </svg>
    </div>
    
    <!-- 装饰性圆圈 -->
    <div class="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-tr from-green-400/20 to-blue-600/20 blur-lg animate-pulse" style="animation-delay: 1.5s;"></div>
    
    <!-- 流动线条 -->
    <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="lightColor" stop-opacity="0.3" />
          <stop offset="50%" :stop-color="darkColor" stop-opacity="0.2" />
          <stop offset="100%" :stop-color="lightColor" stop-opacity="0.3" />
        </linearGradient>
      </defs>
      <path 
        d="M0,100 Q150,50 300,100 T600,100" 
        stroke="url(#lineGradient)" 
        stroke-width="2" 
        fill="none"
        class="animate-flow"
      />
      <path 
        d="M0,200 Q150,150 300,200 T600,200" 
        stroke="url(#lineGradient)" 
        stroke-width="1.5" 
        fill="none"
        class="animate-flow"
        style="animation-delay: 2s;"
      />
      <path 
        d="M0,300 Q150,250 300,300 T600,300" 
        stroke="url(#lineGradient)" 
        stroke-width="1" 
        fill="none"
        class="animate-flow"
        style="animation-delay: 4s;"
      />
    </svg>
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
</style>
