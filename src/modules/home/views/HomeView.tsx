import React from 'react';
import { useHomeViewModel } from '../view-models/useHomeViewModel';
import { Button } from '@/_shared/components/Button';
import { Card } from '@/_shared/components/Card';

export default function HomeView() {
    const { profile, isLoading, handleDownloadCV } = useHomeViewModel();

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
            <Card className="max-w-2xl w-full text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        Olá, sou {profile?.name}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {profile?.role}
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        {profile?.description}
                    </p>
                </div>

                <div className="flex justify-center gap-4">
                    <Button onClick={handleDownloadCV} variant="primary">
                        Download CV
                    </Button>
                    <Button variant="outline" onClick={() => window.location.href = '/projetos'}>
                        Ver Projetos
                    </Button>
                </div>
            </Card>
        </main>
    );
}
