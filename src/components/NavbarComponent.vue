<template>
  <div class="navbar bg-base-200 flex-shrink-0 sticky top-0 lg:top-0 z-10 rounded-2xl">
    <div class="flex-1 text-lg sm:text-xl font-semibold ml-2">
      <div class="inline-block">
        <h2 class="text-2xl font-bold">{{ $t(`itemsNavbar.${currentTitle}`) }}</h2>
        <div class="h-1 w-full mt-1" style="background-color: var(--color-primary)"></div>
      </div>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li v-for="item in menuItems" :key="item">
          <a
            class="text-sm sm:text-base"
            :class="{ 'text-primary font-semibold': currentTitle === item }"
            @click="(setCurrentTitle(item), customScrollTo(`#${item}`))"
          >
            {{ $t(`itemsNavbar.${item}`) }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Definimos las opciones del menú como array
const menuItems = ['summary', 'projects'] as const;
type MenuItem = (typeof menuItems)[number];

interface NavbarComponentProps {
  initialTitle?: MenuItem;
}

const props = withDefaults(defineProps<NavbarComponentProps>(), {
  initialTitle: 'summary',
});

const currentTitle = ref<MenuItem>(props.initialTitle);

const setCurrentTitle = (title: MenuItem) => {
  currentTitle.value = title;
};

function customScrollTo(tag: string) {
  const element = document.querySelector(tag);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Scroll Spy Implementation
const sectionObserver = ref<IntersectionObserver | null>(null);

onMounted(() => {
  sectionObserver.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const sectionId = entry.target.id as MenuItem;
          if (menuItems.includes(sectionId)) {
            currentTitle.value = sectionId;
          }
        }
      });
    },
    {
      threshold: [0.1, 0.5, 0.9],
      rootMargin: '0px 0px -50% 0px',
    },
  );

  // Observar todas las secciones del menú
  menuItems.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      sectionObserver.value?.observe(section);
    }
  });
});

onUnmounted(() => {
  sectionObserver.value?.disconnect();
});
</script>
