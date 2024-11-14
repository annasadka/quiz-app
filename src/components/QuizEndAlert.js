import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const QuizEndAlert = ({ onFinish }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-4 right-4 max-w-md z-50"
        >
            <Card className="bg-green-50 border-green-200">
                <CardHeader>
                    <CardTitle className="text-green-800">Gratulacje!</CardTitle>
                </CardHeader>
                <CardContent className="text-green-700">
                    <p>Ukończyłeś wszystkie pytania w tym zestawie.</p>
                    <button
                        onClick={onFinish}
                        className="mt-2 flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        Przejdź do podsumowania
                        <ChevronRight className="h-4 w-4 ml-2" />
                    </button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default QuizEndAlert;