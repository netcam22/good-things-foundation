import { defineStore } from 'pinia';

export const useHeadlineBannerStore = defineStore("headlineBanner", {
  state: () => ({
    heading: "We are a social change charity, helping people to improve their lives through digital.",
    text: "We tackle the most pressing issues of our time, working with partners in thousands of communities across the UK and further afield.",
    buttonText: "Learn more about us"
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