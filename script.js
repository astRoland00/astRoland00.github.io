function toggleMenu() {
    let element = document.getElementById('dropdown-content');
    if (element.classList.contains("dropdown-content-active")) {
        element.classList.remove("dropdown-content-active");
        element.classList.add("dropdown-content-inactive");
    }
    else {
        element.classList.remove("dropdown-content-inactive");
        element.classList.add("dropdown-content-active");
    }
}