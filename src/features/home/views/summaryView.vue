<template>
  <div class="w-full mx-auto px-4 py-6">
    <div class="card bg-base-100 shadow-lg h-full">
      <div class="card-body p-6 md:p-8 relative">
        <div class="flex flex-col items-center">
          <div class="bg-primary/10 p-3 rounded-full mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-center text-primary">
            <span class="bg-clip-text from-primary to-accent">{{
              $t('sections.summary.title')
            }}</span>
          </h2>
        </div>

        <!-- Contenido mejorado -->
        <div class="space-y-2 text-base md:text-lg leading-relaxed">
          <div class="p-6 rounded-xl">
            <p class="text-justify">
              <span class="font-bold text-primary">{{ $t('porfileCard.role') }}</span>
              {{ $t('sections.summary.p1') }}
            </p>

            <p class="mt-4 text-justify">
              {{ $t('sections.summary.p2') }}
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div class="bg-primary/10 p-3 rounded-full mb-3">
            <svg
              class="h-8 w-8 text-primary"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-center text-primary">
            <span class="bg-clip-text from-primary to-accent">{{
              $t('sections.skills.title')
            }}</span>
          </h2>
        </div>

        <div class="space-y-8">
          <!-- Sección Frontend -->
          <div>
            <h3 class="text-2xl font-bold text-primary border-primary pb-2 mb-4">Frontend</h3>
            <div class="flex flex-wrap gap-3">
              <VuejsBadge />
              <TypescriptBadge />
              <JavascriptBadge />
              <HtmlBadge />
              <CssBadge />
              <JqueryBadge />
            </div>
          </div>

          <!-- Sección Backend -->
          <div>
            <h3 class="text-2xl font-bold text-primary border-secondary pb-2 mb-4">Backend</h3>
            <div class="flex flex-wrap gap-3">
              <PhpBadge />
              <LaravelBadge />
              <CodeigniterBadge />
              <PythonBadge />
            </div>
          </div>

          <!-- Sección Frameworks/Mobile -->
          <div>
            <h3 class="text-2xl font-bold text-primary border-accent pb-2 mb-4">
              Mobile & Frameworks
            </h3>
            <div class="flex flex-wrap gap-3">
              <FlutterBadge />
              <!-- Agrega otros badges de frameworks aquí -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeigniterBadge from '@/features/home/components/badges/CodeigniterBadge.vue';
import CssBadge from '@/features/home/components/badges/CssBadge.vue';
import FlutterBadge from '@/features/home/components/badges/FlutterBadge.vue';
import HtmlBadge from '@/features/home/components/badges/HtmlBadge.vue';
import JavascriptBadge from '@/features/home/components/badges/JavascriptBadge.vue';
import JqueryBadge from '@/features/home/components/badges/JqueryBadge.vue';
import LaravelBadge from '@/features/home/components/badges/LaravelBadge.vue';
import PhpBadge from '@/features/home/components/badges/PhpBadge.vue';
import PythonBadge from '@/features/home/components/badges/PythonBadge.vue';
import TypescriptBadge from '@/features/home/components/badges/TypescriptBadge.vue';
import VuejsBadge from '@/features/home/components/badges/VuejsBadge.vue';
</script>
