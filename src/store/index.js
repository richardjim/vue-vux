import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload;
    },
    // decrement(state, payload) {
    //   state.counter = state.counter - payload;
    // },
  },
});

export default store;
