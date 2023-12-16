let slideIndex = 0;
showSlides();  // 啟動自動輪播

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlideshows');
  let dots = document.getElementsByClassName('dot');

  // 隱藏所有幻燈片
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }

  // 重置幻燈片索引
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  // 更新點點狀態
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  // 顯示當前幻燈片並激活對應的點點
  slides[slideIndex-1].style.display = 'block';  
  dots[slideIndex-1].className += ' active';

  // 設置自動切換幻燈片的時間間隔
  setTimeout(showSlides, 3000); // 3秒後自動切換到下一張幻燈片
}

// 手動切換幻燈片
function moveSlide(n) {
  slideIndex += n - 1;
  showSlides();
}
