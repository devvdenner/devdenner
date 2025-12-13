import { Locale } from '@/_shared/contracts/locale.contract';

const profileData: Record<
  Locale,
  {
    name: string;
    role: string;
    description: string;
    socials: { email: string; linkedin: string; github: string };
  }
> = {
  en: {
    name: 'Denner Nascimento',
    role: 'Frontend Developer',
    description:
      'Frontend Developer with over 5 years of experience creating modern, responsive, and accessible interfaces with React, Next.js, Vue, and TypeScript. I work with a focus on technical excellence, collaboration, and high-impact deliveries.',
    socials: {
      email: 'contato@devdenner.com',
      linkedin: 'https://www.linkedin.com/in/denner-nascimento/',
      github: 'github.com/devvdenner',
    },
  },
  pt: {
    name: 'Denner Nascimento',
    role: 'Desenvolvedor Frontend',
    description:
      'Desenvolvedor Frontend com mais de 5 anos de experiência criando interfaces modernas, responsivas e acessíveis com React, Next.js, Vue e TypeScript. Atuo com foco em excelência técnica, colaboração e entregas de alto impacto.',
    socials: {
      email: 'contato@devdenner.com',
      linkedin: 'https://www.linkedin.com/in/denner-nascimento/',
      github: 'github.com/devvdenner',
    },
  },
  es: {
    name: 'Denner Nascimento',
    role: 'Desarrollador Frontend',
    description:
      'Desarrollador Frontend con más de 5 años de experiencia creando interfaces modernas, responsivas y accesibles con React, Next.js, Vue y TypeScript. Trabajo con enfoque en excelencia técnica, colaboración y entregas de alto impacto.',
    socials: {
      email: 'contato@devdenner.com',
      linkedin: 'https://www.linkedin.com/in/denner-nascimento/',
      github: 'github.com/devvdenner',
    },
  },
};

const servicesData: Record<Locale, { icon: string; title: string; desc: string }[]> = {
  en: [
    {
      icon: 'Layout',
      title: 'Frontend Development',
      desc: 'Modern interfaces with React, Next.js, and Vue.',
    },
    {
      icon: 'Server',
      title: 'Architecture & Best Practices',
      desc: 'Clean Architecture, MVVM, and Automated Testing.',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile & QA',
      desc: 'React Native, Cypress, Playwright, and Vitest.',
    },
  ],
  pt: [
    {
      icon: 'Layout',
      title: 'Frontend Development',
      desc: 'Interfaces modernas com React, Next.js e Vue.',
    },
    {
      icon: 'Server',
      title: 'Arquitetura & Boas Práticas',
      desc: 'Clean Architecture, MVVM e Testes Automatizados.',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile & QA',
      desc: 'React Native, Cypress, Playwright e Vitest.',
    },
  ],
  es: [
    {
      icon: 'Layout',
      title: 'Desarrollo Frontend',
      desc: 'Interfaces modernas con React, Next.js y Vue.',
    },
    {
      icon: 'Server',
      title: 'Arquitectura & Buenas Prácticas',
      desc: 'Clean Architecture, MVVM y Pruebas Automatizadas.',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile & QA',
      desc: 'React Native, Cypress, Playwright y Vitest.',
    },
  ],
};

const statsData: Record<Locale, { value: string; suffix: string; label: string }[]> = {
  en: [
    { value: '5', suffix: '+', label: 'Years of Experience' },
    { value: '10', suffix: '+', label: 'Projects Delivered' },
    { value: '3', suffix: '+', label: 'Companies' },
  ],
  pt: [
    { value: '5', suffix: '+', label: 'Anos de Experiência' },
    { value: '10', suffix: '+', label: 'Projetos Entregues' },
    { value: '3', suffix: '+', label: 'Empresas' },
  ],
  es: [
    { value: '5', suffix: '+', label: 'Años de Experiencia' },
    { value: '10', suffix: '+', label: 'Proyectos Entregados' },
    { value: '3', suffix: '+', label: 'Empresas' },
  ],
};

const projectsData: Record<
  Locale,
  {
    id: number;
    type: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    imagePlaceholder: string;
    links: { github: string; external: string };
    company?: string;
    period?: string;
  }[]
