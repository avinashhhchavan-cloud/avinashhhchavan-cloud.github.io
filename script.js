// Fade-in on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Simple cursor-tracking parallax for background blobs
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const xRatio = clientX / window.innerWidth;
    const yRatio = clientY / window.innerHeight;

    document.querySelectorAll('.blob').forEach((blob, i) => {
        const factor = (i + 1) * 15;
        blob.style.transform = `translate(${xRatio * factor}px, ${yRatio * factor}px)`;
    });
});
