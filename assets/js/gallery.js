const buttons = document.querySelectorAll('[data-filter]');
const items = document.querySelectorAll('.gallery-item');

if (buttons.length && items.length) {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');

      const value = button.getAttribute('data-filter');
      items.forEach((item) => {
        const category = item.getAttribute('data-category');
        const show = value === 'all' || category === value;
        item.hidden = !show;
      });
    });
  });
}
