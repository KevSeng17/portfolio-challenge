document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(err) {
        err.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});