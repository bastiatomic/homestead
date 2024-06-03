/**
 * CODING CHALLENGE
 * 
 * given a list of numbers, a victoryNumber, victoryIndex and distancesList
 * Goal: The victoryIndex shall contain the victoryNumber.
 * 
 * Rules:
 * - We can move numbers around by swapping them using their index
 * - If we move a specific number, we have to move ALL occurences of the number by the same "distance"
 * - Distance is defined as the distance of both indice to each other.
 * - We are only allowed to swap, when the distance is inside the distancesList
 * 
 * Additional Guideance:
 * - IndexOutOfBounds can be neglected.
 * - The "Goal" can always be reached.
 * 
 * All set? Go!
 */
function foo(){


    for(let i = 0; i<100000; i++){

        /*
        let x = JSON.parse(JSON.stringify([
        9,9,1,9,9,9,
        9,9,0,9,9,9,
        9,0,2,0,0,9,
        9,9,9,0,9,9,
        9,9,9,3,9,9,
        9,9,9,0,9,9,
      ]))*/
    }

}
let timeElapsed = performance.now();

foo()

timeElapsed += (performance.now()-timeElapsed)

console.log(timeElapsed)