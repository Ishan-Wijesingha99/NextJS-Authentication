import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// here we are importing the User type from firebase package!!! How cool!
import { User } from 'firebase/auth';



interface AuthContextProps {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string) => Promise<any>;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextProps | any >(null);



export const useAuth = () => {
  return useContext(AuthContext)
}



export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>(null);

  const signup = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
  const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextProps = { 
    currentUser: currentUser,
    login,
    signup,
    logout
  };

  console.log(value)

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}