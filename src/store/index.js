import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: '',
    password: '',
    journal: [
      {
        id: 1,
        text: 'Entry 1',
        timestamp: new Date(),
      },
      {
        id: 2,
        text: 'Entry 2',
        timestamp: new Date(),
      },
    ],
  },
  getters: {
    getAll: (state) => state.journal,
    getDone: (state) => state.journal.filter((item) => item.done),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
