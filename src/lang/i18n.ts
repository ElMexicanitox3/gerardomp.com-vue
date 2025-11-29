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
      experience: {
        title: 'Experiencia',
        items: {
          item1: {
            date: 'Febrero 2025 - Presente. Acapulco, Guerrero',
            role: 'Desarrollador Móvil',
            company: 'JFerrer MX',
            tasks: [
              'Recopilación y análisis de requerimientos con el cliente, para garantizar soluciones alineadas a sus necesidades.',
              'Optimización y mantenimiento del sistema, logrando un mayor rendimiento, mejora de la experiencia de usuario y nuevas funcionalidades.',
              'Pruebas unitarias con Mockito, mejorando la calidad y confiabilidad del código.',
              'Despliegue de aplicaciones en Google Play, cumpliendo con los lineamientos de publicación.',
            ],
          },
          item2: {
            date: 'Marzo 2022 - Febrero 2025. Chilpancingo, Guerrero',
            role: 'Desarrollador Móvil',
            company: 'Zaynetcero S.A.S. de C.V.',
            tasks: [
              'Desarrollo de aplicaciones móviles con Flutter (Android e iOS).',
              'Desarrollo de API REST en PHP que centralizó procesos críticos como la gestión del personal, tareas, inventario y reportes, mejorando la eficiencia operativa.',
              'Implementación de notificaciones push con Firebase Cloud Messaging e integracion de la API con un bucket en Oracle Cloud, para mejorar la gestión de archivos.',
              'Implementación del patrón Bloc en Flutter, asegurando una arquitectura escalable, mantenible y eficiente para agregar nuevas features.',
            ],
          },
          item3: {
            date: 'Enero 2021 - Febrero 2022. Chilpancingo, Guerrero',
            role: 'Desarrollador FullStack',
            company: 'Zaynetcero S.A.S. de C.V.',
            tasks: [
              'Implementación de bucket en Oracle Cloud y automatización de la migración de imágenes en batch mediante Python.',
              'Uso de Google Cloud Platform para la administración de APIs y la gestión de facturación.',
              'Mantenimiento y construccion de nuevas funcionalidades.',
            ],
          },
        },
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
      experience: {
        title: 'Experience',
        items: {
          item1: {
            date: 'February 2025 - Present. Acapulco, Guerrero',
            role: 'Mobile Developer',
            company: 'JFerrer MX',
            tasks: [
              'Gathered and analyzed requirements with the client to ensure solutions aligned with their needs.',
              'Optimized and maintained the system, achieving higher performance, improved user experience, and new features.',
              'Conducted unit testing using Mockito, improving code quality and reliability.',
              'Deployed applications to Google Play, complying with publication guidelines.',
            ],
          },
          item2: {
            date: 'March 2022 - February 2025. Chilpancingo, Guerrero',
            role: 'Mobile Developer',
            company: 'Zaynetcero S.A.S. de C.V.',
            tasks: [
              'Developed mobile applications using Flutter (Android and iOS).',
              'Developed a REST API in PHP that centralized critical processes such as personnel management, tasks, inventory, and reports, improving operational efficiency.',
              'Implemented push notifications with Firebase Cloud Messaging and integrated the API with an Oracle Cloud bucket to improve file management.',
              'Implemented the BLoC pattern in Flutter, ensuring a scalable, maintainable, and efficient architecture for adding new features.',
            ],
          },
          item3: {
            date: 'January 2021 - February 2022. Chilpancingo, Guerrero',
            role: 'Full Stack Developer',
            company: 'Zaynetcero S.A.S. de C.V.',
            tasks: [
              'Implemented an Oracle Cloud bucket and automated batch image migration using Python.',
              'Used Google Cloud Platform for API administration and billing management.',
              'Maintained existing systems and built new functionalities.',
            ],
          },
        },
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
