// import { firebase } from '~/plugins/firebase';

// const state = () => ({
//   userUid: '',
//   userName: '',
// });

// const mutations = {
//   setUserUid(state: any, userUid: string) {
//     state.userUid = userUid;
//   },
//   setUserName(state: any, userName: string) {
//     state.userName = userName;
//   },
// };

// const actions = {
//   async login({ commit }: { commit: any }) {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     try {
//       const result = await firebase.auth().signInWithPopup(provider);
//       const user = result.user;
//       if (!user) return;
//       commit('setUserUid', user.uid);
//       commit('setUserName', user.displayName);
//     } catch (error) {
//       const errorCode = error.code;
//       console.log('error : ' + errorCode);
//     }
//   },
// };

// const getters = {
//   getUserUid(state: any) {
//     return state.userUid;
//   },
//   getUserName(state: any) {
//     return state.userName;
//   },
// };

// export default {
//   state,
//   getters,
//   actions,
//   mutations,
// };
