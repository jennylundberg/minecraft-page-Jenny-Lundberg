function dropdown() {
    let nav = document.getElementById("navigation");

    if (nav.className === "nav") { 
        nav.className += " show-us-the-menu";
    } else {
        nav.className = "nav";
    }

}