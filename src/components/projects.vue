<template>
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
            },
            {
                title: "NoteHub",
                image: "../src/assets/notehub/1.png",
                category: "Utilities",
            },
            {
                title: "AstroMap",
                image: "../src/assets/astromap/1.png",
                category: "Finance",
            },
            {
                title: "SIMAO",
                image: "../src/assets/simao/1.png",
                category: "Finance",
                isOnPlayStore: true,
                urlPlayStore: "https://play.google.com/store/apps/details?id=com.simao",
            },
            ],
        };
    },

};
</script>
