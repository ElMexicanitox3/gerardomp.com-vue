export interface ExperienceItem {
  dateKey: string;
  roleKey: string;
  companyKey: string;
  descriptionKey?: string;
  tasksKey?: string;
  isCurrent?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    dateKey: 'sections.experience.items.item1.date',
    roleKey: 'sections.experience.items.item1.role',
    companyKey: 'sections.experience.items.item1.company',
    tasksKey: 'sections.experience.items.item1.tasks',
    isCurrent: true,
  },
  {
    dateKey: 'sections.experience.items.item2.date',
    roleKey: 'sections.experience.items.item2.role',
    companyKey: 'sections.experience.items.item2.company',
    tasksKey: 'sections.experience.items.item2.tasks',
  },
  {
    dateKey: 'sections.experience.items.item3.date',
    roleKey: 'sections.experience.items.item3.role',
    companyKey: 'sections.experience.items.item3.company',
    tasksKey: 'sections.experience.items.item3.tasks',
  },
];
