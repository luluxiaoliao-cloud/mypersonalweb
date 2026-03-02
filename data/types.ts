// Shared types used by both content.ts (local data) and Sanity (CMS data).

export type HeroData = {
  greeting: string;
  titles: string[];
};

export type SkillDetail = {
  category: string;
  items: string[];
};

export type SkillsData = {
  skills: string;
  highlights: string[];
  details: SkillDetail[];
};

export type PhotoData = {
  src: string;
  alt: string;
  direction: 'top' | 'bottom' | 'left' | 'right';
};

export type Hobby = {
  name: string;
  description?: string;
  image?: string;
  images?: string[];
};

export type AboutData = {
  image: string;
  imageAlt: string;
  text: string;
  photos?: PhotoData[]; // New property for photos - optional for backward compatibility
  hobbies?: Hobby[];
};

export type ContactEntry = {
  type: string;
  value: string;
  href: string;
};

export type Experience = {
  title: string;
  titleEn?: string;
  image?: string;
  images?: string[];
  techStack: string[];
  href?: string;
  description?: string;
  descriptionEn?: string;
  date?: string;
  company?: string;
  companyEn?: string;
};

export type ExperienceCategory = {
  category: string;
  projects: Experience[];
};

export type Certificate = {
  title: string;
  image?: string;
  description: string;
  date: string;
  href?: string;
};

export type CertificateCategory = {
  category: string;
  certificates: Certificate[];
  honorText?: string;
  certificateText?: string;
};

export type Education = {
  university: string;
  universityShort: string;
  degree: string;
  date: string;
  logo?: string;
  description?: string;
};

export type EducationData = {
  educations: Education[];
};

export type SiteData = {
  hero: HeroData;
  skills: SkillsData;
  about: AboutData;
  contact: ContactEntry[];
  experienceCategories: ExperienceCategory[];
  certificateCategories: CertificateCategory[];
  education: EducationData;
};
