function menuProjetos() {
    var menu = document.getElementById("menuCategorias");
    var icone = document.querySelector(".logo-projetos")
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        icone.style.display = "none"

    } else {
        menu.style.display = "none";
    }
};