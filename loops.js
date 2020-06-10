
function forLoop(inArray){
  for(let i =0 ; i <25 ; ++i ){
    inArray.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return inArray;

}


function whileLoop(inputNumber){
  while(inputNumber > 0 ){
    console.log(inputNumber--);
  }
  return 'done' ;
}



let i = 1;

function incrementVariable() {
  return i++;
}


function doWhileLoop(integerNumber){
  do {
    console log(`I run once regardless.`) ;
  } while (incrementVariable() < integerNumber);
}
