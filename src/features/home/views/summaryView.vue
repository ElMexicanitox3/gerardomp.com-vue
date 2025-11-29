<template>
  <div class="w-full mx-auto px-4 py-6 animate-fade-in">
    <div class="glass-card rounded-3xl h-full p-1">
      <div class="card-body p-6 md:p-10 relative">
        <div class="flex flex-col items-center mb-8">
          <div class="bg-primary/10 p-4 rounded-full mb-4 animate-float">
            <UserIcon class="h-10 w-10 text-primary" />
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-center">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >{{ $t('sections.summary.title') }}</span
            >
          </h2>
        </div>

        <!-- Contenido mejorado -->
        <div class="space-y-6 text-base md:text-lg leading-relaxed text-base-content/80">
          <div
            class="p-6 rounded-2xl bg-base-200/50 border border-base-content/5 hover:bg-base-200/80 transition-colors duration-300"
          >
            <p class="text-justify">
              <span class="font-bold text-primary text-xl block mb-2">{{
                $t('porfileCard.role')
              }}</span>
              {{ $t('sections.summary.p1') }}
            </p>

            <p class="mt-4 text-justify">
              {{ $t('sections.summary.p2') }}
            </p>
          </div>
        </div>

        <div class="divider my-10 opacity-30"></div>

        <div class="flex flex-col items-center mb-8">
          <div
            class="bg-primary/10 p-4 rounded-full mb-4 animate-float"
            style="animation-delay: 1s"
          >
            <SkillsIcon class="h-10 w-10 text-primary" />
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-center">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >{{ $t('sections.skills.title') }}</span
            >
          </h2>
        </div>

        <div class="space-y-10">
          <!-- Sección Frontend -->
          <div class="group">
            <h3
              class="text-2xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 inline-block"
            >
              Frontend
            </h3>
            <div class="flex flex-wrap gap-4">
              <div class="hover-lift"><VuejsBadge /></div>
              <div class="hover-lift"><TypescriptBadge /></div>
              <div class="hover-lift"><JavascriptBadge /></div>
              <div class="hover-lift"><HtmlBadge /></div>
              <div class="hover-lift"><CssBadge /></div>
              <div class="hover-lift"><JqueryBadge /></div>
            </div>
          </div>

          <!-- Sección Backend -->
          <div class="group">
            <h3
              class="text-2xl font-bold text-secondary border-b border-secondary/20 pb-2 mb-6 inline-block"
            >
              Backend
            </h3>
            <div class="flex flex-wrap gap-4">
              <div class="hover-lift"><PhpBadge /></div>
              <div class="hover-lift"><LaravelBadge /></div>
              <div class="hover-lift"><CodeigniterBadge /></div>
              <div class="hover-lift"><PythonBadge /></div>
            </div>
          </div>

          <!-- Sección Frameworks/Mobile -->
          <div class="group">
            <h3
              class="text-2xl font-bold text-accent border-b border-accent/20 pb-2 mb-6 inline-block"
            >
              Mobile & Frameworks
            </h3>
            <div class="flex flex-wrap gap-4">
              <div class="hover-lift"><FlutterBadge /></div>
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
