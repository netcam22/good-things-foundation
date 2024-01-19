import { defineStore } from 'pinia';

export const useQuestionBoxStore = defineStore("questionBox", {
  state: () => ({
    ariaLabel: "how-can-we-help",
    heading: "How can we help you?",
    text: "Let us know who you are and what you're looking for, and we'll help you get to the right place."
  }),
  getters: {
    getHeading: (state) => {
      return state.heading;
    },
    getText: (state) => {
      return state.text;
    }
  },
  actions: {

  }
})