<template>
  <div class="w-full mx-auto px-4 py-6 animate-fade-in">
    <div class="glass-card rounded-3xl h-full p-1">
      <div class="card-body p-6 md:p-10 relative">
        <div class="flex flex-col items-center mb-8">
          <div class="bg-primary/10 p-4 rounded-full mb-4 animate-float">
            <ProjectIcon class="h-10 w-10 text-primary" />
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >{{ $t('sections.projects.title') }}</span
            >
          </h2>

          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              class="btn btn-sm rounded-full transition-all duration-300"
              :class="
                selectedCategory === category
                  ? 'btn-primary shadow-lg scale-105'
                  : 'btn-ghost hover:bg-base-200'
              "
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="mt-2 w-full min-h-[400px]">
          <TransitionGroup
            name="staggered-fade"
            tag="div"
            class="grid gap-6 grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2"
          >
            <CardMobile
              v-for="(project, index) in filteredProjects"
              :key="project.name"
              :card-data="project"
              class="mb-4"
              :style="{ transitionDelay: `${index * 100}ms` }"
            />
          </TransitionGroup>

          <!-- Empty State -->
          <div
            v-if="filteredProjects.length === 0"
            class="flex flex-col items-center justify-center py-20 text-center opacity-70"
          >
            <div class="text-6xl mb-4">🔍</div>
            <h3 class="text-xl font-bold">No projects found</h3>
            <p>Try selecting a different category.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CardMobile from '@/features/home/components/CardMobile.vue';
import ProjectIcon from '@/assets/icons/ProjectIcon.vue';
import { projects } from '../../../core/data/projectsData';

const selectedCategory = ref('All');

// Extract unique categories from badges
const categories = computed(() => {
  const allCategories = new Set(['All']);
  projects.forEach((project) => {
    if (project.badges) {
      project.badges.forEach((badge) => {
        allCategories.add(badge.name);
      });
    }
  });
  return Array.from(allCategories);
});

// Filter projects based on selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects;
  }
  return projects.filter((project) =>
    project.badges?.some((badge) => badge.name === selectedCategory.value),
  );
});
</script>

<style scoped>
/* Staggered Animation */
.staggered-fade-enter-active,
.staggered-fade-leave-active {
  transition: all 0.5s ease;
}

.staggered-fade-enter-from,
.staggered-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.staggered-fade-move {
  transition: transform 0.5s ease;
}
</style>
