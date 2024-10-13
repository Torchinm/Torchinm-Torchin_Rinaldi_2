const trigger = document.querySelector('.trigger');
const arrow = document.querySelector('.arrow-down');

function toggleForm() {
    var formContainer = document.getElementById("formContainer");
    if (formContainer.classList.contains("open")) {
        formContainer.classList.remove("open");
        formContainer.style.height = "0";
        arrow.classList.toggle('rotate-180');
    } else {
        formContainer.classList.add("open");
        formContainer.style.height = formContainer.scrollHeight + "px";
        arrow.classList.toggle('rotate-180');
    }
}

function checkform(){
    if (!formContainer.classList.contains("open")) {
        toggleForm()
    }
}

function toggleSommaire() {

    const sommaireList = document.getElementById('sommaire-list');
    const toggleLink = document.getElementById('toggle-link');

    if (sommaireList.style.display === "block" || sommaireList.style.display === "") {
        sommaireList.style.display = "none";
        toggleLink.textContent = "Afficher";
    } else {
        sommaireList.style.display = "block";
        toggleLink.textContent = "Masquer";
    }
}

const carouselWrapper = document.querySelector('.carousel-wrapper');
const images = document.querySelectorAll('.el');
let currentIndex = 0;

function moveCarouselLeft(carouselId) {
    const carouselWrapper = document.querySelector(`#${carouselId} .carousel-wrapper`);
    const images = carouselWrapper.querySelectorAll('.el');
    let currentIndex = Math.round(carouselWrapper.scrollLeft / images[0].clientWidth);

    currentIndex = (currentIndex - 1 + images.length) % images.length;
    
    scrollToImage(currentIndex, carouselWrapper, images);
}

function moveCarouselRight(carouselId) {
    const carouselWrapper = document.querySelector(`#${carouselId} .carousel-wrapper`);
    const images = carouselWrapper.querySelectorAll('.el');
    let currentIndex = Math.round(carouselWrapper.scrollLeft / images[0].clientWidth);

    currentIndex = (currentIndex + 1) % images.length;
    
    scrollToImage(currentIndex, carouselWrapper, images);
}

function scrollToImage(index, carouselWrapper, images) {
    const targetScroll = images[index].offsetLeft;
    carouselWrapper.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
    });
}


scrollToImage(currentIndex);

function redirectTo(url) {
    window.location.href = url;
}
