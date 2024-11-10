import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, RotateCcw, Home, Check, X } from 'lucide-react';
import { questionsByModule } from '../data/questions';

const StudyMode = ({ onReturn, moduleId, subModuleId }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
    const [userRatings, setUserRatings] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // Pobierz pytania dla wybranego modułu
    const questions = questionsByModule[moduleId][subModuleId] || [];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setShowAnswer(false);
            setSelectedAnswer(null);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            setShowAnswer(false);
            setSelectedAnswer(null);
        }
    };

    const handleAnswerSelect = (index) => {
        setSelectedAnswer(index);
        setShowAnswer(true);
        setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));
    };

    const handleRateQuestion = (rating) => {
        setUserRatings(prev => ({
            ...prev,
            [currentQuestionIndex]: rating
        }));
    };

    const handleReset = () => {
        setCurrentQuestionIndex(0);
        setShowAnswer(false);
        setAnsweredQuestions(new Set());
        setUserRatings({});
        setSelectedAnswer(null);
    };

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((answeredQuestions.size / questions.length) * 100).toFixed(0);

    if (!currentQuestion) {
        return <div className="p-4">Brak pytań w wybranym module</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-4 flex justify-between items-center">
                <button
                    onClick={onReturn}
                    className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                    <Home className="h-4 w-4 mr-2" />
                    Powrót do wyboru modułu
                </button>
                <span className="text-sm text-gray-500">
                    Pytanie {currentQuestionIndex + 1} z {questions.length} (Postęp: {progress}%)
                </span>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">
                        {currentQuestion.chapter} - {currentQuestion.subchapter}
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2">Pytanie {currentQuestionIndex + 1}:</h3>
                            <p className="text-lg">{currentQuestion.question}</p>
                        </div>

                        <div className="space-y-2">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerSelect(index)}
                                    disabled={showAnswer}
                                    className={`w-full p-3 text-left rounded-lg transition-colors ${showAnswer
                                            ? index === currentQuestion.correctAnswer
                                                ? 'bg-green-100 border-green-500'
                                                : selectedAnswer === index
                                                    ? 'bg-red-100 border-red-500'
                                                    : 'bg-gray-50'
                                            : selectedAnswer === index
                                                ? 'bg-blue-100 border-blue-500'
                                                : 'bg-gray-50 hover:bg-gray-100'
                                        } border`}
                                >
                                    <span className="font-bold mr-2">{option.label})</span>
                                    {option.content}
                                    {showAnswer && (selectedAnswer === index || index === currentQuestion.correctAnswer) && (
                                        <span className="float-right">
                                            {index === currentQuestion.correctAnswer ? (
                                                <Check className="inline h-5 w-5 text-green-500" />
                                            ) : (
                                                <X className="inline h-5 w-5 text-red-500" />
                                            )}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {showAnswer && (
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold mb-3">Wyjaśnienie odpowiedzi:</h3>
                                {currentQuestion.options.map((option, index) => (
                                    <div key={index} className={`mb-2 p-2 rounded ${index === currentQuestion.correctAnswer
                                            ? 'bg-green-100'
                                            : selectedAnswer === index
                                                ? 'bg-red-100'
                                                : 'bg-gray-50'
                                        }`}>
                                        <p className="font-semibold">{option.label}) {option.explanation}</p>
                                    </div>
                                ))}

                                <div className="mt-4">
                                    <p className="text-sm text-gray-600 mb-2">Jak dobrze znałeś/aś tę odpowiedź?</p>
                                    <div className="flex space-x-2">
                                        {[1, 2, 3, 4, 5].map((rating) => (
                                            <button
                                                key={rating}
                                                onClick={() => handleRateQuestion(rating)}
                                                className={`p-2 rounded ${userRatings[currentQuestionIndex] === rating
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-100 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {rating}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={handlePrevQuestion}
                                disabled={currentQuestionIndex === 0}
                                className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="h-4 w-4 mr-2" />
                                Poprzednie
                            </button>

                            <button
                                onClick={handleReset}
                                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                            >
                                <RotateCcw className="h-4 w-4" />
                            </button>

                            <button
                                onClick={handleNextQuestion}
                                disabled={currentQuestionIndex === questions.length - 1}
                                className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Następne
                                <ChevronRight className="h-4 w-4 ml-2" />
                            </button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default StudyMode;