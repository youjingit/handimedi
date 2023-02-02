import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
	apiKey: "AIzaSyB_kaCdFlCh3Q-ZCxc41rSZt454gcnkIPs",
	authDomain: "todoproject-ef408.firebaseapp.com",
	databaseURL: "https://todoproject-ef408-default-rtdb.firebaseio.com",
	projectId: "todoproject-ef408",
	storageBucket: "todoproject-ef408.appspot.com",
	messagingSenderId: "1046935762011",
	appId: "1:1046935762011:web:351d0472086b517f117b7e",
};

// firebase 설정
export default firebase.initializeApp(config);

// firebase 인증 관련 서비스
export const authService = firebase.auth();

// 로그인 실행
export function login() {
	const provider = new firebase.auth.GoogleAuthProvider();
	provider.setCustomParameters({ prompt: "select_account" });
	authService.signInWithRedirect(provider);
}

// 로그인 정보 가져오기
export async function loadProfile() {
	const result = await authService.getRedirectResult();
	return result?.additionalUserInfo?.profile || null;
}
