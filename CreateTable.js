function calculateAv() {
  var table = document.getElementById("myTable");
  var rows = table.rows;

  for (var i = 2; i < rows.length; i++) {
    var cells = rows[i].cells;
    var sum = 0;
    var cellsLength = cells.length - 2;
    var celllength2 = cells.length;

    for (var j = 2; j < cells.length; j++) {

      var cell = cells[j];
      var adder = Number(parseInt(cells[j].innerHTML)) || 0;
      sum += adder;
      if (!Number(parseInt(cells[j].innerHTML))) {
        cellsLength--;
      }
    }

    var average = (sum / cellsLength) || 0;



    table.rows[i].cells[celllength2 - 1].innerHTML = "<td>" + Math.round(average) + "%" + "</td>";

    if (Math.round(average) < 40) {
      rows[i].cells[celllength2 - 1].style.color = "white";
      rows[i].cells[celllength2 - 1].style.backgroundColor = "red";
    }

  }
}
function countUnsub() {
  var c = 0;
  var table = document.getElementById("myTable");
  var rows = table.rows;

  for (var i = 2; i < rows.length; i++) {
    var cellsLength = rows[i].cells.length - 2;
    for(var j=2; j<cellsLength+1; j++)
    {
        
        if(rows[i].cells[j].innerHTML==="-")
        {
        rows[i].cells[j].style.backgroundColor="yellow"; 
        c++;
        }
     }
  }
  document.getElementById('c').innerHTML = "Unsubmitted Assigments: "+c;
}
