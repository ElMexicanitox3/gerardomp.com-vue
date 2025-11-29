<script setup lang="ts">
import LangComponent from '@/features/home/components/LangComponent.vue';
import ContactInfo from '@/features/home/components/ContactInfo.vue';
import SocialLinks from '@/features/home/components/SocialLinks.vue';
import { profileData } from '@/core/data/profileData';
</script>

<template>
  <div class="glass-effect rounded-3xl h-full border border-white/10">
    <div class="flex flex-col h-full p-6 sm:p-8">
      <!-- Avatar -->
      <div class="flex flex-col items-center justify-center pt-4 sm:pt-8 animate-fade-in">
        <div class="avatar relative group">
          <div
            class="w-32 sm:w-48 rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-2xl transition-all duration-500 group-hover:ring-primary/50 group-hover:scale-105"
          >
            <img :src="profileData.avatar" class="object-cover w-full h-full" alt="Profile photo" />
          </div>
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
        <!-- Nombre -->
        <div class="flex-1 flex flex-col items-center justify-center pt-6 px-2">
          <div class="text-center">
            <h2
              class="text-2xl xl:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary truncate"
            >
              {{ profileData.name }}
            </h2>
          </div>
          <div class="pt-3">
            <span class="badge badge-primary badge-outline gap-2 p-3 text-sm font-medium">
              {{ $t(profileData.roleKey) }}
            </span>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="divider w-3/4 mx-auto my-6 opacity-50"></div>

      <ul class="list flex flex-col gap-4 mx-auto w-full max-w-xs animate-slide-up">
        <ContactInfo
          v-for="(contact, index) in profileData.contact"
          :key="index"
          :contact="contact"
        />
      </ul>

      <div class="divider w-3/4 mx-auto my-6 opacity-50"></div>

      <!-- Socials -->
      <ul
        class="list flex flex-col gap-3 mx-auto w-full max-w-xs animate-slide-up"
        style="animation-delay: 100ms"
      >
        <SocialLinks v-for="(social, index) in profileData.socials" :key="index" :social="social" />
      </ul>

      <div class="mt-auto pt-6 flex justify-center animate-fade-in" style="animation-delay: 200ms">
        <LangComponent />
      </div>
    </div>
  </div>
</template>
