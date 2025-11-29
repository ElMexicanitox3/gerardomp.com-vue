import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export type LanguageCode = 'en' | 'es';

interface Language {
  label: string;
  code: LanguageCode;
}

const SUPPORTED_LANGUAGES: Language[] = [
  { label: 'Español', code: 'es' },
  { label: 'English', code: 'en' },
];

const DEFAULT_LANG: LanguageCode = 'es';

export const useLangStore = defineStore('lang', () => {
  const { locale } = useI18n();
  const storedLang = useLocalStorage<LanguageCode>('lang', DEFAULT_LANG);

  locale.value = storedLang.value;

  const getLanguages = ref(SUPPORTED_LANGUAGES);

  const setLanguage = (langCode: LanguageCode) => {
    locale.value = langCode;
    storedLang.value = langCode;
  };

  const getCurrentLang = computed(() => storedLang.value);

  return {
    getLanguages,
    getCurrentLang,
    setLanguage,
  };
});
