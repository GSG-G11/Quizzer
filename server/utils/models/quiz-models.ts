const validQuiz = {
  title: 'my first quiz',
  description: 'my first quiz description',
  mark: 20,
  time: 30,
  questions: [
    {
      question: 'This is my question',
      type: 'mcq',
      answers: [
        { answer: 'this is the answer', is_correct: false },
        { answer: 'this is the answer', is_correct: false },
        { answer: 'this is the answer', is_correct: false },
        { answer: 'this is the answer', is_correct: true },
      ],
    },
    {
      question: 'This is my question',
      type: 'true_false',
      answers: [
        { answer: 'this is the answer', is_correct: true },
        { answer: 'this is the answer', is_correct: false },
      ],
    },
    {
      question: 'This is my question',
      type: 'short_answer',
      answers: [{ answer: 'this is the answer', is_correct: true }],
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
      answers: [{ answer: 'this is the answer', is_correct: true }],
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
      answers: [{ answer: 'this is the answer', is_correct: true }],
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
      answers: [{ answer: 'this is the answer', is_correct: true }],
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
      answers: [{ answer: 'this is the answer', is_correct: true }],
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
      answers: [{ answer: 'this is the answer', is_correct: true }],
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
      answers: [{ answer: 'this is the answer', is_correct: true }],
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
      answers: [{ answer: 'this is the answer', is_correct: true }],
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
      answers: [{ is_correct: true }],
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
};
