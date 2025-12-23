<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import { $t } from '@/locales';
// import { totalDashboardList } from '@/service/api';

defineOptions({
  name: 'CardData'
});

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
}

const cardData = ref<CardData[]>([
  {
    key: 'taskTotal',
    title: $t('page.home.taskTotal'),
    value: 0,
    unit: '',
    color: {
      start: '#6C8EFF',
      end: '#4A6FD1'
    },
    icon: 'ant-design:bar-chart-outlined'
  },
  {
    key: 'successCount',
    title: $t('page.home.successCount'),
    value: 0,
    unit: '',
    color: {
      start: '#7ED321',
      end: '#4CAF50'
    },
    icon: 'ant-design:check-circle-twotone'
  },
  {
    key: 'failCount',
    title: $t('page.home.failCount'),
    value: 0,
    unit: '',
    color: {
      start: '#ff7266',
      end: '#d74242'
    },
    icon: 'ant-design:meh-twotone'
  },
  {
    key: 'awaitCount',
    title: $t('page.home.awaitCount'),
    value: 0,
    unit: '',
    color: {
      start: '#FFA726',
      end: '#F57C00'
    },
    icon: 'ant-design:clock-circle-twotone'
  },
  {
    key: 'runningCount',
    title: $t('page.home.runningCount'),
    value: 0,
    unit: '',
    color: {
      start: '#5AB9C7',
      end: '#20B2AA'
    },
    icon: 'ant-design:rocket-twotone'
  }
]);

// async function getDataDashboardCount() {
//   try {
//     const res = await totalDashboardList();
//     const responseData = res.data;

//     if (responseData) {
//       // 定义卡片 key 与接口字段的映射
//       const keyMap: Record<string, keyof typeof responseData> = {
//         taskTotal: 'allTotal',
//         successCount: 'sucTotal',
//         failCount: 'failTotal',
//         awaitCount: 'awaitTotal',
//         runningCount: 'runningTotal'
//       };

//       // 更新每个卡片的 value
//       cardData.value = cardData.value.map(item => ({
//         ...item,
//         value: responseData[keyMap[item.key]] || 0
//       }));
//     }
//   } catch (error) {
//     console.error('获取数据失败:', error);
//   }
// }

interface GradientBgProps {
  gradientColor: string;
}

const [DefineGradientBg, GradientBg] = createReusableTemplate<GradientBgProps>();

function getGradientColor(color: CardData['color']) {
  return `linear-gradient(to bottom right, ${color.start}, ${color.end})`;
}

// onMounted(() => {
//   getDataDashboardCount();
// });
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper">
    <!-- define component start: GradientBg -->
    <DefineGradientBg v-slot="{ $slots, gradientColor }">
      <div class="rd-8px px-16px pb-4px pt-8px text-white" :style="{ backgroundImage: gradientColor }">
        <component :is="$slots.default" />
      </div>
    </DefineGradientBg>
    <!-- define component end: GradientBg -->

    <NGrid cols="s:1 m:2 l:5" responsive="screen" :x-gap="16" :y-gap="16">
      <NGi v-for="item in cardData" :key="item.key">
        <GradientBg :gradient-color="getGradientColor(item.color)" class="flex-1">
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
