// src/components/QuizSummary.js
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react';

const QuizSummary = ({ questions, userAnswers, onReturn, mode = 'study' }) => { // dodano prop mode
    const [expandedQuestions, setExpandedQuestions] = useState(new Set());

    const correctAnswers = Object.entries(userAnswers).filter(
        ([_, answer]) => answer.isCorrect
    ).length;
    const totalQuestions = questions.length;
    const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(1);

    // Dodajemy useEffect do zapisywania sesji
    useEffect(() => {
        const session = {
            date: new Date().toISOString(),
            mode,
            score: percentage,
            correctAnswers,
            totalQuestions,
            incorrectAnswers: questions
                .map((q, idx) => ({
                    questionNumber: idx + 1,
                    question: q.question,
                    userAnswer: userAnswers[idx]?.selectedAnswer,
                    correctAnswer: q.correctAnswer,
                    isCorrect: userAnswers[idx]?.isCorrect
                }))
                .filter(q => !q.isCorrect)
        };

        const savedSessions = JSON.parse(localStorage.getItem('quizSessions') || '[]');
        savedSessions.unshift(session);
        localStorage.setItem('quizSessions', JSON.stringify(savedSessions));
    }, []); // Uruchomi się tylko raz przy montowaniu komponentu

    const toggleQuestion = (questionId) => {
        setExpandedQuestions(prev => {
            const newSet = new Set(prev);
            if (newSet.has(questionId)) {
                newSet.delete(questionId);
            } else {
                newSet.add(questionId);
            }
            return newSet;
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-4 flex justify-between items-center">
                <button
                    onClick={onReturn}
                    className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                    Powrót do wyboru modułu
                </button>
            </div>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Podsumowanie</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="text-center space-y-2">
                            <p className="text-2xl font-bold">{percentage}%</p>
                            <p className="text-lg">
                                Poprawne odpowiedzi: {correctAnswers} z {totalQuestions}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Lista pytań</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        {questions.map((question, index) => {
                            const userAnswer = userAnswers[index];
                            const isExpanded = expandedQuestions.has(index);
                            const isCorrect = userAnswer?.isCorrect;

                            return (
                                <div
                                    key={index}
                                    className={`border rounded-lg ${!isCorrect ? 'border-red-300' : 'border-gray-200'}`}
                                >
                                    <button
                                        onClick={() => toggleQuestion(index)}
                                        className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <span className="font-semibold">
                                                Pytanie {index + 1}
                                            </span>
                                            {isCorrect ?
                                                <Check className="h-4 w-4 text-green-500" /> :
                                                <X className="h-4 w-4 text-red-500" />
                                            }
                                        </div>
                                        {isExpanded ?
                                            <ChevronUp className="h-4 w-4" /> :
                                            <ChevronDown className="h-4 w-4" />
                                        }
                                    </button>

                                    {isExpanded && (
                                        <div className="p-4 border-t bg-gray-50">
                                            <div className="mb-4">
                                                <h4 className="font-semibold mb-2">Pytanie:</h4>
                                                <p>{question.question}</p>
                                            </div>

                                            <div className="space-y-2">
                                                {question.options.map((option, optionIndex) => (
                                                    <div
                                                        key={optionIndex}
                                                        className={`p-2 rounded ${optionIndex === question.correctAnswer
                                                            ? 'bg-green-100'
                                                            : userAnswer?.selectedAnswer === optionIndex
                                                                ? 'bg-red-100'
                                                                : 'bg-white'
                                                            }`}
                                                    >
                                                        <span className="font-semibold mr-2">{option.label})</span>
                                                        {option.content}
                                                    </div>
                                                ))}
                                            </div>

                                            {userAnswer && (
                                                <div className="mt-4">
                                                    <h4 className="font-semibold mb-2">Wyjaśnienie:</h4>
                                                    <p>{question.options[question.correctAnswer].explanation}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default QuizSummary;