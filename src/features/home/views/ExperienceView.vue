<script setup lang="ts">
import { experienceData } from '@/core/data/experienceData';
import ExperienceIcon from '@/assets/icons/ExperienceIcon.vue';
</script>

<template>
  <div class="w-full mx-auto px-4 py-6 animate-fade-in">
    <div class="glass-card rounded-3xl h-full p-1">
      <div class="card-body p-6 md:p-10 relative">
        <div class="flex flex-col items-center mb-8">
          <div class="bg-primary/10 p-4 rounded-full mb-4 animate-float">
            <ExperienceIcon class="h-10 w-10 text-primary" />
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-center">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >{{ $t('sections.experience.title') }}</span
            >
          </h2>
        </div>

        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li v-for="(item, index) in experienceData" :key="index">
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div
              class="mb-10 p-4 rounded-xl hover:bg-base-200/50 transition-colors duration-300 border border-transparent hover:border-base-content/5"
              :class="{
                'timeline-start md:text-end': index % 2 === 0,
                'timeline-end md:text-start': index % 2 !== 0,
              }"
            >
              <time class="font-mono italic opacity-70">{{ $t(item.dateKey) }}</time>
              <div class="text-lg font-black text-primary">{{ $t(item.roleKey) }}</div>
              <div class="text-base font-bold opacity-80 mb-2">{{ $t(item.companyKey) }}</div>

              <ul
                v-if="item.tasksKey"
                class="list-disc list-inside text-base-content/80 text-justify space-y-1"
              >
                <li v-for="(task, taskIndex) in $tm(item.tasksKey)" :key="taskIndex">
                  {{ $rt(task) }}
                </li>
              </ul>
              <p v-else-if="item.descriptionKey" class="text-base-content/80 text-justify">
                {{ $t(item.descriptionKey) }}
              </p>
            </div>
            <hr class="bg-primary" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
