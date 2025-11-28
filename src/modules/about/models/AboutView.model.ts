export interface Service {
    icon: string;
    title: string;
    desc: string;
}

export interface Stat {
    value: string;
    suffix: string;
    label: string;
}

export interface AboutViewProps {
    services: Service[];
    stats: Stat[];
}
