<template>
    <div class="flex flex-col items-center p-8 bg-gray-50">
        <!-- Ahora debería imprimirse Porfile -->
        <Porfile />

        <!-- Summary -->
        <Summary />

        <!-- Proyectos -->
        <Projects />
    </div>
</template>

<script>
import Porfile from './porfile.vue';
import Summary from './summary.vue';
import Projects from './projects.vue';

export default {
    name: 'Home',
    components: {
        Porfile,
        Summary,
        Projects,
    },
};
</script>
