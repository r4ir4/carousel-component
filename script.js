// Show More Button Logic
document.getElementById('showMoreBtn').addEventListener('click', function () {
    document.querySelectorAll('.mobile-card.hidden-mobile').forEach(card => {
      card.classList.remove('hidden-mobile');
    });
    this.style.display = 'none';
  });
  
  // Custom Scrollbar Logic
  document.addEventListener('DOMContentLoaded', () => {
    const scrollContent = document.getElementById('scrollable');
    const customTrack = document.getElementById('custom-track');
    const customThumb = document.getElementById('custom-thumb');
  
    const updateThumb = () => {
      const visibleRatio = scrollContent.clientWidth / scrollContent.scrollWidth;
      customThumb.style.width = `${visibleRatio * 100}%`;
  
      const scrollRatio = scrollContent.scrollLeft / (scrollContent.scrollWidth - scrollContent.clientWidth);
      const trackWidth = customTrack.clientWidth;
      const thumbWidth = customThumb.clientWidth;
      const left = scrollRatio * (trackWidth - thumbWidth);
      customThumb.style.transform = `translateX(${left}px)`;
    };
  
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
  
    customThumb.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX;
      startScrollLeft = scrollContent.scrollLeft;
      customTrack.classList.add('active');
      document.body.classList.add('no-select');
    });
  
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.pageX - startX;
      const ratio = scrollContent.scrollWidth / customTrack.clientWidth;
      scrollContent.scrollLeft = startScrollLeft + dx * ratio;
    });
  
    window.addEventListener('mouseup', () => {
      isDragging = false;
      customTrack.classList.remove('active');
      document.body.classList.remove('no-select');
    });
  
    customTrack.addEventListener('click', (e) => {
      if (e.target === customThumb) return;
      const trackRect = customTrack.getBoundingClientRect();
      const clickX = e.clientX - trackRect.left;
      const trackWidth = customTrack.clientWidth;
      const ratio = clickX / trackWidth;
      scrollContent.scrollLeft = ratio * (scrollContent.scrollWidth - scrollContent.clientWidth);
    });
  
    scrollContent.addEventListener('scroll', updateThumb);
    window.addEventListener('resize', updateThumb);
  
    updateThumb();
  });
  