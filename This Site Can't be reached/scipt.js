let namasteButton=document.querySelector('button')
namasteButton.addEventListener('click',inputMsg)

// function showMsg(){
//     alert("Kya kar raha hai Bhai!");
// }

function inputMsg(){

    let name=prompt('Enter Name of Student');
    namasteButton.textContent='Roll No. 1:'+ name;
}