import { Layout, Globe, Code2, Rocket, Smartphone, Database, Brain, Award } from 'lucide-react';
import { NavItem, Service, Project, ExperienceItem, ContactInfo } from './types';

// NAVIGATION
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

// CONTACT INFO
export const CONTACT: ContactInfo = {
  email: "castillo.alita@gmail.com",
  linkedin: "https://linkedin.com/in/ale-castillo-LD",
  github: "https://github.com/yourusername",
  location: "Mexico City (CST) — Available Globally"
};

// SERVICES
export const SERVICES: Service[] = [
  {
    title: "Global L&D Program Management & Enablement",
    description: "Development and alignment of training with organizational goals and measuring performance (KPIs).",
    icon: Globe
  },
  {
    title: "AI-Accelerated Instructional Design & Content Transformation",
    description: "Accelerated content development using Generative AI tools to transform complex content (e.g., compliance) into effective learning paths.",
    icon: Brain
  },
  {
    title: "Certification Program Development & Leadership",
    description: "Creation and leadership of formal global certification programs (especially for Sales and BDR teams).",
    icon: Award
  },
  {
    title: "LMS Administration, QA, and System Management",
    description: "LMS administration and virtual spaces, and maintain rigorous Quality Assurance (QA) of all content.",
    icon: Database
  }
];

// PROJECTS
export const PROJECTS: Project[] = [
  {
    id: 13,
    title: "Learning Path Journey",
    category: "Gamification",
    description: "Visual roadmap for employee onboarding and certification progression.",
    image: "https://i.imgur.com/Du2FGUl.png"
  },
  {
    id: 17,
    title: "Product Training: eLab",
    category: "Technical Training",
    description: "Hardware interactive guide highlighting key product features.",
    image: "https://i.imgur.com/CVYi306.png"
  },
  {
    id: 5,
    title: "Mobile Learning",
    category: "Salesforce Training",
    description: "Mobile-first module design for CRM adoption.",
    image: "https://i.imgur.com/E1tyvjb.png"
  },
  {
    id: 3,
    title: "Adolescent Neuroscience",
    category: "Medical Ed",
    description: "Scientific infographic simplifying complex biological processes.",
    image: "https://i.imgur.com/ieS005Y.png"
  },
  {
    id: 9,
    title: "Scenario-Based Assessment",
    category: "Soft Skills",
    description: "Interactive decision-making scenario for workplace harassment training.",
    image: "https://i.imgur.com/GmHXEmH.png"
  },
  {
    id: 1,
    title: "Ale Castillo Extract",
    category: "Professional",
    description: "Experienced Learning & Development professional",
    image: "https://i.imgur.com/FB85Zwk.png"
  },
  {
    id: 7,
    title: "Corporate Roleplay",
    category: "Leadership",
    description: "Animated character dialogue for corporate story telling strategy training.",
    image: "https://i.imgur.com/FAwXsbq.png"
  },
  {
    id: 10,
    title: "Medical Timeline",
    category: "Infographic",
    description: "Process visualization for healthcare procedures.",
    image: "https://i.imgur.com/5rtY2bK.png"
  },
  {
    id: 2,
    title: "Bilingual Welcome Interface",
    category: "Accessibility",
    description: "Language selection for global contents, screen featuring diverse avatars.",
    image: "https://i.imgur.com/nGnHCPy.png"
  },
  {
    id: 16,
    title: "Joint Task Force",
    category: "Compliance",
    description: "Process flow for law enforcement and healthcare collaboration.",
    image: "https://i.imgur.com/Qa6KjuB.png"
  },
  {
    id: 8,
    title: "HIPAA Compliance",
    category: "Healthcare",
    description: "Brand-aligned compliance training start screen.",
    image: "https://i.imgur.com/R8rFYMf.png"
  },
  {
    id: 14,
    title: "Course Objectives",
    category: "Instructional Design",
    description: "Clear, minimalist learning objective presentation.",
    image: "https://i.imgur.com/MfGsZya.png"
  },
  {
    id: 12,
    title: "ACEs Awareness",
    category: "Public Health",
    description: "Iconography-driven slide on Adverse Childhood Experiences.",
    image: "https://i.imgur.com/1nIbUUT.png"
  },
  {
    id: 6,
    title: "Stakeholder Meeting",
    category: "IDB Project",
    description: "Context setting for international development bank training.",
    image: "https://i.imgur.com/H9uUXZ3.png"
  },
  {
    id: 4,
    title: "Mascot Character",
    category: "Engagement",
    description: "Custom 3D-style character for friendly user guidance.",
    image: "https://i.imgur.com/n3eXKak.png"
  },
  {
    id: 11,
    title: "Violence Prevention",
    category: "Safety Training",
    description: "Emotive imagery combined with clear instructional text.",
    image: "https://i.imgur.com/GEojaCz.png"
  },
  {
    id: 15,
    title: "Identification Challenges",
    category: "Social Work",
    description: "Sensitive topic handling through abstract visual design.",
    image: "https://i.imgur.com/mKLkuuN.png"
  },
  
];

// EXPERIENCE
export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "2024 - Present",
    role: "Learning Experience Enablement Programs",
    company: "SOVOS",
    description: "Instructional Design and Content Transformation Leadership, managing the full cycle of Global Enablement and Certification Programs. Drove innovation by utilizing Generative AI to accelerate and enhance content creation, resulting in high-impact learning paths and effective Performance Measurement."
  },
  {
    year: "2017 - 2024",
    role: "E-learning Specialist and Technical Compliance",
    company: "MedTrainer",
    description: "Six years of leadership focused on managing and optimizing the e-learning Course Catalog. Successfully transformed complex compliance medical content into engaging modules, utilizing Generative AI for rapid outline development. Maintained rigorous Quality Control (QA), overseeing LMS management, and strong Stakeholder Collaboration throughout the development lifecycle."
  },
  {
    year: "2016 - 2018",
    role: "Project Manager & LMS Specialist",
    company: "Planet Media / IMSS",
    description: "Team Management and Business Growth: Led a development team, overseeing the planning and creation of training manuals and learning objects. Managed the LMS to successfully deliver 5 full e-learning courses and rebuilt strong customer relationships, which directly led to obtaining more production courses."
  },
  {
    year: "2014 - 2017",
    role: "E-learning Independent Consultant",
    company: "Inter American Development Bank",
    description: "Served as a Lead Consultant, focused on managing and developing virtual spaces on the LMS. Successfully delivered two full e-learning courses, overseeing the project full-cycle from initial narrative conception of materials through to platform integration and reporting."
  }
];