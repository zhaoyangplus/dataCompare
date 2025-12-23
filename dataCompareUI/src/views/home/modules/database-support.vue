<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'DatabaseSupport'
});

const router = useRouter();

interface DatabaseType {
  name: string;
  icon: string;
  description: string;
  supported: boolean;
}

const databases = ref<DatabaseType[]>([
  {
    name: 'MySQL',
    icon: '/src/assets/db-imgs/mysql.png',
    description: '开源关系型数据库',
    supported: true
  },
  {
    name: 'PostgreSQL',
    icon: '/src/assets/db-imgs/postgresql.png',
    description: '开源关系型数据库',
    supported: true
  },
  {
    name: 'Oracle',
    icon: '/src/assets/db-imgs/oracle.png',
    description: '企业级关系型数据库',
    supported: true
  },
  {
    name: 'Snowflake',
    icon: '/src/assets/db-imgs/snowflake.png',
    description: 'Snowflake数据仓库',
    supported: false
  },
  {
    name: 'MariaDB',
    icon: '/src/assets/db-imgs/mariadb.png',
    description: '开源关系型数据库',
    supported: false
  },
  {
    name: 'SQL Server',
    icon: '/src/assets/db-imgs/sqlserver.png',
    description: '微软关系型数据库',
    supported: false
  },
  {
    name: 'DB2',
    icon: '/src/assets/db-imgs/db2.png',
    description: 'IBM关系型数据库',
    supported: false
  },
  {
    name: 'Hive',
    icon: '/src/assets/db-imgs/hive.png',
    description: 'Hadoop数据仓库',
    supported: false
  },
  {
    name: 'DM',
    icon: '/src/assets/db-imgs/dm.png',
    description: '达梦数据库',
    supported: false
  },
  {
    name: 'PolarDB',
    icon: '/src/assets/db-imgs/polardb.png',
    description: '阿里云原生数据库',
    supported: false
  },
  {
    name: 'Halo',
    icon: '/src/assets/db-imgs/halo.png',
    description: 'Halo关系型数据库',
    supported: false
  },
  {
    name: 'TiDB',
    icon: '/src/assets/db-imgs/tidb.png',
    description: 'TiDB关系型数据库',
    supported: false
  },
  {
    name: 'OceanBase',
    icon: '/src/assets/db-imgs/oceanbase.png',
    description: 'OceanBase关系型数据库',
    supported: false
  },
  {
    name: 'KingbaseES',
    icon: '/src/assets/db-imgs/kingbase.png',
    description: 'KingbaseES关系型数据库',
    supported: false
  },
  {
    name: 'OpenGauss',
    icon: '/src/assets/db-imgs/opengauss.png',
    description: 'OpenGauss关系型数据库',
    supported: false
  }
]);

function goToDataSource() {
  router.push('/datasource/manage');
}
</script>

<template>
  <NCard :bordered="false" class="card-wrapper">
    <div class="mb-4 flex justify-between items-center">
      <h3 class="text-lg font-semibold">支持的数据库类型</h3>
      <NButton type="primary" ghost @click="goToDataSource">管理数据源</NButton>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div
        v-for="db in databases"
        :key="db.name"
        class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all hover:shadow-md hover:scale-105"
      >
        <div class="w-16 h-16 mb-3 flex items-center justify-center">
          <img :src="db.icon" :alt="db.name" class="max-w-full max-h-full object-contain" />
        </div>
        <h4 class="text-sm font-medium text-center">{{ db.name }}</h4>
        <p class="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{{ db.description }}</p>
        <div class="mt-2">
          <NTag v-if="db.supported" type="success" size="small">支持</NTag>
          <NTag v-else type="warning" size="small">开发中</NTag>
        </div>
      </div>
    </div>
  </NCard>
</template>

<style scoped></style>
