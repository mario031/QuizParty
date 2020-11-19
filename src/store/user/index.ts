const state = () => ({
  displayName: '',
  email: '',
});

const mutations = {
  setUserName(state: any, displayName: string) {
    state.displayName = displayName;
  },
  setUserEmail(state: any, email: string) {
    state.email = email;
  },
};

const actions = {
  login(
    { commit }: { commit: any },
    { displayName, email }: { displayName: string; email: string },
  ) {
    commit('setUserName', displayName);
    commit('setUserEmail', email);
  },
};

const getters = {
  setUserName(state: any) {
    return state.displayName;
  },
  setUserEmail(state: any) {
    return state.email;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
