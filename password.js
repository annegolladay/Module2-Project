const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator tool! What is your password?", function(input){

    if (input.length >= 10) { 
        console.log('Your password is successful!')
    } else {
        console.log('This password has failed')
    }


	// This line closes the connection to the command line interface.
	reader.close()

});
