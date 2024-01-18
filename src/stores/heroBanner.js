import { defineStore } from 'pinia';

export const useHeroBannerStore = defineStore("heroBanner", {
  state: () => ({
    heading: "Get online week 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Get involved now!"
  }),
  getters: {
    getHeading: (state) => {
      return state.heading;
    },
    getText: (state) => {
      return state.text;
    },
    getButtonText: (state) => {
      return state.buttonText;
    }
  },
  actions: {

  }
})