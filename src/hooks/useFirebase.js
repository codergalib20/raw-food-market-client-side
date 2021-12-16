import {
  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import initializeFirebase from "../Pages/Login/firebase/firebase.init";

// Call Initialize Firebase
initializeFirebase();


export default function useFirebase() {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [customSuccess, setCustomSuccess] = useState('');
  const [customError, setCustomError] = useState('')

  setTimeout(()=>{
      setCustomSuccess('')
      setCustomError('')
  },7000)

  // ____Register New User+++++++++++++++++++
  const registerNewUser = (email, password, name, history) => 
  {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        swal("Good job!", "User create successfully", "success");
        const newUser = {email, displayName: name}
        setUser(newUser);
        saveUser(email, name);
        history.replace('/home')
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
          console.log(error)
        });
      })
      .catch((error) => {
        swal("Something Wrong", error.message, "error");
      })
      .finally(()=> setIsLoading(false));
  };

  // ____Login User+++++++++++++++++++
  const loginUser = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/home';
        history.replace(destination);
        swal("Good job!", "User Login successfully", "success");
      })
      .catch((error) => {
        swal("Something Wrong", error.message, "error");
      })
      .finally(()=>setIsLoading(false));
  };

  useEffect(()=>{
    const subscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => subscribe;
  },[auth])

  // ____Create User Save Database+++++++++
  const data = new Date();
  const saveUser = (email, displayName) =>{
    const newUser = {email, displayName, createdAt: data.toString()}
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  const logOutUser = () => {
    setIsLoading(true);
    signOut(auth).then(() => { 
    }).catch((error) => {
      swal("Something Wrong", error.message, "error");
    })
    .finally(()=>setIsLoading(false));
  }

  return {
    user,
    setUser,
    isLoading,
    registerNewUser,
    loginUser,
    customSuccess,
    customError,
    logOutUser,
    setCustomError
  };
}
