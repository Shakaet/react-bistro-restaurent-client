import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './component/firebase.init';

import { GoogleAuthProvider } from "firebase/auth";
import UseAxiosPublic from './hook/UseAxiosPublic';




export let AuthContext= createContext(null)



const Provider = ({children}) => {

    let [user,setUser]=useState(null)
    let [loading,setLoading]=useState(true)

    let axiosPublic= UseAxiosPublic()

   

    const provider = new GoogleAuthProvider();



    let goggleLogin=()=>{

        return signInWithPopup(auth, provider)
    }



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

              if(currentUser){
                // get token and store client

                let userInfo={email:currentUser?.email}

                axiosPublic.post("/jwt",userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem("access-token",res.data.token)
                    }
                })
              }

              else{
                // Todo:remove token (if token stored in the client side:local Storage)
                localStorage.removeItem("access-token")
              }
          
              setLoading(false)
            
            
    
            return ()=>{
                unsubscribe()
            }
            
          });
      },[axiosPublic])

let val={

    
    createRegistered,
    loginSetup,
    signOuts,
    user,
    loading,
    updateUserProfile,
    goggleLogin
      
}
    return (
        <AuthContext.Provider value={val}>
              {children}
        </AuthContext.Provider>
    );
};

export default Provider;