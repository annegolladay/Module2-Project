/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'Git is a version control program that helps track files and your projects history and is also easily used for group projects. It is very easy for a big team to work together and easily fix any mistakes. It allows the user to track and make changes to a project. You can also go back and see whats been done in the past with the files history if needed.'


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'GitHub is a great hosting place for teams and groups to collaborate on a single code project or more. Its a great program to use together along with git that you can access from anywhere on the internet. It also allows others to see what projects you are working on if set to public. Others can actually fork your project and use your code as well.'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = {
    description:'This command initializes a local repository right here in this folder',
    code:'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = {
    description: 'This command copies a repository from GitHub and puts it directly on my computer',
    code: 'git clone REPO_URL'
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = {
    description: 'This command tells me about the repository',
    code: 'git status'
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: 'This command can add file contents and can also be tracked, can be used multiple times before a commit, and updates the current content of the working tree',
    code: 'git add'
}


//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {
    description: 'This command creates a snapshot of the files I am tracking and is the core building block units of a Git project timeline',
    code: 'git commit'
}


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = {
    description: 'This command puts my local commits on GitHub and transfers local repository to remote repository',
    code: 'git push REPO_NAME'
}