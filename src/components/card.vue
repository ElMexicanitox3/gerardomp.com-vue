<template>
    <div class="relative bg-gray-800 text-white rounded-lg w-[600px] h-[340px] p-4 overflow-hidden">
        <!-- Contenido dividido en dos columnas -->
        <div class="flex h-full">
            <!-- Primera columna con texto y botones -->
            <div class="basis-1/2 flex flex-col justify-between p-4">
                <div>
                    <div class="inline-block text-sm bg-gray-700 px-2 py-1 rounded-full border border-gray-600">Prayers</div>
                    <h2 class="text-4xl font-semibold mt-4">Beyt</h2>
                </div>
                <div class="flex flex-col">
                    <img src="../assets/app-store.svg" alt="App Store" class="w-32 mb-2">
                    <img src="../assets/google-play.svg" alt="Google Play" class="w-32">
                </div>
            </div>

            <!-- Imagen del screen (segunda columna) -->
            <div class="basis-1/2 relative">
                <img src="../assets/1.png" alt="Screen" class="absolute right-[10px] top-[10px]">
            </div>
        </div>
    </div>
</template>




<script>
export default {
    name: 'Card'
}
</script>