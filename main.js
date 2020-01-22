// const boxBox
const boxOne = document.querySelector("#boxOne");
const boxTwo = document.querySelector("#boxTwo");

const captureText = () => {
 const entryField = document.getElementById("message")

 boxOne.innerHTML = `
 ${entryField.value}
 `;

//  console.log(entryField.value)

 boxTwo.innerHTML = `
 ${entryField.value}
 `;

//  entryField.value= ""
 
}

document.getElementById("message").addEventListener("keyup", captureText);