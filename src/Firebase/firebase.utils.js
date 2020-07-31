import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAExaKV1spdseA8mPNhfe83FCuzm0H4DMY",
  authDomain: "clothing-db-8c25f.firebaseapp.com",
  databaseURL: "https://clothing-db-8c25f.firebaseio.com",
  projectId: "clothing-db-8c25f",
  storageBucket: "clothing-db-8c25f.appspot.com",
  messagingSenderId: "997161869283",
  appId: "1:997161869283:web:9dcb93f9e95d7f3a734ad6",
  measurementId: "G-C17XMHWBS8"
};


export const createUserProfileDocument = async(userAuth ,additionalData)=>{
if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();

console.log(snapShot);

if(!snapShot.exists){
  const{displayName , email} = userAuth;
  const createdAt = new Date();

  try{
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  }catch(error){
      console.log('error creating user',error.message)
  }
}

  return userRef; 

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
