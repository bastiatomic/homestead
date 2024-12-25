//create a new list of cards based on input params (e.g. amount and shuffled)

import { Injectable } from '@angular/core';
import { CardType } from './CardType';
import { CardGenService } from './card-gen.service';

@Injectable({
  providedIn: 'root'
})
export class AscendingNumbersService {

    constructor(private CardGen: CardGenService){}

    start(n: number): CardType[]{

        return this.CardGen.shuffle(Array.from({ length: n }, (_, i) => (
            {isVisible: true, 
            element: i+1,
            displayName: i+1,
            hasImage: false} as CardType)))

    }

}