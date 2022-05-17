  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//Bind some Javascript functions to the arrow keys
//(up and down)will move between different parts of the clown.
//(left and right) will cycle between different clothing options
console.log("Dress The Clown!")

document.onkeydown = checkKey;





function checkKey(e) {

    console.log(e)
    
    if (e.keyCode == '38') {
        changeVertical(-1) //decrease the index
    }
    else if (e.keyCode == '40') {
             changeVertical(+1) //Increase the index
    }
    else if (e.keyCode == '37') {
        changeHorizontal(-1) //move one position to left
    }
    else if (e.keyCode == '39') {
        changeHorizontal(1) //move one position to right
    }

}

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0

let indexes = [0, 0, 0] //Combining the shifting of keys in to 1 by using an Array.
let seniorIndex = 0     //^Array stops the repeating of code

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

let imgs = [head, body, shoes] //Collating the 3 partys head, body and shoes into an array. 
let strings = ["head", "body", "shoes"] //Creating a string of arrays to collate all imgage links

function changeHorizontal(shift) {
  
  let index = indexes[seniorIndex]
  let image = imgs[seniorIndex]
  let str = strings[seniorIndex]
  
  index += shift
    
  if (index < 0)
      index = 5
    
  if (index > 5)
      index = 0
    
indexes[seniorIndex] = index //reversed psycology on the above let index = indexes lol
    
  image.src = "./images/" + str + index + ".png"
}

function changeVertical(shift) {
  seniorIndex += shift
  if (seniorIndex < 0)
      seniorIndex = 2
  
  if (seniorIndex > 2)
      seniorIndex = 0
}
// This was really amazing ...totally seen variables at work. Seen Functions and the If statements in this.
// Then got to see how an array could collate the if statements to stop the repeating of the code in a cleaner code.