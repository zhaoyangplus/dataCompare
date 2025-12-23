<script setup lang="ts">
// import { watch } from 'vue';
import { onMounted } from 'vue';
import { $t } from '@/locales';
// import { useAppStore } from '@/store/modules/app';
import { useEcharts } from '@/hooks/common/echarts';
import { totalDashboardList } from '@/service/api';

defineOptions({
  name: 'PieChart'
});

// const appStore = useAppStore();

const { domRef, updateOptions } = useEcharts(() => ({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: '1%',
    left: 'center',
    itemStyle: {
      borderWidth: 0
    }
  },
  series: [
    {
      color: ['#7ED321', '#ff7266', '#FFA726', '#5AB9C7'],
      name: $t('page.home.schedule'),
      type: 'pie',
      radius: ['45%', '75%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 1
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '12'
        }
      },
      labelLine: {
        show: false
      },
      data: [] as { name: string; value: number }[]
    }
  ]
}));

// async function mockData() {
//   await new Promise(resolve => {
//     setTimeout(resolve, 1000);
//   });

//   updateOptions(opts => {
//     // opts.series[0].data = [
//     //   { name: $t('page.home.study'), value: 20 },
//     //   { name: $t('page.home.entertainment'), value: 10 },
//     //   { name: $t('page.home.work'), value: 40 },
//     //   { name: $t('page.home.rest'), value: 30 }
//     // ];
//     opts.series[0].data = [
//       { name: $t('page.home.successCount'), value: 0 },
//       { name: $t('page.home.failCount'), value: 0 },
//       { name: $t('page.home.awaitCount'), value: 0 },
//       { name: $t('page.home.runningCount'), value: 0 }
//     ];

//     return opts;
//   });
// }

// function updateLocale() {
//   updateOptions((opts, factory) => {
//     const originOpts = factory();

//     opts.series[0].name = originOpts.series[0].name;

//     opts.series[0].data = [
//       { name: $t('page.home.successCount'), value: 20 },
//       { name: $t('page.home.failCount'), value: 10 },
//       { name: $t('page.home.awaitCount'), value: 40 },
//       { name: $t('page.home.runningCount'), value: 30 }
//     ];

//     return opts;
//   });
// }

// async function init() {
//   mockData();
// }

// watch(
//   () => appStore.locale,
//   () => {
//     updateLocale();
//   }
// );

async function getDataDashboardCount() {
  try {
    const res = await totalDashboardList();
    console.log(res.data.sucTotal);
    const responseData = res.data;
    updateOptions(opts => {
      opts.series[0].data = [
        { name: $t('page.home.successCount'), value: responseData.sucTotal },
        { name: $t('page.home.failCount'), value: responseData.failTotal },
        { name: $t('page.home.awaitCount'), value: responseData.awaitTotal },
        { name: $t('page.home.runningCount'), value: responseData.runningTotal }
      ];
      return opts;
    });
  } catch (error) {
    console.error('获取数据失败:', error);
  }
}

onMounted(() => {
  getDataDashboardCount();
});

// init
// init();
</script>

<template>
  <NCard :bordered="false" class="card-wrapper">
    <div ref="domRef" class="h-360px overflow-hidden"></div>
  </NCard>
</template>

<style scoped></style>
