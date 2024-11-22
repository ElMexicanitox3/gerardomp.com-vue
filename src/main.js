import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'; // Importa el archivo de ruta
import './style.css'


const app = createApp(App);

app.use(router); // Agrega Vue Router a tu aplicación
app.mount('#app');
