const navButton = document.getElementById("nav-button");
const navTable = document.getElementById("navigation-table-list");
const navTableList = document.getElementsByClassName("nav-link");
let buttonClicked = false


const navButtonClick = () => {
    switch(buttonClicked){
        case false : navTable.style.display = "flex"
                     buttonClicked = true;
        break;
        case true : navTable.style.display = "none"
                    buttonClicked = false
    }
    
    
};

navButton.onclick = navButtonClick