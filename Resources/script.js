const navButton = document.getElementById("nav-button");
const navTable = document.getElementById("navigation-table-list");
const navTableList = document.getElementsByClassName("nav-link");


const navButtonClick = () => {
    navTable.style.display = "flex";
    navButton.innerHTML = "<i class='fa fa-xmark fa-lg'></i>";
};

navButton.onclick = navButtonClick