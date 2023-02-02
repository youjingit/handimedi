import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyB_kaCdFlCh3Q-ZCxc41rSZt454gcnkIPs",
  authDomain: "todoproject-ef408.firebaseapp.com",
  databaseURL: "https://todoproject-ef408-default-rtdb.firebaseio.com",
  projectId: "todoproject-ef408",
  storageBucket: "todoproject-ef408.appspot.com",
  messagingSenderId: "1046935762011",
  appId: "1:1046935762011:web:351d0472086b517f117b7e"
};

firebase.initializeApp(config);
// Initialize Firebase

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.
provider.setCustomParameters({prompt: 'select_account'});
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.
export const signInWithGoogle = () => auth.signInWithRedirect(provider);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

export default firebase;
// 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.