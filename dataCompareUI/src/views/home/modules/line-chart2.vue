<script setup lang="ts">
import { watch } from 'vue';
import { useAppStore } from '@/store/modules/app';
import { useEcharts } from '@/hooks/common/echarts';
// import { dashboardList } from '@/service/api';

defineOptions({
  name: 'LineChart'
});

const appStore = useAppStore();

const { domRef, updateOptions } = useEcharts(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['任务总数']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [] as string[]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      color: '#6C8EFF',
      name: '任务总数',
      type: 'line',
      smooth: true,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#6C8EFF'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [] as number[]
    }
  ]
}));

// async function mockData() {
//   const res = await dashboardList({ projectIds: '' });
//   const list = res?.response?.data?.content as any[] | undefined;

//   if (!list || !Array.isArray(list)) {
//     console.warn('Invalid data received from API');
//     return;
//   }

//   // 提取 xAxis 的分类名：metaTypeName
//   const categories = list.map(item => item.metaTypeName);

//   // 任务总数的数据
//   const taskTotal = list.map(item => item.allTotal);

//   updateOptions(opts => {
//     opts.xAxis.data = categories;

//     // 设置任务总数的数据
//     opts.series[0].data = taskTotal;

//     return opts;
//   });
// }

function updateLocale() {
  updateOptions((opts, factory) => {
    const originOpts = factory();

    opts.legend.data = [...originOpts.legend.data]; // 刷新图例文本
    opts.series.forEach((series, index) => {
      series.name = originOpts.series[index].name; // 刷新每个系列名称
    });

    return opts;
  });
}

// async function init() {
//   mockData();
// }

watch(
  () => appStore.locale,
  () => {
    updateLocale();
  }
);

// init
// init();
</script>

<template>
  <NCard :bordered="false" class="card-wrapper">
    <div ref="domRef" class="h-360px overflow-hidden"></div>
  </NCard>
</template>

<style scoped></style>
