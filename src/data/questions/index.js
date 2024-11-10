import { regularQuestions, additionalQuestions } from './set-a';
import { questions as setBQuestions } from './set-b/questions';
import { questions as setCQuestions } from './set-c/questions';
import { questions as setDQuestions } from './set-d/questions';

const questionsByModule = {
    foundation: {
        a: regularQuestions,
        aExtra: additionalQuestions,
        b: setBQuestions,
        c: setCQuestions,
        d: setDQuestions
    }
};

export { questionsByModule };