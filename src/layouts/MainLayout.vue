<script setup lang="ts">
import EmailIcon from '@/icons/emailIcon.vue';
import PhoneIcon from '@/icons/phoneIcon.vue';
import PinIcon from '@/icons/pinIcon.vue';
import GithubIcon from '@/icons/githubIcon.vue';
import LinkedinIcon from '@/icons/linkedinIcon.vue';

import NavbarComponent from '@/components/NavbarComponent.vue';
import ProjectsView from '@/views/projectsView.vue';
import SummaryView from '@/views/summaryView.vue';

import { onBeforeUnmount, onMounted, ref } from 'vue';
import { MenuItem, type MenuOptions } from '@/interfaces/navbarItems.interfaces';
import LangComponent from '@/components/LangComponent.vue';

const sections: MenuOptions[] = [
  {
    id: 'summary',
    title: MenuItem.summery,
  },
  {
    id: 'projects',
    title: MenuItem.projects,
  },
];

const currentTitle = ref('summary');
const navbarHeight = 64; // Ajusta según la altura real de tu navbar

const handleScroll = () => {
  const scrollPosition = window.scrollY + navbarHeight;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i].id);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentTitle.value = sections[i].title;
        break;
      }
    }
  }
};

const handleSectionClick = (sectionId: string) => {
  const element = document.getElementById(sectionId);
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
          <div class="card bg-base-200 shadow-lg h-full">
            <div class="flex flex-col h-full p-4 sm:p-6">
              <!-- Avatar -->
              <div class="flex flex-col items-center justify-center pt-2 sm:pt-6">
                <div class="avatar rounded-2xl p-1 sm:p-2 shadow-md">
                  <div class="w-24 sm:w-40 rounded-xl overflow-hidden">
                    <img
                      src="@/assets/porfile.jpg"
                      class="hover:scale-105 transition-transform duration-300"
                      alt="Profile photo"
                    />
                  </div>
                </div>
                <!-- Nombre -->
                <div class="flex-1 flex flex-col items-center justify-center pt-4 sm:pt-6 px-2">
                  <div class="text-center">
                    <h2 class="2xl:text-2xl xl:text-[20px] font-bold truncate">
                      Gerardo Matadama Peralta
                    </h2>
                  </div>
                  <div class="pt-1 sm:pt-2">
                    <span class="badge badge-outline text-xs sm:text-sm">{{
                      $t('porfileCard.role')
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Divider -->
              <div class="divider w-2/3 mx-auto my-2 sm:my-4"></div>

              <ul class="list rounded-box flex flex-col gap-2 mx-auto">
                <li class="list-row">
                  <div>
                    <EmailIcon class="size-10" />
                  </div>
                  <div class="list-col-grow">
                    <a href="mailto:gerardo.matadama@gmail.com">
                      <div>{{ $t('porfileCard.email') }}</div>
                      <div class="text-xs font-semibold opacity-60">gerardo.matadama@gmail.com</div>
                    </a>
                  </div>
                </li>
                <li class="list-row">
                  <div>
                    <PhoneIcon class="size-10" />
                  </div>
                  <div class="list-col-grow">
                    <a href="tel:+527443828011">
                      <div>{{ $t('porfileCard.phone') }}</div>
                      <div class="text-xs font-semibold opacity-60">7443828011</div>
                    </a>
                  </div>
                </li>
                <li class="list-row">
                  <div>
                    <PinIcon class="size-10" />
                  </div>
                  <div class="list-col-grow">
                    <div>{{ $t('porfileCard.address') }}</div>
                    <div class="text-xs font-semibold opacity-60">Chihuahua, Mexico</div>
                  </div>
                </li>
              </ul>

              <div class="divider w-2/3 mx-auto my-2 sm:my-4"></div>

              <!-- Socials -->
              <ul class="list rounded-box flex flex-col gap-2 mx-auto">
                <li class="list-row">
                  <div>
                    <GithubIcon class="size-10" />
                  </div>
                  <div class="list-col-grow">
                    <a href="https://github.com/ElMexicanitox3">
                      <div>GitHub</div>
                      <div class="text-xs font-semibold opacity-60">ElMexicanitox3</div>
                    </a>
                  </div>
                </li>
                <li class="list-row">
                  <div>
                    <LinkedinIcon class="size-10" />
                  </div>
                  <div class="list-col-grow">
                    <a href="https://www.linkedin.com/in/gerardomatadama/">
                      <div>Linkedin</div>
                      <div class="text-xs font-semibold opacity-60">in/gerardomatadama</div>
                    </a>
                  </div>
                </li>
              </ul>

              <LangComponent />
            </div>
          </div>
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
              <ProjectsView id="projects" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
