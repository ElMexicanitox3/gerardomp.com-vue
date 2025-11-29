<template>
  <div class="w-full mx-auto px-4 py-6 animate-fade-in">
    <div class="glass-card rounded-3xl h-full p-1">
      <div class="card-body p-6 md:p-10 relative">
        <div class="flex flex-col items-center mb-8">
          <div class="bg-primary/10 p-4 rounded-full mb-4 animate-float">
            <ProjectIcon class="h-10 w-10 text-primary" />
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-center">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{{
              $t('sections.projects.title')
            }}</span>
          </h2>
        </div>
        <div class="mt-6 w-full">
          <div class="grid gap-6 grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2">
            <CardMobile
              v-for="(project, index) in projects"
              :key="index"
              :card-data="project"
              class="mb-4"
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
