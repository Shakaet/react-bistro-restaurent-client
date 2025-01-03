import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './component/firebase.init';



export let AuthContext= createContext(null)



const Provider = ({children}) => {

    let [user,setUser]=useState(null)
    let [loading,setLoading]=useState(true)



    let createRegistered=(email,password)=>{
        setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
    }

    let loginSetup =(email,password)=>{
        setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
    }

    let signOuts=()=>{
        setLoading(true)
        return signOut(auth)
    }

    let updateUserProfile = (name,photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
      };







    useEffect(()=>{
        let unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            
           
              setUser(currentUser)
            //   console.log(currentUser)
              setLoading(false)
            
            
    
            return ()=>{
                unsubscribe()
            }
            
          });
      },[])

let val={

    
    createRegistered,
    loginSetup,
    signOuts,
    user,
    loading,
    updateUserProfile
      
}
    return (
        <AuthContext.Provider value={val}>
              {children}
        </AuthContext.Provider>
    );
};

export default Provider;