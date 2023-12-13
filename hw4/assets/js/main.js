document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector('.t-resset');
    const toggle = document.querySelector('.toggle');

    function toggleClass(item) {
        item.classList.toggle('active');
    };

    if (table && toggle) {
        toggle.addEventListener('click', () => {
            toggleClass(table);
        });
    };
});