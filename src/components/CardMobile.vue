<template>
  <div
    class="relative rounded-lg p-2 overflow-hidden w-auto h-auto md:h-[300px] xl:h-[300px] 2xl:w-[480px]"
    :class="`${cardData.backgroundColor} ${cardData.textColor}`"
  >
    <!-- Contenido dividido en dos columnas -->
    <div class="flex h-full">
      <!-- Primera columna con texto y botones -->
      <div
        class="basis-1/2 flex flex-col p-4"
        :class="{
          'justify-between': cardData.isOnAppStore || cardData.isOnPlayStore,
          'justify-center': !(cardData.isOnAppStore || cardData.isOnPlayStore),
        }"
      >
        <div>
          <div
            v-if="cardData.category"
            class="inline-block text-sm bg-gray-700 px-2 py-1 rounded-full border border-gray-600"
          >
            {{ cardData.category }}
          </div>
          <h2 class="text-4xl font-semibold mt-4">{{ cardData.title }}</h2>
        </div>

        <div
          class="flex flex-col space-y-2 mt-4"
          v-if="cardData.isOnAppStore || cardData.isOnPlayStore"
        >
          <a
            v-if="cardData.isOnAppStore && cardData.urlAppStore"
            :href="cardData.urlAppStore"
            target="_blank"
            rel="noopener noreferrer"
            class="mb-2"
          >
            <img src="/assets/app-store.svg" alt="App Store" class="w-32" />
          </a>
          <a
            v-if="cardData.isOnPlayStore && cardData.urlPlayStore"
            :href="cardData.urlPlayStore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/google-play.svg" alt="Google Play" class="w-32" />
          </a>
        </div>

        <!-- Badge (Pequeño y Dinámico) -->
        <div v-if="cardData.badges && cardData.badges.length" class="flex space-x-2 mt-2">
          <span
            v-for="badge in cardData.badges"
            :key="badge.name"
            class="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-sm border"
            :class="`${badge.color} ${badge.textColor}`"
          >
            <i :class="badge.icon"></i>
            {{ badge.name }}
          </span>
        </div>
      </div>

      <!-- Imagen del screen (segunda columna) -->
      <div class="basis-1/2 relative">
        <img :src="cardData.image" alt="Screen" class="md:absolute md:right-[10px] md:top-[10px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CardMobileInterface } from '@/interfaces/CardMobileInterface.interface';

const props = defineProps<{ cardData: CardMobileInterface }>();
const cardData = props.cardData;
</script>

<style scoped></style>
