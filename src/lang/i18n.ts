import { createI18n } from 'vue-i18n';

const messages = {
  es: {
    porfileCard: {
      role: 'Desarrollador Fullstack',
      email: 'Correo Electronico',
      phone: 'Telefono',
      address: 'Direccion',
    },
    sections: {
      summary: {
        title: 'Resumen',
        p1: 'con más de 4 años de experienciaespecializado en desarrollo de aplicaciones web y mobile. Expertoen tecnologías como Flutter, Dart, Laravel, y CodeIgniter, con dominio enimplementación de soluciones en la nube (Firebase, Google Cloud Platform, OracleCloud).',
        p2: 'Cuento con experiencia completa en el ciclo de vida del software, desde requisitoshasta mantenimiento, entregando soluciones alineadas a las necesidades del cliente. Hepublicado aplicaciones móviles en Google Play Store y Apple App Store, e implementadopasarelas de pago como OpenPay BBVA.',
      },
      skills: {
        title: 'Habilidades Técnicas',
      },
      projects: {
        title: 'Proyectos',
      },
    },
  },

  en: {
    porfileCard: {
      role: 'Fullstack Developer',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Address',
    },
    sections: {
      summary: {
        title: 'Summary',
        p1: 'With over 4 years of experience specializing in web and mobile application development. Expert in technologies like Flutter, Dart, Laravel, and CodeIgniter, with proficiency in cloud solutions implementation (Firebase, Google Cloud Platform, Oracle Cloud).',
        p2: `I have comprehensive experience across the entire software development lifecycle, from requirements gathering to maintenance, delivering solutions aligned with client needs. I've published mobile applications on Google Play Store and Apple App Store, and implemented payment gateways like OpenPay BBVA.`,
      },
      skills: {
        title: 'Technical Skills',
      },
      projects: {
        title: 'Projects',
      },
    },
  },
};

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages,
});

export default i18n;
