function openBookSection(evt) {

    var toDisplay = evt.currentTarget.idString;
    toDisplay = toDisplay.toLowerCase();
    toDisplay = toDisplay.replaceAll(" ", "-");

    var activeButtons = document.getElementsByClassName("button-book-active")
    for (i=0; i<activeButtons.length; i++) {
        activeButtons[i].className = activeButtons[i].className.replace("button-book-active", " ")
    }

    var tabcontent = document.getElementsByClassName("book-category");
    
    if (toDisplay == "all") {
        for (i=0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "block";
        }
    }
    else {
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById(toDisplay).style.display = "block";
    }
    evt.currentTarget.className += " button-book-active";
}

/*<div class="books-tabs-container">

    <div class="books-tab">
        <button class="button-book-active" onclick="openBookSection(event, 'all')">All</button>
        <button onclick="openBookSection(event, 'selfdevelopment')">Self Development</button>
        <button onclick="openBookSection(event, 'science')" id="last-button">Science</button>
    </div>
</div> */

var newBookContainer = document.createElement("div");
newBookContainer.setAttribute("class", "tabs-container");

var newBookTab = document.createElement("div");
newBookTab.setAttribute("class", "books-tab");

newBookContainer.appendChild(newBookTab);

var bookButtonsTags = ["All", "Self improvement", "Science"];

for(i=0; i<3; i++){
    var newBookButton = document.createElement("button");
    if (i==0) {
        newBookButton.setAttribute("class", "button-book-active");
    }
    newBookButton.innerHTML = bookButtonsTags[i];
    newBookButton.idString = bookButtonsTags[i];
    newBookButton.addEventListener("click", openBookSection);
    newBookTab.appendChild(newBookButton);
}

var bookSection = document.getElementsByClassName("books-list");
bookSection = bookSection[0]
bookSection.insertBefore(newBookContainer, bookSection.firstChild);