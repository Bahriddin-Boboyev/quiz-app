import { makeAutoObservable } from 'mobx';
import { Question } from '@/types';

class QuestionSlice {
  questions: Question[] = [];
  currentAnswer: string[] = [];
  currentNumber: number = 0;
  totalAnswer: number = 0;
  totalCorrectAnswer: number = 0;
  notificationMsg: string = '';
  userAnswer: string = '';
  isCorrectAnswer: boolean = false;
  isDialog: boolean = false;
  isModal: boolean = false;
  isLoading: boolean = false;
  isOpenNotification: boolean = false;
  isResultModal: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setQuestion = (newQuestions: Question[]) => {
    this.questions = newQuestions;
    this.currentAnswer = newQuestions[this.currentNumber].answers;
    this.totalAnswer = newQuestions.length;
  };

  openDialog = () => {
    this.isDialog = true;
  };

  closeDialog = () => {
    this.isDialog = false;
  };

  setModal = (value: boolean) => {
    this.isModal = value;
  };

  setLoading = (value: boolean) => {
    this.isLoading = value;
  };

  setNotification = (value: string) => {
    this.notificationMsg = value;
  };

  setOpenNotification = (value: boolean) => {
    if (value) this.isModal = false;

    this.isOpenNotification = value;
  };

  setCurrentAnswer = () => {
    if (this.currentNumber < this.totalAnswer) {
      this.currentNumber = this.currentNumber + 1;
      this.currentAnswer = this.questions[this.currentNumber]?.answers;
    }
  };

  checkAnswer = (answer: string) => {
    if (this.currentNumber <= this.totalAnswer) {
      this.userAnswer = answer;
      if (answer === this.questions[this.currentNumber]?.correct_answer) {
        this.totalCorrectAnswer = this.totalCorrectAnswer + 1;
        this.isCorrectAnswer = true;
      } else {
        this.isCorrectAnswer = false;
      }
    }
  };

  nextButton = () => {
    this.userAnswer = '';
    this.isCorrectAnswer = false;
    if (this.currentNumber < this.totalAnswer) {
      this.setCurrentAnswer();
    }

    if (this.currentNumber == this.totalAnswer) {
      this.setResultModal(true);
      this.setModal(false);
      this.currentNumber = 0;
      this.userAnswer = '';
    }
  };

  setResultModal = (value: boolean) => {
    if (!value) {
      this.restValues();
    }
    this.isResultModal = value;
  };

  restValues = () => {
    this.totalAnswer = 0;
    this.totalCorrectAnswer = 0;
    this.isCorrectAnswer = false;
    this.isResultModal = false;
  };

  restNotification = () => {
    this.notificationMsg = '';
    this.isOpenNotification = false;
  };
}

export default new QuestionSlice();
