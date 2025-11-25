import React from 'react';
import { Card } from '@/_shared/components/Card';

export default function ProjectsView() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
            <Card className="max-w-4xl w-full">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Meus Projetos</h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Aqui estarão listados os meus projetos.
                </p>
            </Card>
        </main>
    );
}
