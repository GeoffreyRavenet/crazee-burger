import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu.js"

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists) {
    const docData = docSnap.data()
    console.log(docData)
  }
}

export const createUser = (username) => {
  const docRef = doc(db, "users", username)
  const NOURITURE = {
    username: username,
    menu: fakeMenu.SMALL,
  }
  setDoc(docRef, NOURITURE)
}
