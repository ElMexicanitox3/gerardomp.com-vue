import { createI18n } from 'vue-i18n';

const messages = {
  es: {
    porfileCard: {
      role: 'Desarrollador Fullstack',
      email: 'Correo Electronico',
      phone: 'Telefono',
      address: 'Direccion',
    },
    itemsNavbar: {
      summary: 'Resumen',
      projects: 'Proyectos',
    },
  },

  en: {
    porfileCard: {
      role: 'Fullstack Developer',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Address',
    },
    itemsNavbar: {
      summary: 'Summary',
      projects: 'Projects',
    },
  },
};

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages,
});

export default i18n;
