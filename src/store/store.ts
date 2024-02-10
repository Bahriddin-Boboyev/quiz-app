import { makeAutoObservable } from 'mobx';
import { Question } from '@/types';

class QuestionSlice {
  questions: Question[] = [];
  isDialog: boolean = false;
  isModal: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setQuestion = (newQuestions: Question[]) => {
    this.questions = newQuestions;
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
}

export default new QuestionSlice();
