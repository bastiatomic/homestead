import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, addDoc, doc, getDoc, setDoc,collection } from '@angular/fire/firestore';
import { Transaction } from './finance/Transaction';

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

  async saveDocument(collection: string, document: string, data: any) {
    try {
      await setDoc(doc(this.firestore, collection, document), data);
      console.log("Success!");
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  async newDocument(collectionName: string, data: any) {
    try {
      const docRef = await addDoc(collection(this.firestore, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async addTransaction(data: Transaction){
    console.log(data)
    //TODO: convert me to a standalone cloud function

    //Step 1: Add to finance-transactions
    this.newDocument("finance-transactions", data)

    //Step 2: Add to finance-sums

    let currentBalance = await this.getDocument("finance-sums", "DeutscheBank")
    currentBalance = currentBalance.value;
    data.value += currentBalance;

    this.saveDocument("finance-sums", data.account, {value: data.value})


    //Step 1: Add to finance-history
  }
  async editTransaction(){
    //convert me to a standalone cloud function
  }
  async removeTransaction(){
    //convert me to a standalone cloud function
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
