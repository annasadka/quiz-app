import { regularQuestions, additionalQuestions } from './set-a';
import { questionSetB } from './set-b/questions';
import { questionSetC } from './set-c/questions';
import { questionSetD } from './set-d/questions';

const questionsByModule = {
    foundation: {
        a: regularQuestions,
        aExtra: additionalQuestions,
        b: questionSetB,
        c: questionSetC,
        d: questionSetD
    }
};

export { questionsByModule };