> = {
  en: [
    {
      id: 1,
      type: 'SaaS Platform',
      title: 'EasyCDP',
      description:
        'Customer Data Platform for data management and message personalization for multichannel engagement, aimed at small and medium businesses. I led frontend development from scratch, defining modular architecture, MVVM patterns, and hexagonal service layer.',
      tech: [
        'React',
        'Next.js',
        'TypeScript',
        'Zustand',
        'TailwindCSS',
        'Styled-components',
        'Vitest',
        'Playwright',
        'Docker',
      ],
      image: 'https://files.devdenner.com/projects-images/easy-cdp/page-1.png',
      imagePlaceholder: 'CDP Platform',
      links: { github: '#', external: '#' },
      company: 'Ativos Capital',
      period: '10/2024 - Present',
    },
    {
      id: 2,
      type: 'Web App',
      title: 'Sua Formatura System',
      description:
        'Graduation management system with scalable and performant interfaces. I led the frontend team, conducting code reviews, pair programming, and disseminating best practices for versioning and componentization.',
      tech: [
        'React',
        'Redux',
        'TypeScript',
        'Material UI',
        'React DnD',
        'ReactChart',
        'Immutable.js',
      ],
      image: 'https://files.devdenner.com/projects-images/sua-formatura/page-1.png',
      imagePlaceholder: 'Sua Formatura',
      links: { github: '#', external: '#' },
      company: 'Sua Formatura',
      period: '08/2021 - 10/2024',
    },
    {
      id: 6,
      type: 'Web App',
      title: 'Miles Calculator',
      description:
        'Web application that automatically calculates accumulated points and miles based on user monthly expenses. Developed with focus on performance and user experience.',
      tech: ['Next.js', 'TypeScript', 'Zustand', 'TailwindCSS', 'React Hook Form', 'Shadcn UI'],
      image: 'https://files.devdenner.com/projects-images/calculadora-milhas/page-1.png',
      imagePlaceholder: 'Miles Calculator',
      links: { github: '#', external: 'https://calculadoradasmilhas.com' },
    },
  ],
  pt: [
    {
      id: 1,
      type: 'SaaS Platform',
      title: 'EasyCDP',
      description:
        'Plataforma de gestão de dados de clientes (Customer Data Platform) e personalização de mensagens para engajamento multicanal, voltada a pequenas e médias empresas. Liderei o desenvolvimento frontend desde o zero, definindo arquitetura modular, padrões MVVM e hexagonal na camada de serviços.',
      tech: [
        'React',
        'Next.js',
        'TypeScript',
        'Zustand',
        'TailwindCSS',
        'Styled-components',
        'Vitest',
        'Playwright',
        'Docker',
      ],
      image: 'https://files.devdenner.com/projects-images/easy-cdp/page-1.png',
      imagePlaceholder: 'CDP Platform',
      links: { github: '#', external: '#' },
      company: 'Ativos Capital',
      period: '10/2024 - Atual',
    },
    {
      id: 2,
      type: 'Web App',
      title: 'Sistema Sua Formatura',
      description:
        'Sistema de gestão para formaturas com interfaces escaláveis e performáticas. Liderei o time de frontend, conduzindo code reviews, pair programming e disseminando boas práticas de versionamento e componentização.',
      tech: [
        'React',
        'Redux',
        'TypeScript',
        'Material UI',
        'React DnD',
        'ReactChart',
        'Immutable.js',
      ],
      image: 'https://files.devdenner.com/projects-images/sua-formatura/page-1.png',
      imagePlaceholder: 'Sua Formatura',
      links: { github: '#', external: '#' },
      company: 'Sua Formatura',
      period: '08/2021 - 10/2024',
    },
    {
      id: 6,
      type: 'Web App',
      title: 'Calculadora de Milhas',
      description:
        'Aplicativo web que calcula automaticamente pontos e milhas acumulados com base nos gastos mensais do usuário. Desenvolvido com foco em performance e experiência do usuário.',
      tech: ['Next.js', 'TypeScript', 'Zustand', 'TailwindCSS', 'React Hook Form', 'Shadcn UI'],
      image: 'https://files.devdenner.com/projects-images/calculadora-milhas/page-1.png',
      imagePlaceholder: 'Calculadora Milhas',
      links: { github: '#', external: 'https://calculadoradasmilhas.com' },
    },
  ],
  es: [
    {
      id: 1,
      type: 'Plataforma SaaS',
      title: 'EasyCDP',
      description:
        'Plataforma de gestión de datos de clientes (Customer Data Platform) y personalización de mensajes para engagement multicanal, orientada a pequeñas y medianas empresas. Lideré el desarrollo frontend desde cero, definiendo arquitectura modular, patrones MVVM y hexagonal en la capa de servicios.',
      tech: [
        'React',
        'Next.js',
        'TypeScript',
        'Zustand',
        'TailwindCSS',
        'Styled-components',
        'Vitest',
        'Playwright',
        'Docker',
      ],
      image: 'https://files.devdenner.com/projects-images/easy-cdp/page-1.png',
      imagePlaceholder: 'CDP Platform',
      links: { github: '#', external: '#' },
      company: 'Ativos Capital',
      period: '10/2024 - Actual',
    },
    {
      id: 2,
      type: 'Web App',
      title: 'Sistema Sua Formatura',
      description:
        'Sistema de gestión para graduaciones con interfaces escalables y de alto rendimiento. Lideré el equipo de frontend, realizando code reviews, pair programming y difundiendo buenas prácticas de versionado y componentización.',
      tech: [
        'React',
        'Redux',
        'TypeScript',
        'Material UI',
        'React DnD',
        'ReactChart',
        'Immutable.js',
      ],
      image: 'https://files.devdenner.com/projects-images/sua-formatura/page-1.png',
      imagePlaceholder: 'Sua Formatura',
      links: { github: '#', external: '#' },
      company: 'Sua Formatura',
      period: '08/2021 - 10/2024',
    },
    {
      id: 6,
      type: 'Web App',
      title: 'Calculadora de Millas',
      description:
        'Aplicación web que calcula automáticamente puntos y millas acumulados según los gastos mensuales del usuario. Desarrollado con enfoque en performance y experiencia del usuario.',
      tech: ['Next.js', 'TypeScript', 'Zustand', 'TailwindCSS', 'React Hook Form', 'Shadcn UI'],
      image: 'https://files.devdenner.com/projects-images/calculadora-milhas/page-1.png',
      imagePlaceholder: 'Calculadora Millas',
      links: { github: '#', external: 'https://calculadoradasmilhas.com' },
    },
  ],
};

export const MockAPI = {
  getProfile: async (locale: Locale) => {
    return profileData[locale];
  },

  getTechStack: async () => {
    return ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Node.js', 'Docker', 'Git'];
  },

  getServices: async (locale: Locale) => {
    return servicesData[locale];
  },

  getStats: async (locale: Locale) => {
    return statsData[locale];
  },

  getProjects: async (locale: Locale) => {
    return projectsData[locale];
  },
};
