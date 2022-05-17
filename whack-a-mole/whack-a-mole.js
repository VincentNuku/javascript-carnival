  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")
//Crate a variable using the TD element, creating cells
let cells = document.getElementsByTagName('TD')

let randomIndex = Math.floor(Math.random() * cells.length)

let randomCell =cells[randomIndex]
//SomeHow I'm needing to get a PNG image
let mole = document.createElement('img');
//Link to PNG won't show the mole.
mole.src = './mole.PNG'
mole.id = "mole"
console.log()
randomCell.appendChild(mole);

mole.onclick = whackedMole
//Create a functon whacking mole onclick
function whackedMole() {
    randomIndex = Math.floor(Math.random() * cells.length)
    randomCell = cells[randomIndex]
    randomCell.appendChild(mole);
//Add audio to make sound whack-a-mole 
    let audio = new Audio('./whack-audio.wav')
    audio.play();
}
