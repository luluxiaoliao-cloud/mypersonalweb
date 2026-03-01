// Shared types used by both content.ts (local data) and Sanity (CMS data).

export type HeroData = {
  greeting: string;
  titles: string[];
};

export type SkillsData = {
  skills: string;
  highlights: string[];
};

export type PhotoData = {
  src: string;
  alt: string;
  direction: 'top' | 'bottom' | 'left' | 'right';
};

export type AboutData = {
  image: string;
  imageAlt: string;
  text: string;
  photos?: PhotoData[]; // New property for photos - optional for backward compatibility
};

export type ContactEntry = {
  type: string;
  value: string;
  href: string;
};

export type Experience = {
  title: string;
  image: string;
  techStack: string[];
  href?: string;
};

export type ExperienceCategory = {
  category: string;
  projects: Experience[];
};

export type Certificate = {
  title: string;
  image: string;
  description: string;
  date: string;
  href?: string;
};

export type CertificateCategory = {
  category: string;
  certificates: Certificate[];
};

export type SiteData = {
  hero: HeroData;
  skills: SkillsData;
  about: AboutData;
  contact: ContactEntry[];
  experienceCategories: ExperienceCategory[];
  certificateCategories: CertificateCategory[];
};
