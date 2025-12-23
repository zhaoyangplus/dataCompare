<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/store/modules/app';
import HeaderBanner from './modules/header-banner.vue';
import CardData from './modules/card-data.vue';
import DatabaseSupport from './modules/database-support.vue';
import QuickActions from './modules/quick-actions.vue';
import LineChart2 from './modules/line-chart2.vue';

const appStore = useAppStore();

const gap = computed(() => (appStore.isMobile ? 0 : 16));
</script>

<template>
  <NSpace vertical :size="16">
    <HeaderBanner />
    <!-- <CardData /> -->
    <QuickActions />
    <DatabaseSupport />
    <!-- <NGrid :x-gap="gap" :y-gap="16" responsive="screen" item-responsive>
      <NGi span="24 s:24 m:24">
        <NCard :bordered="false" class="card-wrapper">
          <LineChart2 />
        </NCard>
      </NGi>
    </NGrid> -->
  </NSpace>
</template>

<style scoped></style>
