<script setup lang="js">
import Porfile from './components/porfile.vue';
import Summary from './components/summary.vue';
</script>


<template>
  <div class="flex flex-col items-center p-8 bg-gray-50">

    <!-- Porfile photo and name -->
    <Porfile />

    <!-- summary -->
    <Summary />
    

    <!-- Proyectos -->
    <div class="w-full max-w-2xl text-center">
      <h2 class="text-2xl font-semibold mb-6">Proyectos</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Proyecto 1 -->
        <div class="bg-gray-800 text-white rounded-lg p-6 flex items-center justify-center h-48">
          <p class="text-2xl font-bold">WEC</p>
        </div>
        <!-- Proyecto 2 -->
        <div class="bg-yellow-500 text-gray-900 rounded-lg p-6 flex items-center justify-center h-48">
          <p class="text-2xl font-bold">NoteHub</p>
        </div>
      </div>
    </div>

    
  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
