// Add this to handle mobile submenu clicks
document.querySelectorAll('.has-submenu > a').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
            const submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});