import React, { useState } from 'react';
import StudyMode from './components/StudyMode';
import MainMenu from './components/MainMenu';

function App() {
    const [currentMode, setCurrentMode] = useState(null);

    const handleModeSelect = (mode) => {
        setCurrentMode(mode);
    };

    const handleReturnToMenu = () => {
        setCurrentMode(null);
    };

    const renderMode = () => {
        switch (currentMode) {
            case 'study':
                return <StudyMode onReturn={handleReturnToMenu} />;
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