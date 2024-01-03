let slideIndex = 0;// 初始化當前幻燈片的索引
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.querySelectorAll('.slides img');// 獲取所有幻燈片圖片
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';    // 顯示當前幻燈片
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function backSlide() {
    showSlides(slideIndex -= 1);
}