import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ComparisonPoint {
  feature: string;
  others: string;
  urban: string;
}