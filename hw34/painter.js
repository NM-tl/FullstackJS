document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const modal = document.getElementById('myModal');
    const updateForm = document.getElementById('updateForm');
    const updateBtn = document.getElementById('updateBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    let selectedCircle;
    let moveListener;
    let isMoving = false;

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
        const block = createElementWithClass('div', 'color-block');
        block.textContent = 'Available Color Blocks';
        return block;
    };

    function handleCanvasDoubleClick(event) {
        if (event.target === canvas) {
            const circle = createCircle();
            colorBlock.appendChild(circle);
        }
    };

    function handleColorBlockDoubleClick() {
        const circle = createCircle();
        colorBlock.appendChild(circle);
    };

    function handleCanvasContextMenu(event) {
        event.preventDefault();
        if (event.target.classList.contains('circle')) {
            selectedCircle = event.target;
            modal.style.display = "block";
        }
    };

    function handleUpdateButtonClick() {
        const diameter = document.getElementById('diameter').value;
        const color = document.getElementById('color').value;
        selectedCircle.style.width = selectedCircle.style.height = diameter + 'px';
        selectedCircle.style.backgroundColor = color;
        closeModal();
    };

    function handleWindowClick(event) {
        if (event.target === modal) closeModal();
    };

    function handleWindowKeydown(event) {
        if (event.key === 'Escape') {
            closeModal();
            if (moveListener) {
                window.removeEventListener('mousemove', moveListener);
                if (isMoving) {
                    selectedCircle.style.zIndex = '';
                    isMoving = false;
                }
            }
        }
    };

    function createCircle() {
        const circle = createElementWithClass('div', 'circle');
        circle.style.backgroundColor = getRandomColor();
        circle.style.width = circle.style.height = '50px';
        circle.style.left = `${Math.floor(Math.random() * (colorBlock.offsetWidth - 50))}px`;
        circle.style.top = `${Math.floor(Math.random() * (colorBlock.offsetHeight - 50))}px`;

        circle.addEventListener('click', handleCircleClick);

        function handleCircleClick() {
            if (!isMoving) {
                selectedCircle = circle;
                circle.style.zIndex = '9999';
                circle.style.opacity = '0.5';
                isMoving = true;
                moveListener = function(event) {
                    circle.style.left = `${event.pageX - canvas.offsetLeft - circle.offsetWidth / 2}px`;
                    circle.style.top = `${event.pageY - canvas.offsetTop - circle.offsetHeight / 2}px`;
                };
                window.addEventListener('mousemove', moveListener);
            } else {
                circle.style.zIndex = '';
                isMoving = false;
                circle.style.opacity = '1';
                window.removeEventListener('mousemove', moveListener);
                moveListener = null;
            }
        }
        return circle;
    };

    function createElementWithClass(tagName, className) {
        const element = document.createElement(tagName);
        element.classList.add(className);
        return element;
    };

    function closeModal() {
        modal.style.display = "none";
        updateForm.reset();
    };

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };
});
