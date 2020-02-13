// - Create a new es6-starter project
// - Call that project: js-code-challenges
// - Change into that folder
// - Open that folder into vscode
// - Install your dependencies
// - Start your server
// - Check to make sure your project is working in the browser
// - Initialize git for that folder
// - Create a .gitignore file and ignore your node_modules
// - Create a github repo
// - Push your code up to github
// - Inside your bootstrap.js file create three functions -START FROM HERE WHEN YOU START UP AGAIN. 
// - Write three functions that compute the sum of the numbers in an array: using a for-loop, a while loop, do-while loop.
// - Push your code up to github

function myFunc() {
  var numbers = [2, 3]
  for (num in numbers) {
    return numbers[0] ** numbers[1]
  }  
  
}


console.log(myFunc())


function loopAWhile(array) {
  var sum = 0
  var i = 0
   while (i < array.length) {
     debugger
    sum += array[i];
    i++;
  }
  console.log(sum) 
}

loopAWhile([1,2,3])




function loopAWhile(array) {
  var sum = 0
  var i = 0
  do {
    sum += array[i];
    i++;
  } while (i < array.length) {
    
  console.log(sum);
  }
    

}

loopAWhile([1,2,3])


