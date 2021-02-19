// The “Grade Assigner” Application

// Collect the a number between 1 and 100 from the user. 
let selectedNum = Number(prompt('Enter a number between 1 and 100'));

// console.log(isNaN(selectedNum))

// only numbers between 1 and 100 are accepted
if(selectedNum < 1 || selectedNum > 100 || isNaN(selectedNum) === true) {
    document.write('Only numbers between 1 and 100 are accepted. Please refresh your browser to start the application again');
    console.log('Only numbers between 1 and 100 are accepted. Please refresh your browser to start the application again');  
} else {
    // if(selectedNum >= 60 && selectedNum <= 69){
    //     console.log('You received a D')
    // }else if(selectedNum >= 70 && selectedNum <= 79) {
    //     console.log('You received a C')
    // }else if(selectedNum >= 80 && selectedNum <= 89) {
    //     console.log('You received a B')
    // }else if(selectedNum >= 90 && selectedNum <= 100) {
    //     console.log('You received an A')
    // } else {
    //     console.log('You received an F')
    // }
    
    // more concise code
    if (selectedNum >= 90) console.log('You received an A')
    else if (selectedNum >= 80) console.log('You received a B')
    else if (selectedNum >= 70) console.log('You received a C')
    else if (selectedNum >= 60) console.log('You received a D')
    else console.log('You received an F')
}

