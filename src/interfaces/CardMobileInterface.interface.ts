export interface CardMobileInterface {
  title: string;
  image: string;
  category?: string;
  isOnPlayStore: boolean;
  isOnAppStore: boolean;
  urlPlayStore?: string;
  urlAppStore?: string;
  backgroundColor?: string;
  textColor?: string;
  badges: CardMobileBadge[];
}

interface CardMobileBadge {
  name: string;
  color: string;
  textColor: string;
  icon: string;
}
