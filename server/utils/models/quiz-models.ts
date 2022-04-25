const quiz = {
  quizId: 'id_one',
  title: 'my first quiz',
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

export default quiz;
