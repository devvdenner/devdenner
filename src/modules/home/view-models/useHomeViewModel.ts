import { useEffect,useState } from 'react';

import { IHomeModel } from '../models/HomeView.model';

export function useHomeViewModel() {
    const [data, setData] = useState<IHomeModel['profile'] | null>(null);

    // Lógica de negócio, fetch de dados, side-effects
    useEffect(() => {
        // Simulação de busca de dados
        const timer = setTimeout(() => {
            setData({
                name: "José Denner",
                role: "Frontend Engineer",
                description: "Construindo experiências digitais com excelência e precisão."
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return {
        profile: data,
        isLoading: !data,
        // Actions
        handleDownloadCV: () => console.log("Downloading CV...")
    };
}
