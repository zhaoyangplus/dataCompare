<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';
import { getPaletteColorByNumber, mixColor } from '@sa/color';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useThemeStore } from '@/store/modules/theme';
import { loginModuleRecord } from '@/constants/app';
import PwdLogin from './modules/pwd-login.vue';
import CodeLogin from './modules/code-login.vue';
import Register from './modules/register.vue';
import ResetPwd from './modules/reset-pwd.vue';
import BindWechat from './modules/bind-wechat.vue';
import ModernTechBg from '@/components/custom/modern-tech-bg.vue';

interface Props {
  /** The login module */
  module?: UnionKey.LoginModule;
}

const props = defineProps<Props>();

const appStore = useAppStore();
const themeStore = useThemeStore();

interface LoginModule {
  label: string;
  component: Component;
}

const moduleMap: Record<UnionKey.LoginModule, LoginModule> = {
  'pwd-login': { label: loginModuleRecord['pwd-login'], component: PwdLogin },
  'code-login': { label: loginModuleRecord['code-login'], component: CodeLogin },
  register: { label: loginModuleRecord.register, component: Register },
  'reset-pwd': { label: loginModuleRecord['reset-pwd'], component: ResetPwd },
  'bind-wechat': { label: loginModuleRecord['bind-wechat'], component: BindWechat }
};

const activeModule = computed(() => moduleMap[props.module || 'pwd-login']);

const bgThemeColor = computed(() =>
  themeStore.darkMode ? getPaletteColorByNumber(themeStore.themeColor, 600) : themeStore.themeColor
);

const bgColor = computed(() => {
  const COLOR_WHITE = '#ffffff';

  const ratio = themeStore.darkMode ? 0.5 : 0.2;

  return mixColor(COLOR_WHITE, themeStore.themeColor, ratio);
});
</script>

<template>
  <div class="relative size-full flex-center overflow-hidden bg-slate-100 dark:bg-slate-900">
    <!-- 简洁科技感背景 -->
            <ModernTechBg :theme-color="bgThemeColor" />

    <!-- 登录卡片容器 -->
    <div class="relative z-10 w-full max-w-1200px flex justify-center items-center px-4">
      <!-- 左侧信息区域 -->
      <div class="hidden lg:block lg:flex-1 text-white pr-16">
        <div class="space-y-6">
          <div class="flex items-center space-x-4">
            <SystemLogo class="w-20 h-20" />
            <div>
              <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                {{ $t('system.title') }}
              </h1>
              <p class="text-lg text-gray-800 dark:text-white/80 mt-2">{{ $t('system.title') }}</p>
            </div>
          </div>

          <div class="space-y-4 text-gray-800 dark:text-white/90">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-lg bg-gray-200/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold">高效对比</h3>
                <p class="text-sm text-gray-600 dark:text-white/70">快速、安全、可靠的数据库校验解决方案</p>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-lg bg-gray-200/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold">安全可靠</h3>
                <p class="text-sm text-gray-600 dark:text-white/70">企业级安全保障，确保数据对比校验过程万无一失</p>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-lg bg-gray-200/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold">智能对比</h3>
                <p class="text-sm text-gray-600 dark:text-white/70">精确的数据对比和验证，确保对比校验结果准确无误</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧登录表单 -->
      <div class="w-full lg:w-auto lg:flex-shrink-0">
        <NCard :bordered="false" class="relative z-4 w-auto rd-16px shadow-2xl backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50">
          <div class="w-500px lt-sm:w-300px p-8">
            <header class="flex-y-center justify-between mb-8" style="min-height: 48px;">
              <div class="flex items-center space-x-4" style="min-height: 48px;">
                <SystemLogo class="w-12 h-12" />
                <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent lt-sm:text-xl whitespace-nowrap">
                  {{ $t('system.title') }}
                </h3>
              </div>

              <div class="flex items-center space-x-3">
                <ThemeSchemaSwitch
                  :theme-schema="themeStore.themeScheme"
                  :show-tooltip="false"
                  class="text-20px lt-sm:text-18px text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  @switch="themeStore.toggleThemeScheme"
                />
                <LangSwitch
                  v-if="themeStore.header.multilingual.visible"
                  :lang="appStore.locale"
                  :lang-options="appStore.localeOptions"
                  :show-tooltip="false"
                  class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  @change-lang="appStore.changeLocale"
                />
              </div>
            </header>

            <main>
              <div class="mb-6">
                <h3 class="text-18px text-gray-800 dark:text-gray-200 font-medium text-center">{{ $t(activeModule.label) }}</h3>
              </div>

              <div class="pt-4">
                <Transition :name="themeStore.page.animateMode" mode="out-in" appear>
                  <component :is="activeModule.component" />
                </Transition>
              </div>
            </main>
          </div>
        </NCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 网格背景 */
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* 暗色模式下的网格背景 */
.dark .bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
}

/* 卡片玻璃态效果 */
.n-card {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 8px 32px 0 rgba(31, 38, 135, 0.37),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* 输入框样式优化 */
:deep(.n-input) {
  border-radius: 8px;
  transition: all 0.3s ease;
}

:deep(.n-input:focus-within) {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
}

/* 按钮样式优化 */
:deep(.n-button--primary-type) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

:deep(.n-button--primary-type:hover) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
}

/* 表单项间距优化 */
:deep(.n-form-item) {
  margin-bottom: 20px;
}

/* 动画效果 */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}

/* 响应式优化 */
@media (max-width: 1024px) {
  .login-container {
    padding: 2rem 1rem;
  }
}
</style>
