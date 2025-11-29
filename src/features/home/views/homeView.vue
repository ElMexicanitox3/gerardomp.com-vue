<script setup lang="ts">
import NavbarComponent from '@/features/home/components/NavbarComponent.vue';
import ProjectsView from '@/features/home/views/projectsView.vue';
import SummaryView from '@/features/home/views/summaryView.vue';
import ExperienceView from '@/features/home/views/ExperienceView.vue';
import ProfileCard from '@/features/home/components/ProfileCard.vue';

import { onBeforeUnmount, onMounted, ref } from 'vue';

const sections: string[] = ['summary', 'experience', 'projects'];

const currentTitle = ref(sections[0]);
const navbarHeight = 64; // Ajusta según la altura real de tu navbar

const handleScroll = () => {
  const scrollPosition = window.scrollY + navbarHeight;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentTitle.value = sections[i];
        break;
      }
    }
  }
};

const handleSectionClick = (section: string) => {
  console.log('handleSectionClick', section);
  const element = document.getElementById(section);
  if (element) {
    const rect = element.getBoundingClientRect();
    const customOffset = 15;
    const scrollPosition = window.scrollY + navbarHeight;
    const offset = rect.top + scrollPosition - navbarHeight - customOffset;
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
    // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    currentTitle.value = section;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Para el estado inicial
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="min-h-screen flex items-center">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full">
      <!-- Cambiamos a flex-col en móvil y flex-row en desktop -->
      <div class="flex flex-col lg:flex-row gap-4 h-full">
        <!-- Primera tarjeta - Full width en móvil, 1/4 en desktop -->
        <div class="w-full lg:w-1/4 h-auto lg:h-[calc(100vh-4rem)] lg:sticky lg:top-0 order-first">
          <ProfileCard />
        </div>

        <!-- Segunda tarjeta - Full width en móvil, 3/4 en desktop -->
        <div class="w-full lg:w-3/4 h-full order-last lg:order-none">
          <div class="card bg-base-200 shadow-sm h-full flex flex-col">
            <!-- Navbar sticky con ajuste responsivo -->
            <NavbarComponent
              :current-title="currentTitle"
              @section-click="handleSectionClick"
              :menu-items="sections"
            />
            <!-- Router View -->
            <div class="flex-1 overflow-hidden">
              <!-- <router-view /> -->
              <SummaryView id="summary" />
              <ExperienceView id="experience" />
              <ProjectsView id="projects" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
