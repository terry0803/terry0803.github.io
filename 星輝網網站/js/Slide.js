let slideIndex = 0;
let slideTimeout;

// 启动自动轮播
showSlides();

// 显示指定索引的幻灯片
function showSlides(auto = true) {
  let slides = document.getElementsByClassName('mySlideshows');
  let dots = document.getElementsByClassName('dot');

  // 隐藏所有幻灯片
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(' active', '');
  }

  // 自动播放时递增 slideIndex
  if (auto) {
    slideIndex++;
  }

  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }

  slides[slideIndex].style.display = 'block';
  dots[slideIndex].className += ' active';

  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(function() { showSlides(); }, 2000); // 2秒后自动切换
}

// 手动切换幻灯片
function moveSlide(n) {
  slideIndex += n;
  showSlides(false); // 手动切换，不自动递增 slideIndex
}

// 设置当前幻灯片
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides(false); // 手动切换，不自动递增 slideIndex
}
