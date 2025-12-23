<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'CardData'
});

const router = useRouter();

interface CardData {
  key: string;
  title: string;
  value: number;
  unit: string;
  color: {
    start: string;
    end: string;
  };
  icon: string;
  route?: string;
}

const cardData = ref<CardData[]>([
  {
    key: 'totalCompare',
    title: '总对比任务',
    value: 186,
    unit: '',
    color: {
      start: '#6C8EFF',
      end: '#4A6FD1'
    },
    icon: 'ant-design:bar-chart-outlined',
    route: '/contrast/verifyData'
  },
  {
    key: 'successCompare',
    title: '成功对比',
    value: 168,
    unit: '',
    color: {
      start: '#7ED321',
      end: '#4CAF50'
    },
    icon: 'ant-design:check-circle-twotone',
    route: '/contrast/verifyData'
  },
  {
    key: 'failedCompare',
    title: '对比失败',
    value: 12,
    unit: '',
    color: {
      start: '#ff7266',
      end: '#d74242'
    },
    icon: 'ant-design:meh-twotone',
    route: '/contrast/verifyData'
  },
  {
    key: 'runningCompare',
    title: '正在对比',
    value: 6,
    unit: '',
    color: {
      start: '#FFA726',
      end: '#F57C00'
    },
    icon: 'ant-design:clock-circle-twotone',
    route: '/contrast/verifyData'
  },
  {
    key: 'dataSource',
    title: '数据源',
    value: 15,
    unit: '',
    color: {
      start: '#5AB9C7',
      end: '#20B2AA'
    },
    icon: 'ant-design:database-outlined',
    route: '/datasource/manage'
  }
]);

interface GradientBgProps {
  gradientColor: string;
  route?: string;
}

const [DefineGradientBg, GradientBg] = createReusableTemplate<GradientBgProps>();

function getGradientColor(color: CardData['color']) {
  return `linear-gradient(to bottom right, ${color.start}, ${color.end})`;
}

function handleCardClick(route?: string) {
  if (route) {
    router.push(route);
  }
}
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper">
    <!-- define component start: GradientBg -->
    <DefineGradientBg v-slot="{ $slots, gradientColor, route }">
      <div 
        class="rd-8px px-16px pb-4px pt-8px text-white cursor-pointer transition-all hover:scale-105" 
        :style="{ backgroundImage: gradientColor }"
        @click="handleCardClick(route)"
      >
        <component :is="$slots.default" />
      </div>
    </DefineGradientBg>
    <!-- define component end: GradientBg -->

    <NGrid cols="s:1 m:2 l:5" responsive="screen" :x-gap="16" :y-gap="16">
      <NGi v-for="item in cardData" :key="item.key">
        <GradientBg :gradient-color="getGradientColor(item.color)" class="flex-1" :route="item.route">
          <h3 class="text-16px">{{ item.title }}</h3>
          <div class="flex justify-between pt-12px">
            <SvgIcon :icon="item.icon" class="text-32px" />
            <CountTo
              :prefix="item.unit"
              :start-value="1"
              :end-value="item.value"
              class="text-30px text-white dark:text-dark"
            />
          </div>
        </GradientBg>
      </NGi>
    </NGrid>
  </NCard>
</template>

<style scoped></style>