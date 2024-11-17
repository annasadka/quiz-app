import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, RotateCcw, Home, Check, X } from 'lucide-react';
import { questionsByModule } from '../data/questions';
import QuizEndAlert from './QuizEndAlert';
import Question from './ui/question';
import QuizSummary from './QuizSummary'; // poprawiony import

const StudyMode = ({ onReturn, moduleId, subModuleId, mode = 'study' }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
    const [userRatings, setUserRatings] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userAnswers, setUserAnswers] = useState({});
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [showEndAlert, setShowEndAlert] = useState(false);

    const questions = questionsByModule[moduleId]?.[subModuleId] || [];
    const isAllQuestionsAnswered = answeredQuestions.size === questions.length;
    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((answeredQuestions.size / questions.length) * 100).toFixed(0);

    const handleQuestionSelect = (index) => {
        setCurrentQuestionIndex(index);
        setShowAnswer(false);
        setSelectedAnswer(null);
    };

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
        const isCorrect = index === currentQuestion.correctAnswer;
        setSelectedAnswer(index);
        setShowAnswer(true);
        setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));
        setUserAnswers(prev => ({
            ...prev,
            [currentQuestionIndex]: {
                selectedAnswer: index,
                isCorrect
            }
        }));

        if (currentQuestionIndex === questions.length - 1) {
            setShowEndAlert(true);
        }
    };

    const handleFinishQuiz = () => {
        setIsQuizCompleted(true);
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
        setUserAnswers({});
    };

    if (isQuizCompleted) {
        return (
            <QuizSummary
                questions={questions}
                userAnswers={userAnswers}
                onReturn={onReturn}
                mode={mode}
            />
        );
    }

    if (!currentQuestion) {
        return <div className="p-4">Brak pytań w wybranym module</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4 flex flex-col h-screen">
            <div className="flex justify-between items-center mb-4">
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

            <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                    {questions.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleQuestionSelect(index)}
                            className={`w-8 h-8 rounded flex items-center justify-center ${currentQuestionIndex === index
                                ? 'bg-blue-500 text-white'
                                : answeredQuestions.has(index)
                                    ? 'bg-green-100'
                                    : 'bg-gray-100'
                                } hover:opacity-80`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePrevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Poprzednie
                </button>

                {isAllQuestionsAnswered ? (
                    <button
                        onClick={handleFinishQuiz}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        Zakończ quiz
                    </button>
                ) : (
                    <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        <RotateCcw className="h-4 w-4" />
                    </button>
                )}

                <button
                    onClick={handleNextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                    className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Następne
                    <ChevronRight className="h-4 w-4 ml-2" />
                </button>
            </div>

            <div className="flex-grow overflow-auto">
                <Question
                    questionData={currentQuestion}
                    questionNumber={currentQuestionIndex + 1}
                />

                <Card className="mt-4">
                    <CardContent className="p-6">
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
                                                : 'bg-white'
                                        : selectedAnswer === index
                                            ? 'bg-blue-100 border-blue-500'
                                            : 'bg-white hover:bg-gray-50'
                                        } border`}
                                >
                                    <span className="font-semibold mr-2">{option.label})</span>
                                    <span className="font-normal">{option.content}</span>
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
                            <div className="bg-gray-100 p-4 rounded-lg mt-4">
                                <h3 className="font-semibold mb-3">Wyjaśnienie odpowiedzi:</h3>
                                {currentQuestion.options.map((option, index) => (
                                    <div key={index} className={`mb-2 p-2 rounded ${index === currentQuestion.correctAnswer
                                        ? 'bg-green-100'
                                        : selectedAnswer === index
                                            ? 'bg-red-100'
                                            : 'bg-white'
                                        }`}>
                                        <span className="font-semibold">{option.label})</span>
                                        <span className="font-normal"> {option.explanation}</span>
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
                    </CardContent>
                </Card>
            </div>

            {showEndAlert && <QuizEndAlert onFinish={handleFinishQuiz} />}
        </div>
    );
};

export default StudyMode;