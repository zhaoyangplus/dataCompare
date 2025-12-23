<script lang="ts">
import { computed, defineComponent, nextTick, ref, watch } from 'vue';
import type { LogInst } from 'naive-ui';

export default defineComponent({
  props: {
    // 接收父组件传递的日志数据
    log: {
      type: String,
      required: true
    },
    // 接收父组件传递的抽屉显示状态
    visible: {
      type: Boolean,
      required: true
    },
    // 接收父组件传递的日志存放路径
    logPath: {
      type: String,
      required: false,
      default: '' // 默认值为空字符串
    }
  },
  emits: ['update:visible', 'refresh-log'], // 定义 emit 事件
  setup(props, { emit }) {
    const logInstRef = ref<LogInst | null>(null);

    // 使用 computed 实现对 props.visible 的双向绑定
    const visibleComputed = computed({
      get: () => props.visible,
      set: val => {
        emit('update:visible', val); // 更新父组件的状态
      }
    });

    // 监听日志内容的变化，并在变化后自动滚动到底部
    watch(
      () => props.log,
      () => {
        if (logInstRef.value) {
          nextTick().then(() => {
            logInstRef.value?.scrollTo({ position: 'bottom', silent: true });
          });
        }
      }
    );

    // 关闭抽屉的处理逻辑
    const handleClose = () => {
      visibleComputed.value = false; // 关闭抽屉
    };

    // 刷新日志的处理逻辑
    const refreshLog = () => {
      emit('refresh-log'); // 通知父组件刷新日志
    };

    return {
      visibleComputed,
      logInstRef,
      handleClose,
      refreshLog
    };
  }
});
</script>

<template>
  <NDrawer v-model:show="visibleComputed" display-directive="show" width="80%">
    <NDrawerContent :title="$t('common.logDetails')" :native-scrollbar="true" closable @close="handleClose">
      <div>
        <p>日志存放路径: {{ logPath }}</p>
      </div>
      <!-- <NLog ref="logInstRef" :rows="25" :log="log" language="naive-log" trim /> -->
      <div class="log-container">
        <NLog ref="logInstRef" :log="log" language="naive-log" trim />
      </div>
      <template #footer>
        <NSpace :size="16">
          <NButton @click="handleClose">{{ $t('common.cancel') }}</NButton>
          <NButton type="primary" @click="refreshLog">{{ $t('common.refreshLog') }}</NButton>
        </NSpace>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped>
.log-container {
  height: 95%;
  overflow-y: auto;
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 8px;
}
.n-log {
  height: 100% !important; /* 让 NLog 填充父容器 */
}
</style>
