const getColor=()=>{
    const randomNumber=Math.floor(Math.random()*11111111)
    // console.log(randomNumber);

    const randomCode="#"+randomNumber.toString(16);
    // console.log(randomNumber);
    console.log(randomCode);


    const final=document.querySelector("#color-code");

    console.log(final.innerHTML=randomCode)
    final.style.color=randomCode;

    document.querySelector("button").style.backgroundColor=randomCode;
    document.querySelector("body").style.backgroundColor=randomCode;

}


// document.getElementById("btn").addEventListener("click",getColor
// )
// document.querySelector(".btn1")

// btn.addEventListener("click",e=>{
//     console.log("hELO");
// })

document.querySelector("#but")
but.addEventListener("click",e=>{
   getColor()
});



// console.log(final.innerHTML)
