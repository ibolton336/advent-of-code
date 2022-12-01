const fs = require('fs');

const array = fs.readFileSync('input.txt').toString().split("\n");
const listOfTotals = []
let currentTotalList = []
for(i in array) {
  if(array[i] !== ""){
    currentTotalList.push(array[i])
  } else{
    listOfTotals.push(currentTotalList.reduce((acc, j)=>acc + +j, 0 ))
    currentTotalList = [];
  }
}


