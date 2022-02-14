import {getAuth,signInWithPopup,GoogleAuthProvider,signOut} from "firebase/auth"
import {app} from "../config/firebase"

import {getFirestore,query,where,getDocs,collection,addDoc} from "firebase/firestore"

const db= getFirestore(app);
const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider()
  
const GoogleAuth = async () =>{
    try {
        const res = await signInWithPopup(auth,googleProvider);
        GoogleAuthProvider.credentialFromResult(res);
        // const token = credential.accessToken;
        const user = res.user;
        const qry = query(collection(db,"users"),where("uid","==",user.uid));
        const docs = await getDocs(qry);
        if(docs.docs.length === 0){
            await addDoc(collection(db,"users"),{
                uid:user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }

    } catch (error) {
        console.log(error)
        
    }
};


const logout = () =>{
    signOut(auth)
}

  

export {
    auth,
    db,
    GoogleAuth,
    logout,
}