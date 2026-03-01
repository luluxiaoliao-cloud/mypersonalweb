import type {
  HeroData,
  SkillsData,
  AboutData,
  ContactEntry,
  ExperienceCategory,
  CertificateCategory,
} from "./types";

// Re-export types so existing imports keep working.
export type { ContactEntry, Experience, ExperienceCategory, Certificate, CertificateCategory } from "./types";

// ─── Hero ────────────────────────────────────────────────────
export const heroData: HeroData = {
  greeting: "Hi, I am Ziya Liao",
  titles: ["Corporate Communications", "Bilingual Operations", "Fresh Graduate"],
};

// ─── Skills ──────────────────────────────────────────────────
export const skillsData: SkillsData = {
  skills: "Bilingual Copywriting, Event Execution, SOP Compilation, Video Editing, Admin Operations, Translation",
  highlights: ["Bilingual Copywriting", "Event Execution"],
};

// ─── About ───────────────────────────────────────────────────
export const aboutData: AboutData = {
  image: "/pic.png",
  imageAlt: "Ziya Liao Profile",
  text: `MA candidate in Linguistics & Applied Linguistics with a BA in English Education. Proficient in bilingual copywriting, project planning and event execution, with solid experience in corporate affairs, admin management and cross-cultural communication. English as a working language, skilled in workflow sorting and SOP precipitation, seeking a position in corporate communications or bilingual operations.`,
  photos: [
    {
      src: "/photos/photo1.png",
      alt: "Personal photo 1",
      direction: 'top'
    },
    {
      src: "/photos/photo2.png",
      alt: "Personal photo 2",
      direction: 'bottom'
    },
    {
      src: "/photos/photo3.png",
      alt: "Personal photo 3",
      direction: 'left'
    },
    {
      src: "/photos/photo4.png",
      alt: "Personal photo 4",
      direction: 'right'
    }
  ]
};

// ─── Contact ─────────────────────────────────────────────────
export const contactData: ContactEntry[] = [
  {
    type: "Email",
    value: "liaoziya20242025@163.com",
    href: "mailto:liaoziya20242025@163.com",
  },
  {
    type: "Phone",
    value: "+86 18873954545",
    href: "tel:+8618873954545",
  },
];

// ─── Experience ───────────────────────────────────────────────
export const experienceCategories: ExperienceCategory[] = [
  {
    category: "Bilingual Operations & Events",
    projects: [
      {
        title: "Davos Forum Tianjin Volunteer",
        image: "/experience/davos-forum.png",
        techStack: ["Bilingual Reception", "Process Standardization"],
        href: "#",
      },
      {
        title: "Chinese Bridge World Contest Volunteer",
        image: "/experience/chinese-bridge.png",
        techStack: ["Event Coordination", "Cross-cultural Communication"],
        href: "#",
      },
    ],
  },
  {
    category: "Admin & Academic Operations",
    projects: [
      {
        title: "Teaching Affairs & Class Operations Intern",
        image: "/experience/teaching-affairs.png",
        techStack: ["SOP Precipitation", "Data Statistics"],
        href: "#",
      },
    ],
  },
];

// ─── Certificates & Honors ─────────────────────────────────────
export const certificateCategories: CertificateCategory[] = [
  {
    category: "Language Proficiency Certificates",
    certificates: [
      {
        title: "TEM-8 Certificate",
        image: "/certificates/tem8-certificate.png",
        description: "Test for English Majors - Grade 8",
        date: "2023",
        href: "#",
      },
      {
        title: "Advanced English Teacher Qualification",
        image: "/certificates/english-teacher-certificate.png",
        description: "Senior English Teacher Qualification Certificate",
        date: "2024",
        href: "#",
      },
      {
        title: "Mandarin Proficiency Certificate",
        image: "/certificates/mandarin-certificate.png",
        description: "Mandarin Proficiency Test - Level 2甲等",
        date: "2023",
        href: "#",
      },
    ],
  },
];