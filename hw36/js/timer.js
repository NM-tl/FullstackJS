import { DEFAULT_TIME } from './constants.js';

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    const startBtn = document.getElementById("startBtn");
    const resetBtn = document.getElementById("resetBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const closeBtn = document.getElementById("close");
    const modalInput = document.getElementById("modalInput");
    const setTimerBtn = document.getElementById("setTimerBtn");
    const timerDisplay = document.getElementById("timer");
    const timerProgress = document.getElementById("progress");

    let timer;
    let timeLeft = DEFAULT_TIME * 60;
    let isRunning = false;
    let startTime;
    let pausedTime = 0;

    const startTimer = (duration) => {
        clearInterval(timer);
        isRunning = true;
        startTime = performance.now() - pausedTime;
        timer = setInterval(() => {
            const deltaTime = performance.now() - startTime;
            const remainingTime = duration - deltaTime / 1000;
            const minutes = Math.floor(remainingTime / 60);
            const seconds = Math.floor(remainingTime % 60);
            if (remainingTime <= 0) {
                clearInterval(timer);
                isRunning = false;
                timerDisplay.textContent = "00:00";
                timerProgress.style.backgroundColor = "green";
                return;
            }
            timerDisplay.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
            timerProgress.style.width = `${(remainingTime / duration) * 100}%`;
            if (isRunning) {
                timerProgress.style.backgroundColor = "red";
            }
        }, 1000);
    };

    const openModal = () => {
        modal.style.display = "block";
        overlay.style.display = "block";
    };

    const closeModal = () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    };

    timerDisplay.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    startBtn.addEventListener("click", () => {
        if (!isRunning) {
            startTimer(timeLeft);
        }
    });

    resetBtn.addEventListener("click", () => {
        const modalValue = modalInput.value;
        const resetTime = modalValue ? modalValue * 60 : DEFAULT_TIME * 60;
        startTimer(resetTime);
        pausedTime = 0;
    });

    pauseBtn.addEventListener("click", () => {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
            pausedTime = performance.now() - startTime;
            timerProgress.style.backgroundColor = "yellow";
        }
    });

    modalInput.addEventListener("input", () => {
        if (modalInput.value < 0) {
            modalInput.value = 0;
        }
    });

    setTimerBtn.addEventListener("click", () => {
        timeLeft = modalInput.value * 60 || DEFAULT_TIME * 60;
        startTimer(timeLeft);
        closeModal();
        pausedTime = 0;
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
});
