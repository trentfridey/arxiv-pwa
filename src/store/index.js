import Vue from "vue";
import Vuex from "vuex";
import { arxiv } from "../constants";
import { parseString } from "xml2js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    hasError: false,
    hasSuccess: false,
    data: []
  },
  mutations: {
    fetchLatestPapersBegin(state) {
      state.isLoading = true;
      state.hasError = false;
    },
    fetchLatestPapersSuccess(state, data) {
      state.hasError = false;
      state.isLoading = false;
      state.hasSuccess = true;
      state.data = [...state.data, ...data];
    },
    fetchLatestPapersFailure(state, err) {
      state.hasError = err;
      state.isLoading = false;
      state.hasSuccess = false;
    }
  },
  getters: {
    getPapers(state) {
      return state.data;
    }
  },
  actions: {
    async fetchLatestPapers({ commit }) {
      commit("fetchLatestPapersBegin");
      try {
        const response = await Vue.axios.get(arxiv);
        parseString(response.data, (err, result) => {
          if (err) {
            commit("fetchLatestPapersFailure", err);
          } else {
            commit("fetchLatestPapersSuccess", result.feed.entry);
          }
        });
      } catch (err_1) {
        commit("fetchLatestPapersFailure", err_1);
      }
    }
  },
  modules: {}
});
