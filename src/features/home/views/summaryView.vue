<template>
  <div class="w-full mx-auto px-4 py-6">
    <div class="card bg-base-100 shadow-lg h-full">
      <div class="card-body p-6 md:p-8 relative">
        <div class="flex flex-col items-center">
          <div class="bg-primary/10 p-3 rounded-full mb-3">
            <UserIcon class="h-8 w-8 text-primary" />
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
            <SkillsIcon class="h-8 w-8 text-primary" />
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
import UserIcon from '@/assets/icons/UserIcon.vue';
import SkillsIcon from '@/assets/icons/SkillsIcon.vue';
</script>
