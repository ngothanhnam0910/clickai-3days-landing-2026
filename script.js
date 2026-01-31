// Smooth scroll
for (const el of document.querySelectorAll('[data-scroll]')) {
  el.addEventListener('click', () => {
    const target = el.getAttribute('data-scroll');
    const node = document.querySelector(target);
    if (!node) return;
    node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Demo form handler
const form = document.getElementById('leadForm');
const notice = form?.querySelector('.notice');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('#name')?.value?.trim() || 'bạn';
  if (notice) {
    notice.classList.add('show');
    notice.textContent = `Thành công! Mình đã ghi nhận thông tin của ${name}. (Demo UI — chưa gửi dữ liệu lên server)`;
  }
  form.reset();
});
