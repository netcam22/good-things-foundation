import { defineStore } from 'pinia';

export const useHelpBoxStore = defineStore("HelpBox", {
  state: () => ({
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