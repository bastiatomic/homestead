import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import Firestore
import { FirestoreService } from '../firestore.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [FormsModule, CommonModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'

})
export class FinanceComponent {

  email: string = ''
  password: string = '';
  user: User | undefined;

  constructor(private firebaseService: FirestoreService) {}

  signIn() {
    this.firebaseService.signIn(this.email, this.password);
  }

  async saveDocument() {
   //this.firebaseService.saveDocument()
  }

  async getDocument(collection: string, document: string){
    const doc = await this.firebaseService.getDocument(collection, document);
    console.log(doc)
  }

  

}