'use strict';


var i = 0;
while (i < 10) {
  console.log('The while loop number is' + i);
  i++;
}

var j=0;
  do {
    console.log('The do-while loop number is ' + j);
    j++;
  }
  while (j < 5);

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log('Today is '+day);