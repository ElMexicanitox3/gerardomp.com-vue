<template>
    <div class="w-full max-w-(--breakpoint-xl) bg-gray-100 rounded-lg p-6 text-center mb-12">
        <h2 class="text-xl font-semibold mb-2">Resumen</h2>

        <p class="text-gray-700 mb-2">
            Desarrollador Fullstack con más de 4 años de experiencia, especializado en el desarrollo de aplicaciones web y móviles. Experto en lenguajes de programación y frameworks como CodeIgniter, Laravel, Dart y Flutter, enfocado en la creación de soluciones eficientes y de alta calidad. Con experiencia en el uso de tecnologías en la nube como Firebase, Google Cloud Platform y Oracle Cloud para mejorar la escalabilidad y rendimiento de las aplicaciones.
        </p>

        <div class="flex flex-col items-center p-4 rounded-lg mb-2 mt-2">
            <h3 class="text-lg font-semibold mb-2">Redes Sociales</h3>

            <!-- Social Links -->
            <div class="flex space-x-10 text-gray-800">
                <!-- GitHub -->
                <a href="https://github.com/ElMexicanitox3" target="_blank" class="hover:text-gray-600">
                    <FontAwesomeIcon :icon="['fab', 'github']" class="h-6 w-6"/>
                </a>
                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/gerardomatadama/" target="_blank" class="hover:text-gray-600">
                    <FontAwesomeIcon :icon="['fab', 'linkedin']" class="h-6 w-6"/>
                </a>
                <!-- Correo -->
                <a href="mailto:gerardo.matadama@gmail.com" class="hover:text-gray-600">
                    <FontAwesomeIcon icon="envelope" class="h-6 w-6"/>
                </a>
            </div>
        </div>
        
        <a href="https://drive.google.com/..." target="_blank" 
            class="bg-gray-800 text-white px-4 py-2 rounded-sm hover:bg-gray-700 inline-flex items-center justify-center">
            <FontAwesomeIcon :icon="['fas', 'file-pdf']" class="mr-2 h-4 w-4"/>
            Descargar CV
        </a>
        
    </div>
</template>

<script>

export default {
    name: 'Summary',
}
</script>