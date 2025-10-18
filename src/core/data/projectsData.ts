import type { ProjectInformation } from '@/core/interface/projectInformation.interface';

export const projects: ProjectInformation[] = [
  {
    name: 'WEC',
    description: 'WEC Movil',
    screenImage: '/assets/wecmovil.png',
    backgroundColor: 'bg-neutral-950',
    textColor: 'text-white',
    badges: [
      {
        name: 'Flutter',
        color: 'dark:bg-gray-700 border-white-400',
        textColor: 'dark:text-white-400',
        icon: 'fa-brands fa-flutter mr-1',
      },
    ],
    isOnPlayStore: false,
    isOnAppStore: false,
  },
  {
    name: 'NoteHub',
    hasPrivacyPolicy: true,
    description:
      'NoteHub descropction, Id officia occaecat cillum amet est qui laborum esse id veniam eiusmod.',
    screenImage: '/assets/notehub.png',
    backgroundColor: 'bg-amber-400',
    textColor: 'text-black',
    isOnPlayStore: true,
    urlPlayStore: 'https://play.google.com/store/apps/details?id=com.gerardomp.NoteHub',
    badges: [
      {
        name: 'Flutter',
        color: 'dark:bg-white-300 border-gray-950',
        textColor: 'dark:text-white-950',
        icon: 'fa-brands fa-flutter mr-1',
      },
    ],
    isOnAppStore: false,
  },
  {
    name: 'AstroMap',
    screenImage: '/assets/astromap.png',
    backgroundColor: 'bg-neutral-950',
    textColor: 'text-white',
    badges: [
      {
        name: 'Flutter',
        color: 'dark:bg-gray-700 border-white-400',
        textColor: 'dark:text-white-400',
        icon: 'fa-brands fa-flutter mr-1',
      },
    ],
    isOnPlayStore: false,
    isOnAppStore: false,
  },
  {
    name: 'SIMAO',
    description:
      'description: **Proyecto: SIMAO**\n\nSistema Integral de Mantenimiento, Administración y Operaciones de Obras.',
    screenImage: '/assets/simao.png',
    isOnPlayStore: true,
    urlPlayStore: 'https://play.google.com/store/apps/details?id=app.simao',
    backgroundColor: 'bg-blue-500',
    textColor: 'text-white',
    badges: [
      {
        name: 'Flutter',
        color: 'dark:bg-gray-700 border-white-400',
        textColor: 'dark:text-white-400',
        icon: 'fa-brands fa-flutter mr-1',
      },
    ],
    isOnAppStore: false,
  },
];
