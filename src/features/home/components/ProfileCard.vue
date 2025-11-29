<script setup lang="ts">
import LangComponent from '@/features/home/components/LangComponent.vue';
import ContactInfo from '@/features/home/components/ContactInfo.vue';
import SocialLinks from '@/features/home/components/SocialLinks.vue';
import { profileData } from '@/core/data/profileData';
</script>

<template>
  <div class="card bg-base-200 shadow-lg h-full">
    <div class="flex flex-col h-full p-4 sm:p-6">
      <!-- Avatar -->
      <div class="flex flex-col items-center justify-center pt-2 sm:pt-6">
        <div class="avatar rounded-2xl p-1 sm:p-2 shadow-md">
          <div class="w-24 sm:w-40 rounded-xl overflow-hidden">
            <img
              :src="profileData.avatar"
              class="hover:scale-105 transition-transform duration-300"
              alt="Profile photo"
            />
          </div>
        </div>
        <!-- Nombre -->
        <div class="flex-1 flex flex-col items-center justify-center pt-4 sm:pt-6 px-2">
          <div class="text-center">
            <h2 class="2xl:text-2xl xl:text-[20px] font-bold truncate">
              {{ profileData.name }}
            </h2>
          </div>
          <div class="pt-1 sm:pt-2">
            <span class="badge badge-outline text-xs sm:text-sm">{{
              $t(profileData.roleKey)
            }}</span>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="divider w-2/3 mx-auto my-2 sm:my-4"></div>

      <ul class="list rounded-box flex flex-col gap-2 mx-auto">
        <ContactInfo
          v-for="(contact, index) in profileData.contact"
          :key="index"
          :contact="contact"
        />
      </ul>

      <div class="divider w-2/3 mx-auto my-2 sm:my-4"></div>

      <!-- Socials -->
      <ul class="list rounded-box flex flex-col gap-2 mx-auto">
        <SocialLinks v-for="(social, index) in profileData.socials" :key="index" :social="social" />
      </ul>

      <LangComponent />
    </div>
  </div>
</template>
