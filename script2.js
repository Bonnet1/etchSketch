/********** Variables **********/

const container = document.querySelector('#container');
const firstGridSize = 12;

/********** Functions **********/

function genDivs(num){ 
    /*var e = document.body; // whatever you want to append the rows to: */
    for(let i = 0; i < num*num; i++){ 
      let grid = document.createElement("div");
      grid.classList.add("grdSqr");
      grid.style.border = "0px";
      container.appendChild(grid);
    } 
    /*document.getElementById("code").innerText = e.innerHTML;*/
    container.style.cssText = ("grid-template-columns: repeat(" + num + ", 1fr); grid-template-rows: repeat(" + num + ", 1fr)");
  }

  function coloring() {
    const squares = document.querySelectorAll(".grdSqr");
    for(let i = 0; i < squares.length; i++){
      squares[i].addEventListener("mouseenter", function(e){
        e.target.style.cssText = "background-color: black";
      });
    }
  }

  function gridSize(){
    while(container.firstChild){
       container.removeChild(container.firstChild);
     }
   numOfGrids = Number(prompt("How many squares per side?"));
   genDivs(numOfGrids);
   coloring();
    }