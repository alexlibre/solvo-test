import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

const API = 'https://my-json-server.typicode.com/alexlibre/solvo-test';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: '',
    password: '',
    posts: [],
  },
  getters: {
    getAll: (state) => state.posts,
  },
  mutations: {
    SET_POSTS: (state, payload) => {
      state.posts = payload;
    },
  },
  actions: {
    GET_POSTS: async (context) => {
      const { data } = await Axios.get(`${API}/posts`);
      context.commit('SET_POSTS', data);
    },
  },
  modules: {
  },
});
