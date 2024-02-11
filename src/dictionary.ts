export const mainDictionary = {
  modalTitle: 'Awesome Quiz Application',
  timeOff: 'Time Off',
  timeLeft: 'Time Left',
  dialogTitle: 'Some Rules of this Quiz',
  resultText: "You've completed the Quiz!",
  dialogRules: [
    {
      id: 1,
      text: 'You will have only <strong style="color: #007bff; font-weight: bold;">15 seconds</strong> per each question.',
    },
    { id: 2, text: "Once you select your answer, it can't be undone." },
    { id: 3, text: "You can't select any option once time goes off." },
    { id: 4, text: "You can't exit from the Quiz while you're playing." },
    { id: 5, text: "You'll get points on the basis of your correct answers." },
  ],
  scoreResultTexts(correct: number, total: number): string {
    return `${
      correct >= 5 ? 'and congrats! 🎉' : correct >= 2 ? 'and nice 😎' : 'and sorry 😐'
    }, You got <strong>${correct}</strong> out of <strong>${total}</strong>`;
  },
};
