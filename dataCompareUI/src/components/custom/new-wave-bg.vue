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
      <svg height="600" width="600">
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
      <svg height="480" width="480">
        <defs>
          <linearGradient id="hexagonGradient-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" :stop-color="darkColor" stop-opacity="0.9" />
            <stop offset="100%" :stop-color="lightColor" stop-opacity="0.8" />
          </linearGradient>
        </defs>
        <path fill="url(#hexagonGradient-2)" d="M240,0 L480,120 L480,360 L240,480 L0,360 L0,120 Z" />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
