import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft } from 'lucide-react';

const ModuleSelector = ({ onModuleSelect, onReturn }) => {
    const modules = [
        {
            id: 'foundation',
            name: 'ISTQB Foundation Level 4.0',
            subModules: [
                {
                    id: 'a',
                    name: 'Zbiór A',
                    description: 'Pytania 1-40'
                },
                {
                    id: 'aExtra',
                    name: 'Zbiór A - Dodatkowe',
                    description: 'Pytania dodatkowe A1-A26'
                },
                {
                    id: 'b',
                    name: 'Zbiór B',
                    description: 'Pytania 1-40'
                },
                {
                    id: 'c',
                    name: 'Zbiór C',
                    description: 'Pytania 1-40'
                },
                {
                    id: 'd',
                    name: 'Zbiór D',
                    description: 'Pytania 1-40'
                }
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-4 flex items-center">
                <button
                    onClick={onReturn}
                    className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Powrót do menu
                </button>
            </div>

            {modules.map((module) => (
                <Card key={module.id} className="mb-6">
                    <CardHeader>
                        <CardTitle>{module.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {module.subModules.map((subModule) => (
                                <Card
                                    key={subModule.id}
                                    className="cursor-pointer hover:shadow-lg transition-all"
                                    onClick={() => onModuleSelect(module.id, subModule.id)}
                                >
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold mb-2">{subModule.name}</h3>
                                        <p className="text-sm text-gray-600">{subModule.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

const handleModuleSelect = (moduleId, subModuleId) => {
    console.log('Selecting module:', moduleId, subModuleId);
    onModuleSelect(moduleId, subModuleId);
};

export default ModuleSelector;