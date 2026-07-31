const button = document.getElementById("listenBtn");

button.addEventListener("click", () => {

    button.innerHTML = "Just a moment... ♡";
    button.style.transform = "scale(0.96)";
    button.style.opacity = "0.85";

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href =
        "https://youtu.be/lvsnu1TE-p4?t=40";
    }, 1200);

});
