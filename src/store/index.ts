import Vue from 'vue';
import Vuex from 'vuex';
import {IDog} from "@/shared/model/dog.model";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    favoriteDogs: [],
  },
  getters:{
    isLoading: state => state.isLoading,
    favoriteDogs: state => state.favoriteDogs,
  },
  mutations: {
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setFavoriteDogs(state, favoriteDogs) {
      state.favoriteDogs = favoriteDogs;
    },
  },
  actions: {
    actionFavoriteDogs(context, data){
      const favoriteDogs = context.getters.favoriteDogs
      const indexOfElement = favoriteDogs.findIndex((el:IDog) => {
        return el.link === data.link
      })
      if(indexOfElement !== -1){
        favoriteDogs.splice(indexOfElement, 1)
      } else {
        favoriteDogs.push(data)
      }
      context.commit('setFavoriteDogs', favoriteDogs)
    }
  },
  modules: {
  },
});
