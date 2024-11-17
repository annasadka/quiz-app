// src/components/ErrorAnalysis.js
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, Calendar, Clock, XCircle } from 'lucide-react';

const ErrorAnalysis = ({ onReturn }) => {
    const [sessions, setSessions] = React.useState([]);

    React.useEffect(() => {
        const savedSessions = JSON.parse(localStorage.getItem('quizSessions') || '[]');
        setSessions(savedSessions);
    }, []);

    const formatDate = (date) => {
        return new Date(date).toLocaleString();
    };

    const clearHistory = () => {
        localStorage.removeItem('quizSessions');
        setSessions([]);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-4 flex justify-between items-center">
                <button
                    onClick={onReturn}
                    className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Powrót do menu
                </button>
                <button
                    onClick={clearHistory}
                    className="flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                >
                    <XCircle className="h-4 w-4 mr-2" />
                    Wyczyść historię
                </button>
            </div>

            {sessions.length === 0 ? (
                <Card>
                    <CardContent className="p-6 text-center text-gray-500">
                        Brak zapisanych sesji
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    {sessions.map((session, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className="flex justify-between">
                                    <span>{session.mode === 'study' ? 'Tryb nauki' :
                                        session.mode === 'exam' ? 'Tryb egzaminu' :
                                            'Szybka praktyka'}</span>
                                    <span className="text-sm text-gray-500">
                                        {session.score}%
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        {formatDate(session.date)}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Clock className="h-4 w-4 mr-2" />
                                        {session.correctAnswers} / {session.totalQuestions} poprawnych odpowiedzi
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="font-semibold mb-2">Błędne odpowiedzi:</h4>
                                        <div className="space-y-2">
                                            {session.incorrectAnswers.map((q, idx) => (
                                                <div key={idx} className="p-2 bg-red-50 rounded">
                                                    <p className="font-medium">Pytanie {q.questionNumber}</p>
                                                    <p className="text-sm text-gray-600">{q.question}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ErrorAnalysis;