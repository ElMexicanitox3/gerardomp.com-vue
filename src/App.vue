<script setup lang="js">
import Card from './components/card.vue';
import Porfile from './components/porfile.vue';
import Summary from './components/summary.vue';
</script>


<template>
  <div class="flex flex-col items-center p-8 bg-gray-50">

    <!-- Porfile photo and name -->
    <Porfile />

    <!-- summary -->
    <Summary />
    

    <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
      <Card/>
      <Card/>
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
