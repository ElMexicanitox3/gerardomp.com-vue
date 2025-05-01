<script setup lang="ts">
import EmailIcon from '@/icons/emailIcon.vue';
import PhoneIcon from '@/icons/phoneIcon.vue';
import PinIcon from '@/icons/pinIcon.vue';
import GithubIcon from '@/icons/githubIcon.vue';
import LinkedinIcon from '@/icons/linkedinIcon.vue';
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
                      src="https://scontent.fmex18-1.fna.fbcdn.net/v/t39.30808-6/312432910_5862690763755114_2636458681651548094_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sGRPKn6Fk1AQ7kNvwFRV1CG&_nc_oc=Admw-dFZJis7GDi3XVH4VcKXFySONVPTA5VeCLUjemNgryXvfBjCkdNCo53HO8CV3Q1Ss_201NmurdzS4Fvj_106&_nc_zt=23&_nc_ht=scontent.fmex18-1.fna&_nc_gid=aRHnOnKriQrBr9NzwD_zWw&oh=00_AfFCgBn5PhceAx3CLyWogosRI7DJ7rD0ebv9njGSgc6dpw&oe=680B2E05"
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
                    <span class="badge badge-outline text-xs sm:text-sm"
                      >Desarrollador Fullstack</span
                    >
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
                      <div>Correo Electronico</div>
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
                      <div>Telefono</div>
                      <div class="text-xs font-semibold opacity-60">7443828011</div>
                    </a>
                  </div>
                </li>
                <li class="list-row">
                  <div>
                    <PinIcon class="size-10" />
                  </div>
                  <div class="list-col-grow">
                    <div>Direccion</div>
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
            </div>
          </div>
        </div>

        <!-- Segunda tarjeta - Full width en móvil, 3/4 en desktop -->
        <div class="w-full lg:w-3/4 h-full order-last lg:order-none">
          <div class="card bg-base-100 shadow-sm h-full flex flex-col">
            <!-- Navbar sticky con ajuste responsivo -->
            <div class="navbar bg-base-100 shadow-sm flex-shrink-0 sticky top-0 lg:top-0 z-10">
              <div class="flex-1">
                <a class="btn btn-ghost text-lg sm:text-xl">Resumen</a>
              </div>
              <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                  <li><a class="text-sm sm:text-base">Link</a></li>
                  <li>
                    <details>
                      <summary class="text-sm sm:text-base">Menú</summary>
                      <ul class="bg-base-100 rounded-t-none p-2">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Contenido scrollable con ajustes responsivos -->
            <div class="flex-1 overflow-y-auto p-3 sm:p-4">
              <div
                v-for="i in 50"
                :key="i"
                class="mb-3 sm:mb-4 p-2 sm:p-3 border-b text-sm sm:text-base"
              >
                Elemento {{ i }} - Contenido de ejemplo para demostrar el scroll
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
