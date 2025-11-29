

export const MockAPI = {
    getProfile: async () => {
        return {
            name: "Denner Nascimento",
            role: "Desenvolvedor Frontend",
            description: "Desenvolvedor Frontend com mais de 5 anos de experiência criando interfaces modernas, responsivas e acessíveis com React, Next.js, Vue e TypeScript. Atuo com foco em excelência técnica, colaboração e entregas de alto impacto.",
            socials: {
                email: "contato@devdenner.com",
                linkedin: "https://www.linkedin.com/in/denner-nascimento/",
                github: "github.com/devvdenner"
            }
        };
    },

    getTechStack: async () => {
        return ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Node.js', 'Docker', 'Git'];
    },

    getServices: async () => {
        return [
            { icon: 'Layout', title: 'Frontend Development', desc: 'Interfaces modernas com React, Next.js e Vue.' },
            { icon: 'Server', title: 'Arquitetura & Boas Práticas', desc: 'Clean Architecture, MVVM e Testes Automatizados.' },
            { icon: 'Smartphone', title: 'Mobile & QA', desc: 'React Native, Cypress, Playwright e Vitest.' }
        ];
    },

    getStats: async () => {
        return [
            { value: "5", suffix: "+", label: "Anos de Experiência" },
            { value: "10", suffix: "+", label: "Projetos Entregues" },
            { value: "3", suffix: "+", label: "Empresas" }
        ];
    },

    getProjects: async () => {
        return [
            {
                id: 1,
                type: "Web App",
                title: "Calculadora de Milhas",
                description: "Aplicativo web que calcula automaticamente pontos e milhas acumulados com base nos gastos mensais. Utiliza Zustand, TailwindCSS, React Hook Form e Shadcn UI.",
                tech: ["Next.js", "TypeScript", "Zustand", "Tailwind"],
                image: "https://blog.hubspot.com/hubfs/freerange.png",
                imagePlaceholder: "Calculadora Milhas",
                links: { github: "#", external: "https://calculadoradasmilhas.com" }
            },
            {
                id: 2,
                type: "Institucional",
                title: "ARACOMP (UFAL)",
                description: "Site institucional para o evento acadêmico da Universidade Federal de Alagoas, desenvolvido com Django, Django REST Framework, HTML e SCSS.",
                tech: ["Django", "Python", "SCSS", "HTML"],
                image: "https://blog.hubspot.com/hubfs/freerange.png",
                imagePlaceholder: "ARACOMP",
                links: { github: "#", external: "#" }
            },
            {
                id: 3,
                type: "SaaS Platform",
                title: "CDP Platform",
                description: "Plataforma de gestão de dados de clientes e personalização de mensagens multicanal. Arquitetura modular e hexagonal na camada de serviços.",
                tech: ["React", "Next.js", "TypeScript", "Styled-components"],
                image: "https://blog.hubspot.com/hubfs/freerange.png",
                imagePlaceholder: "CDP Platform",
                links: { github: "#", external: "#" }
            }
        ];
    }
};
