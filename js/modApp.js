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
          '<td>Mod Tech 1</td>'+
          '<td>3</td>'+
          '<td>3</td>'+
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
        '<tr>'+
          '<td>Mod Tech 2</td>'+
          '<td>3</td>'+
          '<td>2</td>'+
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
          '<td>Mod Tech 1</td>'+
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
        '<tr>'+
          '<td>Mod Tech 2</td>'+
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

var count = 1; //#of repairs per slot
var table = document.getElementById("table");
var rows = document.getElementById("table").getElementsByTagName("tr");
var cols = document.getElementById("table").getElementsByTagName("td");

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
/*TODO work on displaying count var in an individual cell
 *TODO clean up code, it is messy as I'm experimenting with different things *experiments are commented out for the time being
 */
function checkinMod(){		
   for(var i = 1; i <= cols.length; i++){
      for(var j = 1; j <= rows.length; j++){
         if(count <= 2){
	    document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = count;
	 }else{
             console.log("too full");
	 }//end if
      }//end inner for		
   }//end for
   count++;

// if( count <= 3){
// 	table.rows.item[1].cells.item[1].innerHTML = count;
// }

// $('#table tr').each(function(){
		
// //do your stuff, you can use $(this) to get current cell
// 		$(this).append("<td>" +count+"</td>");
		
// })

// if(count <= 2){
//   document.getElementsByTagName("tr")[2].innerHTML = count; //can't combine tr and td.innerHTML
// }

// count++;
}


