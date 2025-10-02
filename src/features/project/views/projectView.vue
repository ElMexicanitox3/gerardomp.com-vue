<template>
  <div v-if="project" class="bg-base-100 min-h-screen">
    <header class="sticky top-0 z-10 bg-base-200 backdrop-blur-md shadow-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <button
            @click="$router.back()"
            class="btn btn-ghost btn-circle"
            aria-label="Volver a la página anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <h1 class="text-xl font-bold text-center truncate px-4">
            {{ project.name }}
          </h1>

          <div class="w-10"></div>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="max-w-4xl mx-auto space-y-8">
        <div class="card bg-base-200 shadow-xl">
          <div class="">
            <div class="markdown-body p-4 bg-base-200" v-html="markdownContent"></div>
          </div>
        </div>

        <div v-if="project.gallery" class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-2xl">Galería</h2>
            <div v-if="project.gallery?.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div class="col-span-1 sm:col-span-2 rounded-lg overflow-hidden">
                <img
                  :src="project.screenImage"
                  :alt="`Imagen principal de ${project.name}`"
                  class="w-full h-auto object-cover"
                />
              </div>
              <div
                v-for="(image, index) in project.gallery"
                :key="index"
                class="rounded-lg overflow-hidden"
              >
                <img
                  :src="image"
                  :alt="`Imagen de la galería ${index + 1}`"
                  class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-2xl">Descargar</h2>
            <div
              class="flex items-center gap-4 mt-4"
              v-if="project.isOnAppStore || project.isOnPlayStore"
            >
              <a
                v-if="project.isOnAppStore && project.urlAppStore"
                :href="project.urlAppStore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/app-store.svg"
                  alt="Descargar en App Store"
                  class="w-40 hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                v-if="project.isOnPlayStore && project.urlPlayStore"
                :href="project.urlPlayStore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/google-play.svg"
                  alt="Descargar en Google Play"
                  class="w-40 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import 'github-markdown-css/github-markdown.css';

const route = useRoute();
const projectName = ref<string>();
const project = ref<ProjectInformation>();

import { projects } from '@/core/data/projectsData';
import router from '@/router';
import type { ProjectInformation } from '@/core/interface/projectInformation.interface';
import { marked } from 'marked';

const markdownContent = ref('');

onMounted(async () => {
  const nameParam = route.params.name;
  projectName.value = Array.isArray(nameParam) ? nameParam[0] : nameParam;

  const foundProject = projects.find((p) => p.name === projectName.value);
  if (foundProject) {
    project.value = foundProject;
  } else {
    router.push({ name: 'home' });
  }

  const response = await fetch('/content/simao.md'); //ACORTAR
  console.log(response);
  const text = await response.text();
  markdownContent.value = await marked(text);
});

console.log(project);
</script>

<style scoped>
.markdown-body {
  background-color: #191e24 !important;
  color: #fff;
}
</style>
