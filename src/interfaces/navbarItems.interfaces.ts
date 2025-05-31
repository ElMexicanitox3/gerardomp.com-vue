export enum MenuItem {
  summary = 'summary',
  projects = 'projects',
}

export interface MenuOptions {
  id: string;
  title: MenuItem;
}
