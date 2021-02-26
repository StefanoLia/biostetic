function hideAndShow(e) {

    // remove id active from the button
    var buttonToTurnOff = document.getElementById('btn-active')
    if (buttonToTurnOff != undefined) {
        buttonToTurnOff.removeAttribute('id')
    }

    // set id active to the clicked button
    this.setAttribute('id','btn-active');

    // hide all the sections in the page
    var $introSections = $(".introduction-section")
    
    for( var i=0; i<allIntroSection.length; i++) {
       //$introSections[i].velocity({ opacity: 0, display: "none" }, { duration: "slow" }, "ease-out")
       $introSections[i].style.display = "none"
    }

    // take the parameter which is the id of the element to show
    var idString = e.currentTarget.idString;
    idString = idString.toLowerCase();
    idString = idString.replaceAll(" ", "-");
    //idString = "#"+idString

    // show the element associated to the button
    var elementToShow = document.getElementById(idString)
    //$elementToShow.velocity({ opacity: 1 , display: "block" }, { duration: "slow" }, "ease-in");
    elementToShow.style.display = "block"
}


var newContainer = document.createElement("div");
newContainer.setAttribute("class", "btn-group");

cellText = ["Developer", "Performance Consultant", "Machine Learning Engineer"];
var allSection = document.getElementsByClassName("introduction");

var allIntroSection = document.getElementsByClassName("introduction-section");

var firstSection = allSection[0];

for( var i=1; i<allIntroSection.length; i++) {
    allIntroSection[i].style.display = "none";
}

for( var i=0; i<allIntroSection.length-1; i++) {
    if (i == 0) {
        var newSpan = document.createElement("span")
        newSpan.innerHTML = "I'm a"
        newSpan.setAttribute("class", "im-qualifications")
        newContainer.appendChild(newSpan);
    }
    var newButton = document.createElement("button");
    newButton.setAttribute("class", "btn btn-default")
    var newSpan = document.createElement("span");
    newSpan.innerHTML = cellText[i];
    newButton.appendChild(newSpan);

    newButton.idString = cellText[i]
    newButton.addEventListener("click", hideAndShow)

    newContainer.appendChild(newButton);
}

var newParagraph1 = document.createElement("p");
newParagraph1.innerHTML="click the buttons to see my skills";
newParagraph1.setAttribute("class", "info-arrow");

var newParagraph2 = document.createElement("p");
var arrow = document.createElement("i");
arrow.setAttribute("class", "arrow down");
newParagraph2.appendChild(arrow);

firstSection.appendChild(newParagraph1);
firstSection.appendChild(newParagraph2);

firstSection.appendChild(newContainer);