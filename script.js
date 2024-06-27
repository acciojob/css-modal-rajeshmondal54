//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    var openModalButton = document.getElementById("openModal");
    var modal = document.getElementById("modal");
    var closeModalButton = document.querySelector(".close-modal");

    openModalButton.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
