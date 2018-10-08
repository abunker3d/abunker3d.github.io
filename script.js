var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");
var listItems = document.getElementsByTagName("LI");
var allDone = document.querySelector("img");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("X"));
	button.setAttribute('class', 'deleteButton');
	li.appendChild(button);
	button.onclick = removeParent;
	addImage();
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Toggle .done Class On/Off
var liParent = document.querySelector("ul");
liParent.addEventListener("click", toggleClass, false);

function toggleClass(e) {
	if (e.target !== e.currentTarget) {
		e.target.classList.toggle("done");
		if (e.target.querySelector("button")) {
		e.target.querySelector("button").classList.toggle("almostDelete");
		}
	}
}

// Add Delete Buttons
for (var i = 0; i < liList.length; i++) {
	 	var button = document.createElement("button");
		button.appendChild(document.createTextNode("X"));
		button.setAttribute("class", "deleteButton");
		liList[i].appendChild(button);
		button.onclick = removeParent;
}

// Delete Functionality
function removeParent(e) {
	e.target.removeEventListener("click", removeParent, false);
	e.target.parentNode.remove();
	addImage();
}

// Add/remove image when list is empty/full
function addImage() {
	var theUl = document.querySelector("ul");
	if (theUl.children.length === 0) {
	  allDone.classList.remove("alldone");
	  allDone.classList.add("addImg");
	} else if (theUl.children.length > 0) {
	  	allDone.classList.remove("addImg");
	  	allDone.classList.add("alldone");
	}
}
