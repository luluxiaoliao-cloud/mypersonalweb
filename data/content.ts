import type {
  HeroData,
  SkillsData,
  AboutData,
  ContactEntry,
  ExperienceCategory,
  CertificateCategory,
  EducationData,
} from "./types";

// Re-export types so existing imports keep working.
export type { ContactEntry, Experience, ExperienceCategory, Certificate, CertificateCategory, SkillDetail, Hobby, PhotoData, Education, EducationData } from "./types";

// ─── Hero ────────────────────────────────────────────────────
export const heroData: HeroData = {
  greeting: "Hi, I am Ziya Liao",
  titles: ["Corporate Communications", "Bilingual Operations", "Fresh Graduate"],
};

// ─── Skills ──────────────────────────────────────────────────
export const skillsData: SkillsData = {
  skills: "Bilingual Copywriting, Event Execution, SOP Compilation, Video Editing, Admin Operations, Translation",
  highlights: ["Bilingual Copywriting", "Event Execution"],
  details: [
    {
      category: "跨境运营",
      items: ["Listing文案撰写", "产品卖点提炼", "SEO关键词优化", "大促排期执行", "基础数据分析与复盘"]
    },
    {
      category: "内容创作",
      items: ["短视频脚本编写", "基础剪辑", "活动物料制作", "跨境内容本地化适配"]
    },
    {
      category: "电商运营",
      items: ["美团电商平台搭建", "商品上架", "线上活动设置", "全渠道零售运营"]
    },
    {
      category: "智能应用",
      items: ["运用AI进行vibe coding", "通过skills本地部署搭建个性化运营工具"]
    },
    {
      category: "工具使用",
      items: ["Excel（数据统计/透视表）", "PPT", "Word", "Canva", "CapCut", "prosodypro（语音标注）"]
    },
    {
      category: "语言能力",
      items: ["英语（TEM-8优秀/IELTS 7.0，工作语言）", "普通话（二级甲等）", "粤语（基础）"]
    }
  ]
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
  ],
  hobbies: [
    {
      name: "街舞",
      description: "热爱街舞文化，擅长多种舞蹈风格",
      image: "/Dancing/dancing1.jpg",
      images: [
        "/Dancing/dancing1.jpg",
        "/Dancing/dancing2.jpg",
        "/Dancing/dancing3.jpg",
        "/Dancing/dancing4.jpg"
      ]
    },
    {
      name: "摄影",
      description: "记录生活中的美好瞬间",
      image: "/Shoot/shooting1.jpg",
      images: [
        "/Shoot/shooting1.jpg",
        "/Shoot/shooting2.jpg",
        "/Shoot/shooting3.jpg",
        "/Shoot/shooting4.jpg"
      ]
    },
    {
      name: "旅行",
      description: "探索不同的文化与风景",
      image: "/Travelling/travelling1.jpg",
      images: [
        "/Travelling/travelling1.jpg",
        "/Travelling/travelling2.jpg",
        "/Travelling/travelling3.jpg",
        "/Travelling/travelling4.jpg",
        "/Travelling/travelling5.jpg"
      ]
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
    category: "Work Experience",
    projects: [
      {
        title: "学术助理 & 内容运营",
        titleEn: "Academic Assistant & Content Operations",
        company: "学益教育",
        companyEn: "Xueyi Education",
        techStack: ["教务管理", "内容创作", "活动执行"],
        href: "#",
        date: "2022/07 - 2022/09",
        description: "管理学生信息、排课与档案归档；制作教学/活动PPT材料，支持线下活动执行。收集家长反馈以优化宣传内容；协助视频脚本编写与基础剪辑，培养以用户为中心的创意能力。",
        descriptionEn: "Managed student info, scheduling, and archiving; created PPT materials for teaching/events and supported offline event execution. Collected parent feedback to optimize promotional content; assisted in video scripting and basic editing, developing user-centric creative skills."
      },
      {
        title: "运营支持（兼职/假期）",
        titleEn: "Operations Support (Part-time/Holidays)",
        company: "全家超市",
        companyEn: "Family Supermarket",
        techStack: ["电商运营", "数据分析", "促销策划"],
        href: "#",
        date: "2020/09 - 2025/06",
        description: "搭建美团电商店铺，实现线上收入占比18%；优化产品展示，带动核心品类销售增长8%。运用Excel进行库存追踪，减少积压7%；策划促销活动，带动活动期收入提升10%。",
        descriptionEn: "Built Meituan eCommerce store, achieving 18% online revenue share; optimized product displays, increasing core category sales by 8%. Utilized Excel for inventory tracking, reducing backlog by 7%; planned promotions that boosted event-period revenue by 10%."
      }
    ],
  },
  {
    category: "Campus Experience",
    projects: [
      {
        title: "Street Dance Club President",
        titleEn: "Street Dance Club President",
        image: "/Dancing/dancing1.jpg",
        images: [
          "/Dancing/dancing1.jpg",
          "/Dancing/dancing2.jpg",
          "/Dancing/dancing3.jpg",
          "/Dancing/dancing4.jpg"
        ],
        techStack: ["Team Management", "Event Planning", "Competition Organization"],
        href: "#",
        date: "2022/06 - 2024/03",
        description: "本科期间担任天津师范大学啦啦操分部街舞社社长。组织策划校园宣传与训练活动；对接校内外合作。带队参与多次赛事并获奖。（2022 年全国青少年啦啦操 cca 精英赛集体自选动作）",
        descriptionEn: "Served as President of the Street Dance Club at Tianjin Normal University. Organized campus promotions and training activities; coordinated internal and external collaborations. Led the team to participate in multiple competitions and won awards. (2022 National Youth Cheerleading CCA Elite Competition Group Free Routine)"
      },
      {
        title: "2023 Summer Davos Forum Tianjin",
        titleEn: "2023 Summer Davos Forum Tianjin",
        image: "/experience/Davos.png",
        images: [
          "/experience/Davos.png",
          "/experience/davos-forum.png"
        ],
        techStack: ["Bilingual Volunteer", "VIP Reception"],
        href: "#",
        date: "2023",
        description: "为全球贵宾提供中英文接待和路线指引；会后提出标识优化建议以提升运营效率。",
        descriptionEn: "Provided English-Chinese reception and route guidance for global VIPs; proposed signage optimizations post-event to enhance operational efficiency."
      },
      {
        title: "2024 The 4th 'Chinese Bridge' Competition",
        titleEn: "2024 The 4th 'Chinese Bridge' Competition",
        image: "/experience/chinese-bridge.png",
        techStack: ["International Volunteer", "Event Coordination"],
        href: "#",
        date: "2024",
        description: "协调全球参赛者的签证、接机和日程安排；优化签到流程和台账管理。",
        descriptionEn: "Coordinated visas, airport pickups, and scheduling for global contestants; optimized workflows for check-ins and ledger management."
      },
      {
        title: "2023 VUB Belgium Summer School",
        titleEn: "2023 VUB Belgium Summer School",
        image: "/experience/VUB.png",
        images: [],
        techStack: ["Outstanding Participant", "Cross-cultural Collaboration"],
        href: "#",
        date: "2023",
        description: "在跨文化团队中合作进行主题展示，提升了国际合作与沟通能力。",
        descriptionEn: "Collaborated in a cross-cultural team for a theme showcase, enhancing international cooperation and communication skills."
      },
    ],
  },
];

