// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAolQaEnK2ayVgajJJ0pr_r7U7bIAZ-eFY",
  authDomain: "inmovate-34a89.firebaseapp.com",
  projectId: "inmovate-34a89",
  storageBucket: "inmovate-34a89.appspot.com",
  messagingSenderId: "44497495882",
  appId: "1:44497495882:web:06128f9d622dc55b1003b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadImage = async (file) => {
  console.log(file);
  const storageRef = ref(storage, `${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);
  alert("ya esta cargado");
  return await getDownloadURL(storageRef);
};
