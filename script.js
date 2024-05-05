const notesContainer = document.querySelector(".notes-container");
const createBTN = document.querySelector("#btn");
let notes = document.querySelectorAll(".inpput-box");

function showData(){
    notesContainer.innerHTML = localStorage.getItem("vvv");
}
showData();

createBTN.addEventListener("click", ()=>{
    let inpBox = document.createElement("p");
    let img = document.createElement("img")
    inpBox.className="inpput-box";
    inpBox.setAttribute("contenteditable" , "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inpBox).appendChild(img);
    notes = document.querySelectorAll(".inpput-box");
})

notesContainer.addEventListener("click" , (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})



const saver = document.querySelector(".save");
saver.addEventListener("click", function saveData(){
    console.log("Clicked");
    localStorage.setItem("vvv", notesContainer.innerHTML);
    const x = localStorage.getItem("vvv");
    console.log(x);
});

function saved(){
    alert("Note Saved! There will be no changes on refresh now...");
}

