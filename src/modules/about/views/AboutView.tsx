import React from 'react';
import { Card } from '@/_shared/components/Card';

export default function AboutView() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
            <Card className="max-w-4xl w-full">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Sobre Mim</h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Esta é a página Sobre Mim. Em breve, contarei minha história aqui.
                </p>
            </Card>
        </main>
    );
}
