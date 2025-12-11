export const MockAPI = {
  getProfile: async () => {
    return {
      name: 'Denner Nascimento',
      role: 'Desenvolvedor Frontend',
      description:
        'Desenvolvedor Frontend com mais de 5 anos de experiência criando interfaces modernas, responsivas e acessíveis com React, Next.js, Vue e TypeScript. Atuo com foco em excelência técnica, colaboração e entregas de alto impacto.',
      socials: {
        email: 'contato@devdenner.com',
        linkedin: 'https://www.linkedin.com/in/denner-nascimento/',
        github: 'github.com/devvdenner',
      },
    };
  },

  getTechStack: async () => {
    return ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Node.js', 'Docker', 'Git'];
  },

  getServices: async () => {
    return [
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
    ];
  },

  getStats: async () => {
    return [
      { value: '5', suffix: '+', label: 'Anos de Experiência' },
      { value: '10', suffix: '+', label: 'Projetos Entregues' },
      { value: '3', suffix: '+', label: 'Empresas' },
    ];
  },

  getProjects: async () => {
    return [
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
        image: 'https://blog.hubspot.com/hubfs/freerange.png',
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
          'Sistema de gestão para formaturas com interfaces escaláveis e performáticas. Liderei o time de frontend, conduzindo code reviews, pair programming e disseminando boas práticas de versionamento e componentização. Integrei bibliotecas como Material UI, React DnD, ReactChart e Immutable.js.',
        tech: [
          'React',
          'Redux',
          'TypeScript',
          'Material UI',
          'React DnD',
          'ReactChart',
          'Immutable.js',
        ],
        image: 'https://blog.hubspot.com/hubfs/freerange.png',
        imagePlaceholder: 'Sua Formatura',
        links: { github: '#', external: '#' },
        company: 'Sua Formatura',
        period: '08/2021 - 10/2024',
      },
      // {
      //   id: 3,
      //   type: 'Web App',
      //   title: 'Sistema CICA',
      //   description:
      //     'Desenvolvi todo o frontend da aplicação com foco em performance, responsividade e usabilidade. Integrei o sistema ao backend em Django REST Framework, implementando autenticação JWT e controle de permissões de acesso.',
      //   tech: ['Vue.js', 'Django REST Framework', 'JWT', 'CSS'],
      //   image: 'https://blog.hubspot.com/hubfs/freerange.png',
      //   imagePlaceholder: 'CICA',
      //   links: { github: '#', external: '#' },
      //   company: 'CICA',
      //   period: '10/2020 - 08/2021',
      // },
      // {
      //   id: 4,
      //   type: 'QA Automation',
      //   title: 'Quimbik QA',
      //   description:
      //     'Atuei na automação de testes e Quality Assurance para empresa americana, garantindo a qualidade e estabilidade das aplicações através de testes automatizados.',
      //   tech: ['Automation Testing', 'QA', 'JavaScript'],
      //   image: 'https://blog.hubspot.com/hubfs/freerange.png',
      //   imagePlaceholder: 'Quimbik',
      //   links: { github: '#', external: '#' },
      //   company: 'Quimbik Inc. (EUA)',
      //   period: '08/2022 - 03/2024',
      // },
      // {
      //   id: 5,
      //   type: 'QA Automation',
      //   title: 'EDGE QA',
      //   description:
      //     'Conduzi testes funcionais e automatizados utilizando Cypress, melhorando a cobertura de testes e a confiabilidade do sistema.',
      //   tech: ['Cypress', 'JavaScript', 'QA'],
      //   image: 'https://blog.hubspot.com/hubfs/freerange.png',
      //   imagePlaceholder: 'EDGE',
      //   links: { github: '#', external: '#' },
      //   company: 'EDGE',
      //   period: '03/2022 - 09/2022',
      // },
      {
        id: 6,
        type: 'Web App',
        title: 'Calculadora de Milhas',
        description:
          'Aplicativo web que calcula automaticamente pontos e milhas acumulados com base nos gastos mensais do usuário. Desenvolvido com foco em performance e experiência do usuário.',
        tech: ['Next.js', 'TypeScript', 'Zustand', 'TailwindCSS', 'React Hook Form', 'Shadcn UI'],
        image: 'https://blog.hubspot.com/hubfs/freerange.png',
        imagePlaceholder: 'Calculadora Milhas',
        links: { github: '#', external: 'https://calculadoradasmilhas.com' },
      },
      // {
      //   id: 7,
      //   type: 'Institucional',
      //   title: 'ARACOMP (UFAL)',
      //   description:
      //     'Site institucional para o evento acadêmico da Universidade Federal de Alagoas, desenvolvido seguindo princípios de design responsivo e acessibilidade.',
      //   tech: ['Django', 'Django REST Framework', 'Python', 'HTML', 'SCSS'],
      //   image: 'https://blog.hubspot.com/hubfs/freerange.png',
      //   imagePlaceholder: 'ARACOMP',
      //   links: { github: '#', external: '#' },
      // },
    ];
  },
};
