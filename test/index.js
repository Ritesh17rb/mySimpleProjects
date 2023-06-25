const a=[1,2,4,5,6,-3];

const firstNeg=(num)=>{
    return num <0;
}

const result=a.find(firstNeg);

const resultIn=a.findIndex(firstNeg);

console.log(result);
console.log(resultIn);

a.forEach((num,i)=>{
 console.log("Array Number is ",num,"and Index is ",i);
})