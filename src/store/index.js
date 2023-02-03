import { createStore } from "vuex";
import auth from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("state change", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
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

const unsubscribe = onAuthStateChanged(auth, (user) => {
  store.commit("setUser", user);
  store.commit("setAuthIsReady", true);
  unsubscribe();
});

export default store;
