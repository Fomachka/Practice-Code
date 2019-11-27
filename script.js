var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");


function inputLength(){
    return input.value.length;
}

function createListElement(){
     //creates an <li></li>
     var li = document.createElement("li");
     //creates a <button></button>
     var createButton = document.createElement("button");
     //creates input.value inside of li as its child <li> input value </li>
     li.appendChild(document.createTextNode(input.value));
     //creates Delete inside of button as its child <button> Delete </button>
     createButton.appendChild(document.createTextNode("Delete"));
     //li is a child of ul. ul is a parent of li
     ul.appendChild(li);
     //createButton is a child of li. li is a parent of createButton
     li.appendChild(createButton);
     //input resets to empty after each click
     input.value = "";
     //delete createButton's parent on click 
     createButton.onclick = removeParent;   
 }

 //on click activates CSS class .done
 ul.onclick=function(event){
     var target = event.target;
     target.classList.toggle("done");
 }

 //creates a button inside of list(li)
 function CreatingButton(){
    var createButton = document.createElement("button");
    createButton.appendChild(document.createTextNode("Delete"));
    list[i].appendChild(createButton);
    createButton.onclick = removeParent;
}

//event triggering on mouse click
function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

//event triggering on pressing a key
function addListAfterKeyPress(event){
    //13 is a keycode for "Enter"
    if(inputLength() > 0 && event.keyCode === 13){
       createListElement();
    }
}

function removeParent(event){
    //event.target is the same as "this element".
    event.target.parentNode.remove();
}

for(var i=0; i<list.length;i++){
    CreatingButton();
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
