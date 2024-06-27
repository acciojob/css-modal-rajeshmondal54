document.addEventListener("DOMContentLoaded", function() {
    var openModalButton = document.getElementById("openModal");
    var modal = document.getElementById("modal");
    var closeModalButton = document.querySelector(".close-modal");

    openModalButton.addEventListener("click", function() {
        modal.style.display = "block";
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