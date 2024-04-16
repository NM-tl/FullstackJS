document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas');
    const modal = document.getElementById('myModal');
    const updateForm = document.getElementById('updateForm');
    const updateBtn = document.getElementById('updateBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    let selectedCircle;

    const colorBlock = createColorBlock();
    canvas.appendChild(colorBlock);

    canvas.addEventListener('dblclick', handleCanvasDoubleClick);
    colorBlock.addEventListener('dblclick', handleColorBlockDoubleClick);
    canvas.addEventListener('contextmenu', handleCanvasContextMenu);
    updateBtn.addEventListener('click', handleUpdateButtonClick);
    cancelBtn.addEventListener('click', closeModal);
    window.addEventListener('click', handleWindowClick);
    window.addEventListener('keydown', handleWindowKeydown);

    function createColorBlock() {
        const block = document.createElement('div');
        block.classList.add('color-block');
        block.textContent = 'Available Color Blocks';
        return block;
    }

    function handleCanvasDoubleClick(event) {
        if (event.target === canvas) {
            const circle = createCircle();
            colorBlock.appendChild(circle);
        }
    }

    function handleColorBlockDoubleClick(event) {
        const circle = createCircle();
        colorBlock.appendChild(circle);
    }

    function handleCanvasContextMenu(event) {
        event.preventDefault();
        if (event.target.classList.contains('circle')) {
            selectedCircle = event.target;
            modal.style.display = "block";
        }
    }

    function handleUpdateButtonClick() {
        const diameter = document.getElementById('diameter').value;
        const color = document.getElementById('color').value;
        selectedCircle.style.width = diameter + 'px';
        selectedCircle.style.height = diameter + 'px';
        selectedCircle.style.backgroundColor = color;
        closeModal();
    }

    function handleWindowClick(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    function handleWindowKeydown(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    function createCircle() {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = getRandomColor();
        circle.style.width = '50px';
        circle.style.height = '50px';
        circle.style.left = Math.floor(Math.random() * (colorBlock.offsetWidth - 50)) + 'px';
        circle.style.top = Math.floor(Math.random() * (colorBlock.offsetHeight - 50)) + 'px';
        return circle;
    }

    function closeModal() {
        modal.style.display = "none";
        updateForm.reset();
    }

    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
});
