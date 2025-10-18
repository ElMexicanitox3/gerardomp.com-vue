import type { Project } from '@/core/interface/project.interface';

export interface ProjectInformation extends Project {
  contentMd?: string;
  category?: string;
  hasPrivacyPolicy?: boolean;
  isOnPlayStore: boolean;
  isOnAppStore: boolean;
  urlPlayStore?: string;
  urlAppStore?: string;
  backgroundColor?: string;
  textColor?: string;
  gallery?: string[];
  badges: Badge[];
}

export interface Badge {
  name: string;
  color: string;
  textColor: string;
  icon: string;
}
