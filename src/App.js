import React, { useState } from 'react';
import StudyMode from './components/StudyMode';
import MainMenu from './components/MainMenu';
import ModuleSelector from './components/ModuleSelector';

function App() {
    const [currentMode, setCurrentMode] = useState(null);
    const [selectedModule, setSelectedModule] = useState(null);
    const [selectedSubModule, setSelectedSubModule] = useState(null);

    const handleModeSelect = (mode) => {
        setCurrentMode(mode);
    };

    const handleReturnToMenu = () => {
        setCurrentMode(null);
        setSelectedModule(null);
        setSelectedSubModule(null);
    };

    const handleModuleSelect = (moduleId, subModuleId) => {
        setSelectedModule(moduleId);
        setSelectedSubModule(subModuleId);
    };

    const renderMode = () => {
        switch (currentMode) {
            case 'study':
                if (!selectedModule) {
                    return (
                        <ModuleSelector
                            onModuleSelect={handleModuleSelect}
                            onReturn={handleReturnToMenu}
                        />
                    );
                }
                return (
                    <StudyMode
                        onReturn={() => setSelectedModule(null)}
                        moduleId={selectedModule}
                        subModuleId={selectedSubModule}
                    />
                );
            case 'exam':
                return <div className="p-4">Tryb egzaminu - w budowie <button onClick={handleReturnToMenu} className="mt-4 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">Powrót do menu</button></div>;
            case 'practice':
                return <div className="p-4">Szybka praktyka - w budowie <button onClick={handleReturnToMenu} className="mt-4 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">Powrót do menu</button></div>;
            case 'custom':
                return <div className="p-4">Własny test - w budowie <button onClick={handleReturnToMenu} className="mt-4 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">Powrót do menu</button></div>;
            case 'review':
                return <div className="p-4">Przegląd błędów - w budowie <button onClick={handleReturnToMenu} className="mt-4 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">Powrót do menu</button></div>;
            default:
                return <MainMenu onModeSelect={handleModeSelect} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {renderMode()}
        </div>
    );
}

export default App;