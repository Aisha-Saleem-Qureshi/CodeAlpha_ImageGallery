const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const fullImg = document.getElementById("fullImg");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
        lightbox.style.display = "flex";
    });
});

function showImage(index) {
    fullImg.src = galleryItems[index].src;
}

// Next Image 
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage(currentIndex);
};

// Previous Image 
prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentIndex);
};

// Close Lightbox
closeBtn.onclick = () => lightbox.style.display = "none";
lightbox.onclick = (e) => { if(e.target == lightbox) lightbox.style.display = "none"; };