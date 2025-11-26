

export const MockAPI = {
    getProfile: async () => {
        return {
            name: "Jensen Omega",
            role: "Software Developer",
            description: "Especialista em criar experiências digitais excepcionais. Foco em interfaces acessíveis, centradas no ser humano e de alta performance.",
            socials: {
                email: "jensen@example.com",
                linkedin: "linkedin.com/in/jensen",
                github: "github.com/jensen"
            }
        };
    },

    getTechStack: async () => {
        return ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'React', 'Git', 'Tailwind'];
    },

    getServices: async () => {
        return [
            { icon: 'Layout', title: 'Web Development', desc: 'Sites modernos e responsivos.' },
            { icon: 'Smartphone', title: 'App Development', desc: 'Aplicações nativas e híbridas.' },
            { icon: 'Server', title: 'Backend Systems', desc: 'APIs robustas e escaláveis.' }
        ];
    },

    getStats: async () => {
        return [
            { value: "120", suffix: "+", label: "Projetos Completos" },
            { value: "95", suffix: "%", label: "Satisfação Clientes" },
            { value: "10", suffix: "+", label: "Anos Experiência" }
        ];
    },

    getProjects: async () => {
        return [
            {
                id: 1,
                type: "Web Game",
                title: "Battleship Estratégico",
                description: "Uma recriação clássica do jogo Batalha Naval. Lógica complexa de IA para o oponente e gerenciamento de estado avançado.",
                tech: ["React", "Redux", "Jest"],
                imagePlaceholder: "Battleship Game",
                links: { github: "#", external: "#" }
            },
            {
                id: 2,
                type: "Integração API",
                title: "Movie Titles API",
                description: "Interface de busca de filmes utilizando API pública. Inclui sistema de favoritos, cache local e filtragem dinâmica em tempo real.",
                tech: ["Vue.js", "Tailwind", "REST API"],
                imagePlaceholder: "Movie App",
                links: { github: "#", external: "#" }
            },
            {
                id: 3,
                type: "Dashboard",
                title: "SaaS Landing Page",
                description: "Landing page de alta conversão para um produto SaaS fictício. Focada em métricas de performance (Lighthouse 100%) e SEO.",
                tech: ["HTML5", "SASS", "JS ES6"],
                imagePlaceholder: "Dashboard SaaS",
                links: { github: "#", external: "#" }
            }
        ];
    }
};
