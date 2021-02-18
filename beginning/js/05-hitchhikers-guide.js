// The “Hitchhiker’s Guide to the Galaxy” Game

// Prompt the user and ask them if they are ready to play the game. If they say “yes”, continue. If they say “no” or anything other than “no”, thank them and ask them to play again sometime. 

let answer = prompt('Welcome traveler! Are you ready to play the game? (yes/no)');

if (answer !== 'yes') {
    document.write('Thank you! Come back to play again sometime...')
} else {
    alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');

    let direction = prompt('Which direction would you like to head (please enter forward, left, or right).')
    // Using a switch statement, evaluate the direction that the user selected.
    switch(direction) {
        case "left":
            alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!")
            break;
        case "forward":
            alert('You walk 100 yards and safely make your way out of the cave.')
            break;
        case "right":
            alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!')
            break;
        default: // f the user selects anything other than forward, left, or right alert the user 
            alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.')
    }

    let rating = Number(prompt('Please rate the game between 1 and 10'));

    if(rating < 1 || rating > 10 || isNaN(rating) === true) {
        alert("Thank you for playing the game");
        // break;
    }else if(rating >=6 && rating <=10){
        alert("Thank you! Do you want to play this game again?")
    } else {
        alert("Thank you! We are working hard to improbe the game")
    }
}