// ─── Certificates & Honors ─────────────────────────────────────
export const certificateCategories: CertificateCategory[] = [
  {
    category: "Certificates & Honors",
    certificateText: "High School English Teacher Qualification, Mandarin PSC 2-A | CET-4/6, TEM-4 (Good), TEM-8 (Excellent), IELTS 7.0",
    honorText: "2025 First-Class Scholarship (SFL); 2023 National 2nd Prize in 'World English' Translation Contest; 2023 3rd Prize in 'Internet+' Innovation Competition; 2022 2nd Prize in '21st Century Cup' Speech Contest.",
    certificates: [],
  },
];

// ─── Education Background ──────────────────────────────────────
export const educationData: EducationData = {
  educations: [
    {
      university: "The Chinese University of Hong Kong (QS Top 50)",
      universityShort: "The Chinese University of Hong Kong",
      degree: "MA in Linguistics",
      date: "2025/09 - Present",
      logo: "/logos/cuhk.png",
      description: "Pursuing postgraduate studies in Linguistics at CUHK, a top 50 QS ranked university. Focusing on advanced linguistic theories and research methodologies."
    },
    {
      university: "Tianjin Normal University",
      universityShort: "Tianjin Normal University",
      degree: "BA in English (Teacher Education)",
      date: "2020/09 - 2025/06",
      logo: "/logos/tjnnu.png",
      description: "Bachelor's degree in English Education with a focus on language teaching methodologies and pedagogical practices."
    }
  ]
};