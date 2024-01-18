import { defineStore } from 'pinia';

export const useWhatWeDoStore = defineStore("whatWeDo", {
  state: () => ({
    title: "What do we do?",
    details: "You might not have heard of us, but we're the people behind the following impactful programmes.",
    thingsWeDo: [{id: 1, name: "get-online", heading: "Get online week", text: "Lorem ipsum dolor sit amet", cardButton: "Read more"}, 
    {id: 2, name: "learn-my-way", heading: "Learn my way", text: "Lorem ipsum dolor sit amet", cardButton: "Read more"},
    {id: 3, name: "make-it-click", heading: "Make it click", text: "Lorem ipsum dolor sit amet", cardButton: "Read more"},
    {id: 4, name: "digital-you", heading: "Digital you", text: "Lorem ipsum dolor sit amet", cardButton: "Read more"}],
    cardButtonClass: "card__button card__button--red",
    button: {name: "more-about", text: "More about what we do"}
  }),
  getters: {
    getTitle: (state) => {
      return state.title;
    },
    getDetails: (state) => {
      return state.details;
    },
    getThingsWeDo: (state) => {
      return state.thingsWeDo;
    },
    getCardButtonClass: (state) => {
      return state.cardButtonClass;
    },
    getButton: (state) => {
      return state.button;
    }
  },
  actions: {

  }
})