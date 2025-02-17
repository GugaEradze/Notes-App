const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".button");
let notes;

function showNotes()
 {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() 
{
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createButton.addEventListener("click", () => 
{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    notes = document.querySelectorAll(".input-box");
});

notesContainer.addEventListener("click", function(e)
{
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            };
        });
    }
});

document.addEventListener("keydown", event => 
{
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});