import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, RotateCcw, Home, Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { questionsByModule } from '../data/questions';
import QuizEndAlert from './QuizEndAlert';

const QuizSummary = ({ questions, userAnswers, onReturn }) => {
    const [expandedQuestions, setExpandedQuestions] = useState(new Set());

    const correctAnswers = Object.entries(userAnswers).filter(
        ([_, answer]) => answer.isCorrect
    ).length;
    const totalQuestions = questions.length;
    const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(1);

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

const StudyMode = ({ onReturn, moduleId, subModuleId }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
    const [userRatings, setUserRatings] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userAnswers, setUserAnswers] = useState({});
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    const questions = questionsByModule[moduleId]?.[subModuleId] || [];
    const isAllQuestionsAnswered = answeredQuestions.size === questions.length;

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

    const [showEndAlert, setShowEndAlert] = useState(false);


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

        // Dodaj sprawdzenie czy to ostatnie pytanie
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

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((answeredQuestions.size / questions.length) * 100).toFixed(0);

    if (isQuizCompleted) {
        return (
            <QuizSummary
                questions={questions}
                userAnswers={userAnswers}
                onReturn={onReturn}
            />
        );
    }

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
                    </div>
                </CardContent>
            </Card>
            {showEndAlert && (
                <QuizEndAlert onFinish={handleFinishQuiz} />
            )}
        </div>
    );
};

export default StudyMode;