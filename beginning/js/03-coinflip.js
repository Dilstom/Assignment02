let coinFlip = Math.round(Math.random()*10); // 0-9

console.log(coinFlip);

let choice = prompt('Please select "heads" or "tails"');
console.log('choice: ', choice);

let result;

coinFlip >= 5 ? result = 'heads' : result = 'tails';
console.log('result: ', result)


if(choice === 'heads' || choice === 'tails'){
    if(result === 'heads') {
        result === choice ? document.write('The flip was heads and you chose heads...you win!') : document.write('The flip was heads but you chose tails...you lose!')
    } else if(result === 'tails' ){
        result === choice ? document.write('The flip was tails and you chose tails...you win!') : document.write('The flip was tails but you chose heads...you lose!')
    } 
} else { // User enters anything but those two code words
    document.write('Please select "heads" or "tails" ')
}