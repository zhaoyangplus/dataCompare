<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'QuickActions'
});

const router = useRouter();

interface QuickAction {
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
}

const quickActions = ref<QuickAction[]>([
  {
    title: '配置校验参数',
    description: '配置对比任务的校验参数',
    icon: 'ant-design:setting-outlined',
    route: '/contrast/verifyConfig',
    color: '#18a058'
  },
  {
    title: '新建对比任务',
    description: '创建新的数据库对比任务',
    icon: 'ant-design:plus-circle-outlined',
    route: '/contrast/verifyData',
    color: '#2080f0'
  },
  {
    title: '配置数据源',
    description: '添加或修改数据库连接',
    icon: 'ant-design:database-outlined',
    route: '/datasource/manage',
    color: '#f0a020'
  },
  {
    title: '用户管理',
    description: '管理系统用户',
    icon: 'ant-design:user-outlined',
    route: '/manage/user',
    color: '#d03050'
  }
]);

function handleActionClick(action: QuickAction) {
  router.push(action.route);
}
</script>

<template>
  <NCard :bordered="false" class="card-wrapper">
    <h3 class="text-lg font-semibold mb-4">快速操作</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="action in quickActions"
        :key="action.title"
        class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer transition-all hover:shadow-md hover:border-primary"
        @click="handleActionClick(action)"
      >
        <div class="flex items-center mb-3">
          <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3" :style="{ backgroundColor: `${action.color}20` }">
            <SvgIcon :icon="action.icon" :style="{ color: action.color }" class="text-xl" />
          </div>
          <h4 class="font-medium">{{ action.title }}</h4>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ action.description }}</p>
      </div>
    </div>
  </NCard>
</template>

<style scoped></style>
