
import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export interface PricePlan {
  name: string;
  points: number;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ShowcaseImage {
  url: string;
  alt: string;
}
