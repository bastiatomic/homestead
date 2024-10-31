//create a new list of cards based on input params (e.g. amount and shuffled)

import { Injectable } from '@angular/core';
import { Card } from '../cards/CardType';
import { Symbol, ValueType } from '../cards/CardType';

@Injectable({
  providedIn: 'root'
})
export class CardGenService {

  constructor() { }

  cardGenDISCONTINUED(amount : number) : Card[]{
    const values : ValueType[] = ["2","3","4","5","6","7","8","9","10","J", "Q", "K", "A"]
    const symbolsBlack : Symbol[] = [  "♧" , "♤"];
    const symbolsRed : Symbol[]= [ "♡" , "♢"]
    let cards: Card[] = []

    values.forEach((value1)=>{
      symbolsBlack.forEach((symbol1)=>{
        cards.push({
          value: value1, symbol : symbol1, color: "black"

        })
      })

      symbolsRed.forEach((symbol1)=>{
        cards.push({
          value: value1, symbol : symbol1, color: "red"

        })

      })
    })

    return cards.slice(0, amount)

  }

  shuffle(array: any[]): any[]{
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  getRandomNumbers(n: number) : any[] {
    if (n > 53) {
      throw new Error("Cannot generate more than 53 unique numbers between 0 and 52.");
    }
  
    let randomNumbers = new Set();
    
    while (randomNumbers.size < n) {
      let randomNumber = Math.floor(Math.random() * 52); // 0 to 52 excluded
      randomNumbers.add(randomNumber);
    }
  
    return Array.from(randomNumbers);
  }

  getRandomNumbers_2(listLength: number, amountToBeFetched: number) : number[]{
    return Array.from({ length: listLength }, (_, i) => i + 1).sort(() => 0.5 - Math.random()).slice(0, amountToBeFetched);
  }
  
}
