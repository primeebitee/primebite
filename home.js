 document.querySelector('.hamburger-icon').addEventListener('click', function() {
            this.classList.toggle('active');
        });
		function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    var hamburgerIcon = document.querySelector('.hamburger-icon');

    navLinks.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
}
