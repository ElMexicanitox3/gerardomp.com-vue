<template>
  <router-link :to="`/project/${cardData.name}`" class="block group hover-lift">
    <div
      class="relative rounded-3xl overflow-hidden w-auto h-auto md:h-[300px] xl:h-[300px] 2xl:w-[480px] transition-all duration-500 border border-white/5 shadow-lg group-hover:shadow-2xl group-hover:border-primary/30"
      :class="`${cardData.backgroundColor} ${cardData.textColor}`"
    >
      <!-- Background Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <!-- Contenido dividido en dos columnas -->
      <div class="flex h-full relative z-10">
        <!-- Primera columna con texto y botones -->
        <div
          class="basis-1/2 flex flex-col p-6"
          :class="{
            'justify-between': cardData.isOnAppStore || cardData.isOnPlayStore,
            'justify-center': !(cardData.isOnAppStore || cardData.isOnPlayStore),
          }"
        >
          <div>
            <div
              v-if="cardData.category"
              class="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm mb-3"
            >
              {{ cardData.category }}
            </div>
            <h2 class="text-3xl md:text-4xl font-bold leading-tight drop-shadow-sm">
              {{ cardData.name }}
            </h2>
          </div>

          <div
            class="flex flex-col space-y-3 mt-4"
            v-if="cardData.isOnAppStore || cardData.isOnPlayStore"
          >
            <a
              v-if="cardData.isOnAppStore && cardData.urlAppStore"
              :href="cardData.urlAppStore"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="/assets/app-store.svg"
                alt="App Store"
                class="w-28 md:w-32 drop-shadow-md"
              />
            </a>
            <a
              v-if="cardData.isOnPlayStore && cardData.urlPlayStore"
              :href="cardData.urlPlayStore"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="/assets/google-play.svg"
                alt="Google Play"
                class="w-28 md:w-32 drop-shadow-md"
              />
            </a>
          </div>

          <!-- Badge (Pequeño y Dinámico) -->
          <div v-if="cardData.badges && cardData.badges.length" class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="badge in cardData.badges"
              :key="badge.name"
              class="inline-flex items-center text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-md border border-white/10 shadow-sm backdrop-blur-sm"
              :class="`${badge.color} ${badge.textColor}`"
            >
              <i :class="badge.icon" class="mr-1"></i>
              {{ badge.name }}
            </span>
          </div>
        </div>

        <!-- Imagen del screen (segunda columna) -->
        <div class="basis-1/2 relative overflow-hidden">
          <img
            :src="cardData.screenImage"
            alt="Screen"
            class="md:absolute md:right-[-20px] md:top-[20px] w-full md:w-auto h-auto md:h-[110%] object-contain md:object-cover transform md:rotate-[-5deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:translate-x-[-10px]"
          />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { type ProjectInformation } from '@/core/interface/projectInformation.interface';

const props = defineProps<{ cardData: ProjectInformation }>();
const cardData = props.cardData;
</script>

<style scoped></style>
