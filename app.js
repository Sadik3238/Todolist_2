const inputField = document.getElementById("input_box");
const deleteS = document.querySelector(".task");

// document.getElementById("").addEventListener("click", addTask);
// addEventListener("keydown",(e)=>{
//     if(e.key == "Enter") {
//         addTask()
//     }
// });


function Add() {
    if (inputField.value === "") {
        alert("You must write something!!!")
    } else {
        const newEl = document.createElement("ul");
        newEl.innerHTML = `${inputField.value} <i class="fa-solid fa-trash-can"></i>`;
        deleteS.appendChild(newEl);

        inputField.value = "";

        newEl.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEl.remove();
        }
    }
}
