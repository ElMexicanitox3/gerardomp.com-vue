import profileImg from '@/assets/porfile.jpg';

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  iconComponent: string;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'address';
  value: string;
  displayValue?: string;
  url?: string;
  iconComponent: string;
}

export const profileData = {
  name: 'Gerardo Matadama Peralta',
  roleKey: 'porfileCard.role', // Translation key
  avatar: profileImg,
  contact: [
    {
      type: 'email',
      value: 'gerardo.matadama@gmail.com',
      url: 'mailto:gerardo.matadama@gmail.com',
      iconComponent: 'EmailIcon',
    },
    {
      type: 'phone',
      value: '7443828011',
      url: 'tel:+527443828011',
      iconComponent: 'PhoneIcon',
    },
    {
      type: 'address',
      value: 'CDMX, Mexico',
      displayValue: 'CDMX, Mexico',
      iconComponent: 'PinIcon',
    },
  ] as ContactInfo[],
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/ElMexicanitox3',
      username: 'ElMexicanitox3',
      iconComponent: 'GithubIcon',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gerardomatadama/',
      username: 'in/gerardomatadama',
      iconComponent: 'LinkedinIcon',
    },
  ] as SocialLink[],
};
