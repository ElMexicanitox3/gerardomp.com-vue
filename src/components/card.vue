<template>
    <div class="bg-gray-800 text-white rounded-lg w-[600px] h-[340px] p-4">
        <!-- Dividir en 2 -->
        <div class="flex flex-row h-full">
            <!-- Primera columna con espacio alrededor de cada elemento -->
            <div class="basis-1/2 flex flex-col justify-between p-4">
                <div>
                    <div class="inline-block text-sm bg-gray-700 px-2 py-1 rounded-full border border-gray-600">Prayers</div>
                    <h2 class="text-4xl font-semibold mt-4">Beyt</h2>
                </div>
                <div class="flex flex-col justify-start">
                    <img src="../assets/app-store.svg" alt="App Store" class="w-32 mb-2">
                    <img src="../assets/google-play.svg" alt="Google Play" class="w-32">
                </div>
            </div>
            
            <div class="basis-1/2 flex items-center justify-center">
                
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Card'
}
</script>