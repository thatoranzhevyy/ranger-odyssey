<script setup lang="ts">
type LocaleItem = {
  code: string
  label: string
}

// Берём i18n в каноничном виде
const { locale, locales, setLocale } = useI18n()

/**
 * Убираем any: nuxt/i18n locales часто бывают строками или объектами.
 * Нормализуем в единый формат для USelect.
 */
const items = computed<LocaleItem[]>(() =>
  (locales.value ?? []).map((l) => {
    if (typeof l === 'string') {
      return { code: l, label: l }
    }

    const code = l.code
    const label = (l.name || l.code) as string
    return { code, label }
  }),
)

/**
 * v-model прокидываем через computed get/set
 * (тут ок, потому что setLocale — это side-effect)
 */
const selected = computed<string>({
  get: () => locale.value,
  set: (code) => {
    if (code && code !== locale.value) setLocale(code)
  },
})
</script>

<template>
  <section>
    <div class="px-3.5 py-2 font-semibold">
      {{ $t('settings.language.title') }}
    </div>

    <USelect
      v-model="selected"
      :items="items"
      value-key="code"
      label-key="label"
      color="neutral"
      variant="ghost"
      size="xl"
      class="w-full"
    />
  </section>
</template>
