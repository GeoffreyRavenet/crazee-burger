import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists) {
    const docData = docSnap.data()
    console.log(docData)
  }
}
