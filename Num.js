
    let numberArray = [1,2,4,9,0,8,24,19]
    // const evenNum = numberArray.filter((even) =>{
    //   return even % 2 === 0;
    // })
  //  console.log(evenNum);

let evenNum = (num) => {
  let newArr = num.filter((even) => {
    return even % 2 === 0;
  });
console.log(newArr);
}
 evenNum(numberArray); 
 