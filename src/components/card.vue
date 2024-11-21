<template>
    <div 
        class="relative rounded-lg p-2 overflow-hidden w-[388px] h-[462px] md:w-[700px] md:h-[500px] lg:w-[400px] lg:h-[340px] xl:w-[600px] xl:h-[340px]" 
        :class="`${cardData.backgroundColor} ${cardData.textColor}`"
    >
        <!-- Contenido dividido en dos columnas -->
        <div class="flex h-full">
            <!-- Primera columna con texto y botones -->
            <div 
                class="basis-1/2 flex flex-col p-4" 
                :class="{
                    'justify-between': cardData.isOnAppStore || cardData.isOnPlayStore,
                    'justify-center': !(cardData.isOnAppStore || cardData.isOnPlayStore)
                }"
            >
                <div>
                    <div v-if="cardData.category" class="inline-block text-sm bg-gray-700 px-2 py-1 rounded-full border border-gray-600">
                        {{ cardData.category }}
                    </div>
                    <h2 class="text-4xl font-semibold mt-4">{{ cardData.title }}</h2>
                </div>

                <div class="flex flex-col" v-if="cardData.isOnAppStore || cardData.isOnPlayStore">
                    <a 
                        v-if="cardData.isOnAppStore && cardData.urlAppStore" 
                        :href="cardData.urlAppStore" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="mb-2"
                    >
                        <img src="../assets/app-store.svg" alt="App Store" class="w-32">
                    </a>
                    <a 
                        v-if="cardData.isOnPlayStore && cardData.urlPlayStore" 
                        :href="cardData.urlPlayStore" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src="../assets/google-play.svg" alt="Google Play" class="w-32">
                    </a>
                </div>
            </div>

            <!-- Imagen del screen (segunda columna) -->
            <div class="basis-1/2 relative">
                <img :src="cardData.image" alt="Screen" class="md:absolute md:right-[10px] md:top-[10px]">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        cardData: {
            type: Object,
            required: true,
            default: () => ({
                title: '',
                image: '',
                category: null,
                isOnPlayStore: false,
                isOnAppStore: false,
                urlPlayStore: null,
                urlAppStore: null,
                backgroundColor: 'bg-gray-800', // Clase predeterminada para el fondo
                textColor: 'text-white', // Clase predeterminada para el texto
            })
        }
    }
}
</script>
