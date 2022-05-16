  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

document.getElementById("uni0").onclick = clicked
document.getElementById("uni1").onclick = clicked
document.getElementById("uni2").onclick = clicked

let inflation = [0, 0, 0]

function clicked(event)  {
  let unicorn = event.target
  let id = unicorn.id[3]

  inflation[id]++

  if (inflation[id] == 4) 
      inflation[id] = 0
      
  unicorn.src = "./images/unicorn-" + inflation[id] + ".png"
}
