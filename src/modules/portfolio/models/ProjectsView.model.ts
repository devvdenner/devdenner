export interface Project {
    id: number;
    type: string;
    title: string;
    description: string;
    tech: string[];
    imagePlaceholder: string;
    links: {
        github: string;
        external: string;
    };
}

export interface ProjectsViewProps {
    projects: Project[];
}
