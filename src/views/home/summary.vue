<template>
    <div class="w-full max-w-screen-xl bg-gray-100 rounded-lg p-6 text-center mb-12">
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
                    <i class="fab fa-github fa-lg"></i>
                </a>
                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/gerardomatadama/" target="_blank" class="hover:text-gray-600">
                    <i class="fab fa-linkedin fa-lg"></i>
                </a>

                <!-- Correo -->
                <a href="mailto:gerardo.matadama@gmail.com" class="hover:text-gray-600">
                    <i class="fas fa-envelope fa-lg"></i>
                </a>
            </div>


        </div>
        
        <a href="https://drive.google.com/file/d/16mluTdRpH3su6VM1G_r1Sa_4EhNlNSs6/view?usp=sharing" target="_blank" class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            <i class="fa-solid fa-file-pdf"></i> Descargar CV
        </a>
    </div>
</template>
<script>

export default {
    name: 'Summary',
}
</script>
<style lang="">
    
</style>