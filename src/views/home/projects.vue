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
                    image: "/assets/wecmovil.png",
                    backgroundColor: 'bg-neutral-950', // Clase predeterminada para el fondo
                    textColor: 'text-white',
                    badges: [
                        {
                            name: 'Flutter',
                            color: 'dark:bg-gray-700 border-white-400',
                            textColor: 'dark:text-white-400 ',
                            icon: 'fa-brands fa-flutter mr-1',
                        }
                    ], // Agrega los badges aquí
                },
                {
                    title: "NoteHub",
                    image: "/assets/notehub.png",
                    backgroundColor: 'bg-amber-400', // Clase predeterminada para el fondo
                    textColor: 'text-black',
                    isOnPlayStore: true,
                    urlPlayStore: "https://play.google.com/store/apps/details?id=com.gerardomp.NoteHub",
                    badges: [
                        {
                            name: 'Flutter',
                            color: 'dark:bg-white-300 border-gray-950',
                            textColor: 'dark:text-white-950 ',
                            icon: 'fa-brands fa-flutter mr-1',
                        }
                    ], 
                },
                {
                    title: "AstroMap",
                    image: "/assets/astromap.png",
                    backgroundColor: 'bg-neutral-950', // Clase predeterminada para el fondo
                    textColor: 'text-white',
                    badges: [
                        {
                            name: 'Flutter',
                            color: 'dark:bg-gray-700 border-white-400',
                            textColor: 'dark:text-white-400 ',
                            icon: 'fa-brands fa-flutter mr-1',
                        }
                    ], 
                },
                {
                    title: "SIMAO",
                    image: "/assets/simao.png",
                    isOnPlayStore: true,
                    urlPlayStore: "https://play.google.com/store/apps/details?id=app.simao",
                    backgroundColor: 'bg-blue-500', // Clase predeterminada para el fondo
                    textColor: 'text-white',
                    badges: [
                        {
                            name: 'Flutter',
                            color: 'dark:bg-gray-700 border-white-400',
                            textColor: 'dark:text-white-400 ',
                            icon: 'fa-brands fa-flutter mr-1',
                        }
                    ], 
                },
            ],
        };
    },

};
</script>
