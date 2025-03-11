import { createApp } from 'vue';
import App from './App.vue';

import { library, config } from '@fortawesome/fontawesome-svg-core'

import { 
  faEnvelope,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons'

import { 
  faGithub, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



import router from './router/router'; // Importa el archivo de ruta
import './style.css'

// Evita auto-inyectar CSS en el head
config.autoAddCss = false
library.add(faEnvelope, faFilePdf, faGithub, faLinkedin)

const app = createApp(App);

app.use(router); // Agrega Vue Router a tu aplicación
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app');
