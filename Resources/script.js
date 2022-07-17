//nav button functionality

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

//projects selected functionality

const personalPortfolio = document.getElementById("personal-portfolio");
const html = document.getElementById("html-image");
const css = document.getElementById("css-image");
const javascript = document.getElementById("javascript-image");
const git = document.getElementById("git-image");
const github = document.getElementById("github-image");

const personalPortfolioMoused = () => {
    html.style.filter = "grayscale(0%)";
    css.style.filter = "grayscale(0%)";
    javascript.style.filter = "grayscale(0%)";
}

const personalPortfolioMouseLeave = () => {
    html.style.filter = "grayscale(100%)";
    css.style.filter = "grayscale(100%)";
    javascript.style.filter = "grayscale(100%)";
}

personalPortfolio.onmouseover = personalPortfolioMoused

personalPortfolio.onmouseleave = personalPortfolioMouseLeave