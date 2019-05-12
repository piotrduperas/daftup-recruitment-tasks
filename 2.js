(function(){

	let modal = document.querySelector(".modal");
    let trigger = document.querySelector(".modal__trigger");
    let closeButton = document.querySelector(".modal__close");

    function toggleModal() {
        modal.classList.toggle("modal--show");
    }

    function modalTrigger(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", modalTrigger);
})();