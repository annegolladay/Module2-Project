const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator tool! What is your password?", function(input){

    let passwordLetters = ''

    if (passwordLetters.length >= 10) { //or input.length???
        console.log('Your password is successful!')
    } else {
        console.log('This password has failed')
    }


/*
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
    */

	// This line closes the connection to the command line interface.
	reader.close()

});
