import { createStore } from "vuex";
import auth from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("state change", state.user);
    },
  },
  actions: {
    async signup(context, payload) {
      console.log("signup action", payload);
      const res = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      if (res) {
        context.commit("setUser", res.user);
      } else throw new Error("Couldn't create user");
    },

    async login(context, payload) {
      console.log("login action", payload);
      const res = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      if (res) {
        context.commit("setUser", res.user);
      } else throw new Error("Couldn't login user");
    },
    async logout(context) {
      console.log("logout action");
      const res = await signOut(auth);
      if (res) {
        context.commit("setUser", null);
      }
    },
  },
});
export default store;
