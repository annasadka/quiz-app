// src/App.js
import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import ModuleSelector from './components/ModuleSelector';
import StudyMode from './components/StudyMode';
import ErrorAnalysis from './components/ErrorAnalysis';
import QuizSummary from './components/QuizSummary';

function App() {
    const [currentView, setCurrentView] = useState('menu');
    const [selectedMode, setSelectedMode] = useState(null);
    const [selectedModule, setSelectedModule] = useState(null);
    const [selectedSubModule, setSelectedSubModule] = useState(null);

    const handleModeSelect = (mode) => {
        setSelectedMode(mode);
        if (mode === 'review') {
            setCurrentView('errorAnalysis');
        } else {
            setCurrentView('moduleSelector');
        }
    };

    const handleModuleSelect = (moduleId, subModuleId) => {
        setSelectedModule(moduleId);
        setSelectedSubModule(subModuleId);
        setCurrentView('quiz');
    };

    const handleReturnToMenu = () => {
        setCurrentView('menu');
        setSelectedMode(null);
        setSelectedModule(null);
        setSelectedSubModule(null);
    };

    const renderView = () => {
        switch (currentView) {
            case 'menu':
                return <MainMenu onModeSelect={handleModeSelect} />;
            case 'moduleSelector':
                return <ModuleSelector
                    onModuleSelect={handleModuleSelect}
                    onReturn={handleReturnToMenu}
                />;
            case 'quiz':
                return <StudyMode
                    mode={selectedMode}
                    moduleId={selectedModule}
                    subModuleId={selectedSubModule}
                    onReturn={handleReturnToMenu}
                />;
            case 'errorAnalysis':
                return <ErrorAnalysis onReturn={handleReturnToMenu} />;
            default:
                return <MainMenu onModeSelect={handleModeSelect} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {renderView()}
        </div>
    );
}

export default App;