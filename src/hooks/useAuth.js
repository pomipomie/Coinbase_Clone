import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useContext, useState } from 'react';

import { UserContext } from '../contexts/UserContext';
import { auth } from '../firebase-config';

const useAuth = () => {
  const { setUser, authError, setAuthError } = useContext(UserContext);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  // const [signInWithPopup, setsignInWithPopup] = useState('');

  const handleSignIn = async (signInMethod, e = {}) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    
      // .catch((error) => {
      //   // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // The email of the user's account used.
      //   const email = error.customData.email;
      //   // The AuthCredential type that was used.
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      //   // ...
      //   console.log(
      //     `errorCode: ${errorCode}
      //     errorMessage: ${errorMessage}
      //     errorEmail: ${email}
      //     errorCredential: ${credential}`
      //   )
      // });


    try {
      switch (signInMethod) {
        case 'email':
          e.preventDefault();
          await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
          setAuthError('');
          break;

        case 'guest':
          await signInAnonymously(auth);
          setAuthError('');
          break;

        case 'google':
          console.log('google!');
          await signInWithPopup(auth, provider) // PROBLEM IS HERE?
          console.log(`a: ${auth}, p: ${provider}`)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(
              console.log(
                `token: ${token}
                credential: ${credential}
                user: ${user}`
              )
            )
          })
          setAuthError('');
          break;

        default:
          return;
      }
    } catch (error) {
      setAuthError(error?.code);
      console.error(error?.code);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(
        `errorCode: ${errorCode}
        errorMessage: ${errorMessage}
        errorEmail: ${email}
        errorCredential: ${credential}`
      )
    }
  };

  const handleSignUp = async (signUpMethod, event = {}) => {
    // const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      switch (signUpMethod) {
        case 'email':
          event.preventDefault();
          await createUserWithEmailAndPassword(
            auth,
            signUpEmail,
            signUpPassword
          );
          setAuthError('');
          break;

        case 'guest':
          await signInAnonymously(auth);
          setAuthError('');
          break;

        // case 'google':
        //   await signInWithPopup(auth, provider)
        //   .then((result) => {
        //     console.log('result: '+result)
        //     // This gives you a Google Access Token. You can use it to access the Google API.
        //     const credential = GoogleAuthProvider.credentialFromResult(result);
        //     const token = credential.accessToken;
        //     // The signed-in user info.
        //     const user = result.user;
        //     console.log(
        //       console.log(
        //         `token: ${token}
        //         credential: ${credential}
        //         user: ${user}`
        //       )
        //     )
        //   })
        //   setAuthError('');
        //   break;

        default:
          return;
      }
    } catch (error) {
      setAuthError(error?.code);
      console.error(error?.code);
    }
  };

  const signout = () => signOut(auth);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return {
    signInEmail,
    setSignInEmail,
    signInPassword,
    setSignInPassword,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signInWithPopup,
    authError,
    setAuthError,
    handleSignIn,
    handleSignUp,
    signout,
  };
};

export default useAuth;
