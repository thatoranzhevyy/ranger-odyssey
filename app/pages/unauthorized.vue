<script setup lang="ts">
definePageMeta({ layout: 'empty' });
import { useTelegramAuth } from '~/composables/useTelegramAuth';
import { useAuthStore } from '~/stores/auth';

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
