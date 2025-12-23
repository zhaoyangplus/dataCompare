<script setup lang="ts">
import { $t } from '@/locales';

defineOptions({
  name: 'TaskTableHeaderOperation'
});

interface Props {
  itemAlign?: NaiveUI.Align;
  disabledDelete?: boolean;
  loading?: boolean;
}

defineProps<Props>();

interface Emits {
  (e: 'batchStart'): void;
  (e: 'failRestart'): void;
  (e: 'batchStop'): void;
  (e: 'batchSetting'): void;
  (e: 'delete'): void;
  (e: 'refresh'): void;
}

const emit = defineEmits<Emits>();

const columns = defineModel<NaiveUI.TableColumnCheck[]>('columns', {
  default: () => []
});

function batchStart() {
  emit('batchStart');
}

function failRestart() {
  emit('failRestart');
}

function batchStop() {
  emit('batchStop');
}

function batchSetting() {
  emit('batchSetting');
}

function batchDelete() {
  emit('delete');
}

function refresh() {
  emit('refresh');
}
</script>

<template>
  <NSpace :align="itemAlign" wrap justify="end" class="lt-sm:w-200px">
    <slot name="prefix"></slot>
    <slot name="default">
      <NPopconfirm @positive-click="batchStart">
        <template #trigger>
          <NButton size="small" ghost type="primary">
            <template #icon>
              <icon-solar:chat-round-video-bold-duotone class="text-icon" />
            </template>
            {{ $t('page.task.manage.batchStart') }}
          </NButton>
        </template>
        {{ $t('page.task.manage.confirmBatchStart') }}
      </NPopconfirm>
      <NPopconfirm @positive-click="failRestart">
        <template #trigger>
          <NButton size="small" ghost type="primary">
            <template #icon>
              <icon-solar:restart-square-bold-duotone class="text-icon" />
            </template>
            {{ $t('page.task.manage.failRestart') }}
          </NButton>
        </template>
        {{ $t('page.task.manage.confirmFailRestart') }}
      </NPopconfirm>
      <NPopconfirm @positive-click="batchStop">
        <template #trigger>
          <NButton size="small" ghost type="primary">
            <template #icon>
              <icon-solar:stop-circle-bold-duotone class="text-icon" />
            </template>
            {{ $t('page.task.manage.batchStop') }}
          </NButton>
        </template>
        {{ $t('page.task.manage.confirmBatchStop') }}
      </NPopconfirm>
      <NButton size="small" ghost type="primary" @click="batchSetting">
        <template #icon>
          <icon-solar:calendar-minimalistic-bold-duotone class="text-icon" />
        </template>
        {{ $t('common.batchSetting') }}
      </NButton>
      <NPopconfirm @positive-click="batchDelete">
        <template #trigger>
          <NButton size="small" ghost type="error">
            <template #icon>
              <icon-ic-round-delete class="text-icon" />
            </template>
            {{ $t('common.batchDelete') }}
          </NButton>
        </template>
        {{ $t('common.confirmDelete') }}
      </NPopconfirm>
    </slot>
    <NButton size="small" @click="refresh">
      <template #icon>
        <icon-mdi-refresh class="text-icon" :class="{ 'animate-spin': loading }" />
      </template>
      {{ $t('common.refresh') }}
    </NButton>
    <TableColumnSetting v-model:columns="columns" />
    <slot name="suffix"></slot>
  </NSpace>
</template>

<style scoped></style>
