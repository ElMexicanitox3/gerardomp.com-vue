import type { CardMobileInterface } from '@/interfaces/CardMobileInterface.interface';

export const projects: CardMobileInterface[] = [
  {
    title: 'WEC',
    image: '/assets/wecmovil.png',
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
    title: 'NoteHub',
    image: '/assets/notehub.png',
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
    title: 'AstroMap',
    image: '/assets/astromap.png',
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
    title: 'SIMAO',
    image: '/assets/simao.png',
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
