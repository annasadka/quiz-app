import React from 'react';
import { Card, CardContent } from './card';


const SectionTitle = ({ chapter, subchapter }) => (
    <div className="mb-6">
        <h2 className="text-xl font-bold">
            {chapter} - {subchapter}
        </h2>
    </div>
);

const QuestionContent = ({ question, imageUrl }) => {
    const formatText = (text) => {
        // Jeśli pytanie jest komponentem React, renderujemy go bezpośrednio
        if (React.isValidElement(text)) {
            return text;
        }

        // Jeśli tekst zawiera znaczniki HTML, renderujemy jako HTML
        if (text.includes('<div') || text.includes('<p') || text.includes('<table')) {
            return (
                <div
                    className="overflow-x-auto"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            );
        }

        // Standardowe formatowanie tekstu dla pozostałych przypadków
        if (!text.includes('\n')) {
            return <p>{text}</p>;
        }

        return text.split('\n\n').map((paragraph, idx) => (
            <div key={idx} className="mb-4">
                {paragraph.split('\n').map((line, lineIdx) => (
                    <p key={lineIdx} className="mb-1">
                        {line}
                    </p>
                ))}
            </div>
        ));
    };


    return (
        <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                    {formatText(question)}
                </div>
                {imageUrl && (
                    <div className="mt-4">
                        <img src={imageUrl} alt="Diagram" className="mx-auto" />
                    </div>
                )}
            </div>
        </div>
    );
};

const Question = ({ questionData, questionNumber }) => {
    return (
        <div>
            {questionNumber && (
                <div className="mb-4 text-gray-600">
                    Pytanie {questionNumber}
                </div>
            )}
            <Card>
                <CardContent className="p-6">
                    <SectionTitle
                        chapter={questionData.chapter}
                        subchapter={questionData.subchapter}
                    />
                    <QuestionContent
                        question={questionData.question}
                        imageUrl={questionData.imageUrl}
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default Question;