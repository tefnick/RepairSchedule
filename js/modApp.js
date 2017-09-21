var today = new Date().getDay();

/*convert today to dayofWeek */
var dayofWeek;	
if(today === 0){
	dayofWeek = "Sunday";
}else if(today === 1){
	dayofWeek = "Monday";
}else if(today === 2){
	dayofWeek = "Tuesday";
}else if(today === 3){
	dayofWeek = "Wednesday";
}else if(today === 4){
	dayofWeek = "Thursday";
}else if(today === 5){
	dayofWeek = "Friday";
}else if(today === 6){
	dayofWeek = "Saturday";
}

var normSchedule = 
	'<table>'+
      '<thead>'+
      '<tr>'+
      	'<td></td>'+
        '<td>10:00am</td>'+
        '<td>10:30am</td>'+
        '<td>11:00am</td>'+
        '<td>11:30am</td>'+
        '<td>12:00pm</td>'+
        '<td>12:30pm</td>'+
        '<td>1:00pm</td>'+
        '<td>1:30pm</td>'+
        '<td>2:00pm</td>'+
        '<td>2:30pm</td>'+
        '<td>3:00pm</td>'+
        '<td>3:30pm</td>'+
        '<td>4:00pm</td>'+
        '<td>4:30pm</td>'+
        '<td>5:00pm</td>'+
        '<td>5:30pm</td>'+
        '<td>6:00pm</td>'+
        '<td>6:30pm</td>'+
        '<td>7:00pm</td>'+
        '<td>7:30pm</td>'+
        '<td>8:00pm</td>'+
        '<td>8:30pm</td>'+
        '<td>9:00pm</td>'+
      '</tr>'+
      '</thead>'+
      '<tbody>'+
        '<tr>'+
          '<td>Number of Repairs</td>'+
          '<td>N/A</td>'+
          '<td>N/A</td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
        '</tr>'+
      '</tbody>'
    '</table>';
	
var sundaySchedule =
	'<table>'+
      '<thead>'+
      '<tr>'+
      	'<td></td>'+
        '<td>12:00pm</td>'+
        '<td>12:30pm</td>'+
        '<td>1:00pm</td>'+
        '<td>1:30pm</td>'+
        '<td>2:00pm</td>'+
        '<td>2:30pm</td>'+
        '<td>3:00pm</td>'+
        '<td>3:30pm</td>'+
        '<td>4:00pm</td>'+
        '<td>4:30pm</td>'+
        '<td>5:00pm</td>'+
        '<td>5:30pm</td>'+
        '<td>6:00pm</td>'+
      '</tr>'+
      '</thead>'+
      '<tbody>'+
        '<tr>'+
          '<td>Number of Repairs</td>'+
          '<td>N/A</td>'+
          '<td>N/A</td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
          '<td></td>'+
        '</tr>'+  
      '</tbody>'
    '</table>';

var count = 1; 
var MAX = prompt("What is the max number of repairs per half hour slot?"); //Max #of repairs per slot -1
console.log("User set max repairs to " + MAX);
var table = document.getElementById("table");

var cells = table.getElementsByTagName("td"); 
var currCell;
var cutOff;
var flag = 1;

/* sets starting point */
if(dayofWeek != "Sunday"){
  currCell = 27;
}
else{
  currCell = 17;
}

/* If it's sunday, display shorter schedule */
if(dayofWeek === "Sunday"){
	document.getElementById("main").innerHTML = "Today is " + dayofWeek + "</br> Store hours are from 12pm-6pm";
	document.getElementById("table").innerHTML = sundaySchedule;
}
else{
	document.getElementById("main").innerHTML = "Today is " + dayofWeek + "</br> Store hours are from 10am-9pm </br></br>";
	document.getElementById("table").innerHTML = normSchedule;
}


/*schedule dispatcher */
function checkinMod(){

  if(dayofWeek != "Sunday"){
    if(currCell >= 48){
      alert("Next day pickup");
    }else{
        var cellStatus = cells[currCell].getAttribute("td"); 
        if(dayofWeek != "Sunday"){    
          if(count <= MAX) {
            if(flag === 0){
              count++;
              flag = 1;
            }
            cells[currCell].innerHTML = count;
            console.log("i = "+ currCell +" cellsStatus: = " + cellStatus + " count: "+ count);

            if(flag === 1){
              count++;
            }
          } else {
              count = 1;
              currCell++;
              flag = 0;
              
              if(currCell < 48){
                cells[currCell].innerHTML = count;
                console.log("currCell "+ currCell + " Count: " + count);
              }
            }
        }
      }
  }else{
      if(currCell >= 28){
        alert("Next day pickup");
      }else{
        //var cellStatus = cells[currCell].getAttribute("td"); 
        if(dayofWeek === "Sunday"){    
          if(count <= MAX) {
            if(flag === 0){
              count++;
              flag = 1;
            }
            cells[currCell].innerHTML = count;
            console.log("i = "+ currCell +" cellsStatus: = " + cellStatus + " count: "+ count);

            if(flag === 1){
              count++;
            }
          } else {
              count = 1;
              currCell++;
              flag = 0;
              
              if(currCell < 28){
                cells[currCell].innerHTML = count;
                console.log("currCell "+ currCell + " Count: " + count);
              }
            }
        }
      }
  } 
}

function setMAX(){
  MAX = prompt("What is the new max repairs per slot?");
  console.log("User changed max repairs to " + MAX);
};

function nextCell(){
   count = 1;
   currCell++;
   flag = 1;
   //cells[currCell].innerHTML = count;
   console.log("i = "+ currCell + " count: "+ count);

}





