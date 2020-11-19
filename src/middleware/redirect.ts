import firebase from '~/plugins/firebase';

export default function ({ redirect, route }: {redirect: any, route: any}) {
  firebase.auth().onAuthStateChanged(user => {
    if (!user && route.path !== '/user') {
      redirect('/user');
    }
  });
}