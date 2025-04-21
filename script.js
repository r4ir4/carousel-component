// Show More Button Logic
document.getElementById('showMoreBtn').addEventListener('click', function () {
    document.querySelectorAll('.mobile-card.hidden-mobile').forEach(card => {
      card.classList.remove('hidden-mobile');
    });
    this.style.display = 'none';
  });
  