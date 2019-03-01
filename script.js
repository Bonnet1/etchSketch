/********** Variables **********/

const container = document.querySelector('#container');

/********** Event Listeners **********/

container.addEventListener("mouseover", function (event) {
    event.target.style.background = 'blue';
}, false);

/********** Functions **********/

function genDivs(v){ 
    /*var e = document.body; // whatever you want to append the rows to: */
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= v; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.innerText = (i * v) + x;
          cell.setAttribute('style', 'aspect-ratio: 1/1');
          row.appendChild(cell); 
      } 
      container.appendChild(row); 
    } 
    /*document.getElementById("code").innerText = e.innerHTML;*/

  }