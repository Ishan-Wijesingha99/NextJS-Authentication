import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// here we are importing the User type from firebase package!!! How cool!
import { User } from 'firebase/auth';



interface AuthContextProps {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string) => Promise<any>;
  logout: () => void;
  googleSignIn: () => void;
}



export const AuthContext = React.createContext<AuthContextProps | any >(null);
export const useAuth = () => {
  return useContext(AuthContext)
}



export function AuthProvider({ children }: { children: React.ReactNode }) {
  
  const [currentUser, setCurrentUser] = useState<any>(null);

  // register and login functions for email and password
  const signup = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
  const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  
  // logout function
  const logout = () => signOut(auth);

  // sign in with google (remember, you can't register a google account, you can only use a pre-existing one to sign in)
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      console.log(user)
    });

    return unsubscribe;
  }, []);

  const value: AuthContextProps = { 
    currentUser: currentUser,
    login,
    signup,
    logout,
    googleSignIn
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}