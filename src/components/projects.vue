<template>
    <h1 class="lg:text-5xl md:text-3xl font-bold mb-8">Proyectos</h1>

    <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
        <Card
            v-for="(project, index) in projects"
            :key="index"
            :cardData="project"
        />
    </div>
</template>
<script>
import Card from './card.vue';

export default {
    name: 'Projects',
    components: {
        Card, // Registra el componente
    },
    data() {
        return {
            projects: [
                {
                    title: "WEC",
                    image: "../src/assets/wec_movil/1.png",
                    backgroundColor: 'bg-neutral-950', // Clase predeterminada para el fondo
                    textColor: 'text-white',
                },
                {
                    title: "NoteHub",
                    image: "../src/assets/notehub/1.png",
                    backgroundColor: 'bg-amber-400', // Clase predeterminada para el fondo
                    textColor: 'text-black',
                },
                {
                    title: "AstroMap",
                    image: "../src/assets/astromap/1.png",
                    backgroundColor: 'bg-neutral-950', // Clase predeterminada para el fondo
                    textColor: 'text-white',
                },
                {
                    title: "SIMAO",
                    image: "../src/assets/simao/1.png",
                    isOnPlayStore: true,
                    urlPlayStore: "https://play.google.com/store/apps/details?id=app.simao",
                    backgroundColor: 'bg-blue-500', // Clase predeterminada para el fondo
                    textColor: 'text-white',
                },
            ],
        };
    },

};
</script>
