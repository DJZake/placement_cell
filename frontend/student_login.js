const inputs = document.querySelectorAll(".input-field");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");


//to make label to ov eon input data
inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if(inp.value != "") return;
        inp.classList.remove("active");
    });
});


//to makeslider
let currentIndex = 1; // Start at the first slide
let intervalId; // Variable to store the interval ID

function moveSlider(index) {
    let currentImage = document.querySelector(`.img-${index}`);

    images.forEach(img => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach(bull => bull.classList.remove("active"));
    bullets[index - 1].classList.add("active");
}

function startSlider() {
    intervalId = setInterval(() => {
        currentIndex = currentIndex < images.length ? currentIndex + 1 : 1;
        moveSlider(currentIndex);
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

function stopSlider() {
    clearInterval(intervalId);
}

bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
        stopSlider();
        currentIndex = index + 1;
        moveSlider(currentIndex);
    });
});

startSlider(); // Start the slider automatically

/*
function moveSlider() {
    let index = this.dataset.value;
    let currentImage = document.querySelector(`.img-${index}`);

    images.forEach(img => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach(bull => bull.classList.remove("active"));
    this.classList.add("active");
}
bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
});
*/