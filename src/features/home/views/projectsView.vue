<template>
  <div class="w-full mx-auto px-4 py-6">
    <div class="card bg-base-100 shadow-lg h-full">
      <div class="card-body p-6 md:p-8 relative">
        <div class="flex flex-col items-center">
          <div class="bg-primary/10 p-3 rounded-full mb-3">
            <ProjectIcon class="h-8 w-8 text-primary" />
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-center text-primary">
            <span class="bg-clip-text from-primary to-accent">{{
              $t('sections.projects.title')
            }}</span>
          </h2>
        </div>
        <div class="mt-4 w-full">
          <div class="grid gap-4 grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2">
            <CardMobile
              v-for="(project, index) in projects"
              :key="index"
              :card-data="project"
              class="transition-colors hover:bg-primary/10 rounded-lg mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardMobile from '@/features/home/components/CardMobile.vue';
import ProjectIcon from '@/assets/icons/ProjectIcon.vue';
import { projects } from '../../../core/data/projectsData';
</script>

<style scoped>
/* Transición suave para hover */
.transition-colors {
  transition-duration: 200ms;
}
</style>
