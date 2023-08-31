(function () {
    const events = document.querySelectorAll("#dialog-0, #dialog-1, #dialog-2");

    events.forEach(item => {
        item.addEventListener('click', event => {
            const partialId = event.target.id;
            const dialog = document.getElementById(`content-${partialId}`);
            const cancelButton = document.getElementById(`cancel-${partialId}`);

            dialog.showModal();

            cancelButton.addEventListener('click', function () {
                dialog.close();
            });

            dialog.addEventListener("click", e => {
                const dialogDimensions = dialog.getBoundingClientRect()
                if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                ) {
                    dialog.close()
                }
            })
        })
    })
})();