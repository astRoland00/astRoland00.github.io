// WEBOLDAL
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

function darkSwitch(_switch = true) {
    let body = document.getElementsByTagName("body")[0]
    let darkmode = (localStorage.getItem("darkmode") == "1")
    if (_switch == false) { darkmode = !darkmode }
    console.info(darkmode)
    
    if (darkmode) {
        localStorage.setItem("darkmode", "0")
        body.style.setProperty("--bg-color1", "rgba(237,232,245,1)")
        body.style.setProperty("--bg-color2", "#b9c6e0")
        body.style.setProperty("--bg-color1-alpha", "rgba(237,232,245,.7)")
        body.style.setProperty("--bg-color1-alpha2", "rgba(237,232,245,.3)")
        body.style.setProperty("color", "#474747")
        body.style.setProperty("--color1", "#8697c4")
        body.style.setProperty("--color2", "#7091e6")
        body.style.setProperty("--color3", "#3d52a0")
    }
    else {
        localStorage.setItem("darkmode", "1")
        body.style.setProperty("--bg-color1", "rgb(71, 69, 73)")
        body.style.setProperty("--bg-color2", "#394150")
        body.style.setProperty("color", "#cacaca")
        body.style.setProperty("--color1", "#3b3950")
        body.style.setProperty("--color2", "#7c70e6")
        body.style.setProperty("--color3", "#934fca")
        body.style.setProperty("--bg-color1-alpha", "#394150c0")
        body.style.setProperty("--bg-color1-alpha2", "#3941504b")
    }
}


if (localStorage.getItem("darkmode") == null) {
    localStorage.setItem("darkmode", "1")
}
darkSwitch(false)
let darkmode = (localStorage.getItem("darkmode") == "1")
document.getElementById("themeswitch").checked = !darkmode

