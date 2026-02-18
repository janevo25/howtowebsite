// Select all feature images
const images = document.querySelectorAll('.feature-image img');

images.forEach((img) => {
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover;

    img.addEventListener('mouseenter', () => {
        if (hoverSrc && !document.body.classList.contains('dark')) {
            if (hoverSrc) img.src = hoverSrc;
        }
    });

    img.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
});
const btn = document.getElementById('darkBtn');

btn.onclick = function() {
    document.body.classList.toggle('dark');
    btn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
};
