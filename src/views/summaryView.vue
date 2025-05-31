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

        <!-- Badges de tecnologías destacadas -->
        <div class="flex flex-wrap justify-center gap-2 mt-6">
          <FlutterBadge />

          <TypescriptBadge />

          <JavascriptBadge />

          <VuejsBadge />

          <HtmlBadge />

          <CssBadge />

          <JqueryBadge />

          <CodeigniterBadge />

          <LaravelBadge />

          <PhpBadge />
          <div class="badge badge-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            Fullstack Developer
          </div>
          <div class="badge badge-secondary gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            4 años experiencia
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeigniterBadge from '@/components/badges/CodeigniterBadge.vue';
import CssBadge from '@/components/badges/CssBadge.vue';
import FlutterBadge from '@/components/badges/FlutterBadge.vue';
import HtmlBadge from '@/components/badges/HtmlBadge.vue';
import JavascriptBadge from '@/components/badges/JavascriptBadge.vue';
import JqueryBadge from '@/components/badges/JqueryBadge.vue';
import LaravelBadge from '@/components/badges/LaravelBadge.vue';
import PhpBadge from '@/components/badges/PhpBadge.vue';
import TypescriptBadge from '@/components/badges/TypescriptBadge.vue';
import VuejsBadge from '@/components/badges/VuejsBadge.vue';
</script>
