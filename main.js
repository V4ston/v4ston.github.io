var ready = (callback) => {

    if (document.readyState != "loading") callback();

    else document.addEventListener("DOMContentLoaded", callback);

}

ready(() => {

    document.querySelector(".header").style.height = window.innerHeight + "px";

})

const DarkLight = document.querySelector(".mode-navbar");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    const img = DarkLight.tagName === 'BUTTON' ? DarkLight.querySelector('img') : DarkLight;
    img.src = "./images/LightMode-removebg-preview.png";
}

DarkLight.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.toggle("light-mode");

    const img = DarkLight.tagName === 'BUTTON' ? DarkLight.querySelector('img') : DarkLight;

    if (document.body.classList.contains("light-mode")) {
        img.src = "./images/LightMode-removebg-preview.png";
        localStorage.setItem("theme", "light");
    } else {
        img.src = "./images/DarkMode-removebg-preview.png";
        localStorage.setItem("theme", "dark");
    }
});

/*document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {

        var demoModal = new bootstrap.Modal(document.getElementById('demo-modal'));

        demoModal.show();

    }, 500);

});*/