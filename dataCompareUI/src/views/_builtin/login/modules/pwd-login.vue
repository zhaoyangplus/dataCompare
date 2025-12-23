<script setup lang="ts">
import { computed, reactive } from 'vue';
import { $t } from '@/locales';
// import { loginModuleRecord } from '@/constants/app';
// import { useRouterPush } from '@/hooks/common/router';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { useAuthStore } from '@/store/modules/auth';

defineOptions({
  name: 'PwdLogin'
});

const authStore = useAuthStore();
// const { toggleLoginModule } = useRouterPush();
const { formRef, validate } = useNaiveForm();

interface FormModel {
  userName: string;
  password: string;
}

const model: FormModel = reactive({
  userName: 'admin',
  password: '123456'
});

const rules = computed<Record<keyof FormModel, App.Global.FormRule[]>>(() => {
  // inside computed to make locale reactive, if not apply i18n, you can define it without computed
  const { formRules } = useFormRules();

  return {
    userName: formRules.userName,
    password: formRules.pwd
  };
});

async function handleSubmit() {
  await validate();
  await authStore.login(model.userName, model.password);
}

// type AccountKey = 'super' | 'admin' | 'user';

// interface Account {
//   key: AccountKey;
//   label: string;
//   userName: string;
//   password: string;
// }

// const accounts = computed<Account[]>(() => [
//   {
//     key: 'super',
//     label: $t('page.login.pwdLogin.superAdmin'),
//     userName: 'Super',
//     password: '123456'
//   },
//   {
//     key: 'admin',
//     label: $t('page.login.pwdLogin.admin'),
//     userName: 'Admin',
//     password: '123456'
//   },
//   {
//     key: 'user',
//     label: $t('page.login.pwdLogin.user'),
//     userName: 'User',
//     password: '123456'
//   }
// ]);

// async function handleAccountLogin(account: Account) {
//   await authStore.login(account.userName, account.password);
// }

function toggleLoginModule() {
  window.$message?.success?.('请找迁移工具的相关人员提供账号信息');
}
</script>

<template>
  <NForm ref="formRef" :model="model" :rules="rules" size="large" :show-label="false" @keyup.enter="handleSubmit">
    <NFormItem path="userName">
      <NInput
        v-model:value="model.userName"
        :placeholder="$t('page.login.common.userNamePlaceholder')"
        class="input-custom"
      >
        <template #prefix>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </template>
      </NInput>
    </NFormItem>

    <NFormItem path="password">
      <NInput
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')"
        class="input-custom"
      >
        <template #prefix>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </template>
      </NInput>
    </NFormItem>

    <NSpace vertical :size="24">
      <div class="flex-y-center justify-between">
        <NCheckbox class="checkbox-custom">{{ $t('page.login.pwdLogin.rememberMe') }}</NCheckbox>
        <NButton quaternary class="forgot-password" @click="toggleLoginModule()">
          {{ $t('page.login.pwdLogin.forgetPassword') }}
        </NButton>
      </div>

      <NButton
        type="primary"
        size="large"
        round
        block
        :loading="authStore.loginLoading"
        class="login-button"
        @click="handleSubmit"
      >
        <span v-if="!authStore.loginLoading">{{ $t('common.confirm') }}</span>
        <span v-else>登录中...</span>
      </NButton>
    </NSpace>
  </NForm>
</template>

<style scoped>
/* 自定义输入框样式 */
.input-custom :deep(.n-input__input-el) {
  padding-left: 10px;
  font-size: 16px;
}

.input-custom :deep(.n-input__border) {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.input-custom :deep(.n-input__state-border) {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.input-custom :deep(.n-input--focus) {
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

/* 自定义复选框样式 */
.checkbox-custom :deep(.n-checkbox-box) {
  border-radius: 6px;
}

.checkbox-custom :deep(.n-checkbox__label) {
  font-size: 14px;
  color: var(--n-text-color-2);
}

/* 忘记密码按钮样式 */
.forgot-password {
  font-size: 14px;
  transition: all 0.3s ease;
}

.forgot-password:hover {
  color: var(--primary-color);
  transform: translateX(2px);
}

/* 登录按钮样式 */
.login-button {
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.login-button:active {
  transform: translateY(0);
}

/* 表单项间距 */
:deep(.n-form-item) {
  margin-bottom: 24px;
}

/* 表单容器 */
:deep(.n-form) {
  padding: 0;
}

/* 响应式优化 */
@media (max-width: 640px) {
  .login-button {
    height: 46px;
    font-size: 15px;
  }

  .input-custom :deep(.n-input__input-el) {
    font-size: 15px;
  }
}
</style>
