//create a new list of cards based on input params (e.g. amount and shuffled)

import { Injectable } from '@angular/core';
import { Card } from '../cards/CardType';
import { Symbol, ValueType } from '../cards/CardType';
import { CardType } from './CardType';
import { PLANTS_LIST } from '../../../assets/anno-1800-plants/plants';

@Injectable({
  providedIn: 'root',
})
export class CardGenService {
  constructor() {}
  cardIconList = PLANTS_LIST;

  cardGenDISCONTINUED(amount: number): Card[] {
    const values: ValueType[] = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A',
    ];
    const symbolsBlack: Symbol[] = ['♧', '♤'];
    const symbolsRed: Symbol[] = ['♡', '♢'];
    let cards: Card[] = [];

    values.forEach((value1) => {
      symbolsBlack.forEach((symbol1) => {
        cards.push({
          value: value1,
          symbol: symbol1,
          color: 'black',
        });
      });

      symbolsRed.forEach((symbol1) => {
        cards.push({
          value: value1,
          symbol: symbol1,
          color: 'red',
        });
      });
    });

    return cards.slice(0, amount);
  }

  shuffle(array: any[]): any[] {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  getRandomNumbers(n: number): any[] {
    if (n > 53) {
      throw new Error(
        'Cannot generate more than 53 unique numbers between 0 and 52.'
      );
    }

    let randomNumbers = new Set();

    while (randomNumbers.size < n) {
      let randomNumber = Math.floor(Math.random() * 52); // 0 to 52 excluded
      randomNumbers.add(randomNumber);
    }

    return Array.from(randomNumbers);
  }

  getRandomNumbers_2(listLength: number, amountToBeFetched: number): number[] {
    return Array.from({ length: listLength }, (_, i) => i + 1)
      .sort(() => 0.5 - Math.random())
      .slice(0, amountToBeFetched);
  }

  newBoard(length: number): CardType[] {
    let board: CardType[] = [];
    const cardIconListLength: number = this.cardIconList.length - 1;
    const indiceList: number[] = this.getRandomNumbers_2(
      cardIconListLength,
      length
    );

    for (const randomIndex of indiceList) {
      // create a suitable displayname
      const elementName = this.cardIconList[randomIndex];
      const displayName = elementName
        .replace(/_/g, ' ')
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');

      //double it
      for (let _ = 0; _ < 2; _++) {
        board.push({
          element: elementName,
          displayName: displayName,
          isVisible: false,
          hasImage: true,
        });
      }
    }

    //force the loading of all images on init (offline hack)
    for (const variable of [true, false]) {
      setTimeout(() => {
        board.forEach((item) => {
          item.isVisible = variable;
        });
      }, 0.1);
    }

    board.sort(() => 0.5 - Math.random());
    return board;
  }
}
