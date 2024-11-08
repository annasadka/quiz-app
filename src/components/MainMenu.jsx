import React from 'react';
import { Card, CardContent } from './ui/card';
import { BookOpen, Clock, Brain, Layout, History } from 'lucide-react';

const MainMenu = ({ onModeSelect }) => {
    const studyModes = [
        {
            id: 'study',
            name: 'Tryb nauki',
            description: 'Ucz się w swoim tempie z wyjaśnieniami',
            icon: BookOpen,
            color: 'bg-blue-500'
        },
        {
            id: 'exam',
            name: 'Tryb egzaminu',
            description: '40 pytań w 60 minut',
            icon: Clock,
            color: 'bg-red-500'
        },
        {
            id: 'practice',
            name: 'Szybka praktyka',
            description: 'Krótkie sesje z wybranymi pytaniami',
            icon: Brain,
            color: 'bg-green-500'
        },
        {
            id: 'custom',
            name: 'Własny test',
            description: 'Stwórz własny zestaw pytań',
            icon: Layout,
            color: 'bg-purple-500'
        },
        {
            id: 'review',
            name: 'Przegląd błędów',
            description: 'Przeanalizuj swoje pomyłki',
            icon: History,
            color: 'bg-orange-500'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">ISTQB Quiz App</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studyModes.map((mode) => {
                    const Icon = mode.icon;
                    return (
                        <Card
                            key={mode.id}
                            className="cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => onModeSelect(mode.id)}
                        >
                            <CardContent className="flex items-center p-6">
                                <div className={`${mode.color} p-3 rounded-lg mr-4`}>
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">{mode.name}</h2>
                                    <p className="text-gray-600">{mode.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default MainMenu;