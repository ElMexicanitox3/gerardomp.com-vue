<template>
  <div class="divider w-2/3 mx-auto my-2 sm:my-4 pt-7">
    <div class="flex justify-center gap-2">
      <button
        v-for="lang in languages"
        :key="lang.code"
        class="btn btn-sm btn-outline btn-primary"
        :class="{ 'btn-active': isActiveLang(lang.code) }"
        @click="setLanguage(lang.code)"
      >
        {{ lang.code.toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLangStore, type LanguageCode } from '@/stores/lang.store';

const langStore = useLangStore();
const languages = langStore.getLanguages;

const isActiveLang = (code: string) => langStore.getCurrentLang === code;
const setLanguage = (code: LanguageCode) => langStore.setLanguage(code);
</script>
