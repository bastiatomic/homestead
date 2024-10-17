import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private auth: Auth) { }
  private firestore = inject(Firestore);

  signIn(mail: string, password: string) {
    signInWithEmailAndPassword(this.auth, mail, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log('User signed up:', user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error('Error during sign up:', error);
      });
  }

  async saveDocument(data: any) {
    try {
      await setDoc(doc(this.firestore, 'sudoku', 'bastiatomic'), data);
      console.log("Success!");
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  async getDocument(collection: string, document: string): Promise<any | null> {
    try {
      const docRef = doc(this.firestore, collection, document);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching document:", error);
      return null;
    }
  }
}
