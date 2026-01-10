<script setup lang="ts">
import { useTelegramAuth } from '~/composables/useTelegramAuth';
import { useAuthStore } from '~/stores/auth';
import { useWebApp } from 'vue-tg';

definePageMeta({ layout: 'empty' });

const webApp = useWebApp();
const { authorize } = useTelegramAuth();
const auth = useAuthStore();

const retry = async () => {
  try {
    await authorize();
    navigateTo('/');
  } catch {}
};
</script>

<template>
  <pre v-if="webApp">
    {{ webApp.initDataUnsafe.start_param }}
    {{ webApp.initData }}
  </pre>
  <div class="flex h-screen items-center justify-center">
    <UEmpty
      variant="soft"
      title="Вы не авторизованы"
      :actions="[
        {
          block: true,
          color: 'primary',
          loading: auth.loading,
          label: 'Авторизоваться через Telegram',
          onClick: async () => {
            retry();
          },
        },
      ]"
    />
  </div>
</template>
