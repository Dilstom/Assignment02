let firstInt = Number(prompt('Enter the first integer'));
let secondInt = Number(prompt('Enter the second integer'));

isNaN(firstInt) === true || isNaN(secondInt) === true ? document.write('Please enter only integers '):
firstInt === secondInt ? document.write('Both numbers are equal to each other: ', firstInt):
firstInt > secondInt ? document.write("First integer is larger: ", firstInt) : document.write("Second integer is larger: ", secondInt);