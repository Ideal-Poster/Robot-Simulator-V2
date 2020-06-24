document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  keyEvents = [ "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
  document.addEventListener("keydown", function(event) {
      let keyInput = event.key;
      let moveList = document.getElementById("moves-container");

      if (keyEvents.includes(keyInput)) {
        // console.log(moveList.);
        let listElement = document.createElement("li");
            listElement.innerText = `${keyInput}`;
        moveList.append(listElement)
      }
  })
})
