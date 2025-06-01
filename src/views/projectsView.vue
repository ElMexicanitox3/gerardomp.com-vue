<template>
  <div class="w-full mx-auto px-4 py-6">
    <div class="card bg-base-100 shadow-lg h-full">
      <div class="card-body p-6 md:p-8 relative">
        <div class="flex flex-col items-center">
          <div class="bg-primary/10 p-3 rounded-full mb-3">
            <svg
              viewBox="0 0 32.00 32.00"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="currentColor"
              class="h-8 w-8 text-primary"
              stroke="currentColor"
              stroke-width="0.8320000000000001"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="icomoon-ignore"></g>
                <path
                  d="M19.732 7.203v-2.666h-7.464v2.666h-9.063v20.259h25.59v-20.259h-9.063zM13.334 5.604h5.331v1.599h-5.331v-1.599zM12.268 8.27h15.461v8.53h-7.997v-2.133h-7.464v2.133h-7.997v-8.53h7.997zM18.666 15.733v3.199h-5.331v-3.199h5.331zM4.271 26.396v-8.53h7.997v2.133h7.464v-2.133h7.997v8.53h-23.457z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
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
import CardMobile from '@/components/CardMobile.vue';
import { projects } from '@/data/projectsData';
</script>

<style scoped>
/* Transición suave para hover */
.transition-colors {
  transition-duration: 200ms;
}
</style>
