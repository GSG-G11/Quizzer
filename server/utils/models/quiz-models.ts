const validQuiz = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  time: 30,
  questions: [
    {
      question: 'This is my question',
      type: 'mcq',
      answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
    },
    {
      question: 'This is my question',
      type: 'true_false',
      answers: { answer: true, options: [true, false] },
    },
    {
      question: 'This is my question',
      type: 'short_answer',
      answers: { answer: 'correct answer', options: [] },
    },
  ],
};

const noTitleQuiz = {
  description: 'my first quiz description',
  mark: 20,
  time: 30,
  questions: [
    {
      question: 'This is my question',
      type: 'mcq',
      answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
    },
  ],
};

const noOptions = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  time: 30,
  questions: [
    {
      question: 'This is my question',
      type: 'mcq',
      answers: { answer: 'true answer' },
    },
  ],
};

const noDescriptionQuiz = {
  title: 'my first quiz',
  mark: 20,
  time: 30,
  questions: [
    {
      question: 'This is my question',
      type: 'mcq',
      answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
    },
  ],
};

const noMarkQuiz = {
  title: 'my first quiz',
  description: 'my first quiz description',
  time: 30,

  questions: [
    {
      question: 'This is my question',
      type: 'mcq',
      answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
    },
  ],
};

const noTimeQuiz = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  questions: [
    {
      question: 'This is my question',
      type: 'mcq',
      answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
    },
  ],
};

const noQuestionsQuiz = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  time: 30,
};

const noQuestionQuiz = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  time: 30,
  questions: [
    {
      type: 'mcq',
      answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
    },
  ],
};

const noQuestionAnswerTypeQuiz = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  time: 30,
  questions: [
    {
      question: 'This is my question',
      answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
    },
  ],
};

const invalidQuestionType = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  time: 30,
  questions: [
    {
      question: 'This is my question',
      type: 'hello',
      answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
    },
  ],
};

const noAnswersQuestion = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  time: 30,
  questions: [
    {
      question: 'This is my question',
      type: 'mcq',
    },
  ],
};

const noAnswerQuestion = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  time: 30,
  questions: [
    {
      question: 'This is my question',
      type: 'mcq',
      answers: { options: ['true answer', 'hello', 'hi', 'why'] },
    },
  ],
};

const invalidTrueFalseAnswers = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  time: 30,
  questions: [
    {
      question: 'This is my question',
      type: 'mcq',
      answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
    },
    {
      question: 'This is my question',
      type: 'true_false',
      answers: { answer: 'hi', options: [true, true] },
    },
    {
      question: 'This is my question',
      type: 'short_answer',
      answers: { answer: 'correct answer', options: [] },
    },
  ],
};

export {
  validQuiz,
  noTitleQuiz,
  noDescriptionQuiz,
  noMarkQuiz,
  noTimeQuiz,
  noQuestionsQuiz,
  noQuestionQuiz,
  noQuestionAnswerTypeQuiz,
  invalidQuestionType,
  noAnswersQuestion,
  noAnswerQuestion,
  noOptions,
  invalidTrueFalseAnswers,
};
