import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

type LanguageCode = 'en' | 'es';

interface LanguageState {
  lang: LanguageCode;
}

// Valor por defecto que cumple con la interfaz
const DEFAULT_LANG: LanguageState = {
  lang: 'es', // Valor inicial por defecto
};

export const useLangStore = defineStore('lang', () => {
  // Inicializamos con el valor del localStorage o el valor por defecto
  const storedLang = useLocalStorage<LanguageState>('lang', DEFAULT_LANG);

  // Creamos una referencia reactiva que siempre cumple con LanguageState
  const currentLang = ref<LanguageState>({
    lang: storedLang.value?.lang ?? DEFAULT_LANG.lang,
  });

  // Actualizamos el localStorage cuando cambia currentLang
  const setLanguage = (langCode: LanguageCode) => {
    currentLang.value.lang = langCode;
    storedLang.value = currentLang.value;
  };

  // Getter computado para obtener el lenguaje actual
  const getCurrentLang = computed(() => currentLang.value.lang);

  return {
    // State
    currentLang,

    // Getters
    getCurrentLang,

    // Actions
    setLanguage,
  };
});
