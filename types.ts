import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description?: string;
  image: string;
  techStack?: string[];
  link?: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}