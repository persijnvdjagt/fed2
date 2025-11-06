
document.addEventListener('DOMContentLoaded', function() {

// login knop tekst
    const loginKnop = document.getElementById('login-knop');
    if (loginKnop) { 
        loginKnop.addEventListener('click', function(event) {
            event.preventDefault();
            alert('De inlogpagina is nog in onderhoud!');
        });
    }

/* Bron Google Gemini: 
Prompt:
Leg mij uit hoe ik met javascript een hamburger menu maak. Doe dit ook voor de zoekfunctie.
----- */


    const menuKnop = document.getElementById('menu-knop');
    const sluitKnop = document.getElementById('sluit-knop');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuKnopTekst = document.getElementById('menu-knop-tekst');

    function openMenu() {
        fullscreenMenu.classList.add('menu-open');
        menuKnopTekst.textContent = 'Sluiten';
    }

    function sluitMenu() {
        fullscreenMenu.classList.remove('menu-open');
        menuKnopTekst.textContent = 'Menu';
    }

    if (menuKnop) { 
        menuKnop.addEventListener('click', function() {
            if (fullscreenMenu.classList.contains('menu-open')) {
                sluitMenu();
            } else {
                openMenu();
            }
        });
        sluitKnop.addEventListener('click', sluitMenu);
    }


    const zoekKnop = document.getElementById('zoek-knop');
    const sluitZoekKnop = document.getElementById('sluit-zoek-knop');
    const searchOverlay = document.getElementById('search-overlay');
    const zoekKnopTekst = document.getElementById('zoek-knop-tekst');

    function openZoeken() {
        searchOverlay.classList.add('search-open');
        zoekKnopTekst.textContent = 'Sluiten';
    }

    function sluitZoeken() {
        searchOverlay.classList.remove('search-open');
        zoekKnopTekst.textContent = 'Zoeken';
    }

    if (zoekKnop) { 
        zoekKnop.addEventListener('click', function() {
            if (searchOverlay.classList.contains('search-open')) {
                sluitZoeken();
            } else {
                openZoeken();
            }
        });
        sluitZoekKnop.addEventListener('click', sluitZoeken);
    }
});


// animatie scrollen
    const animatedSections = document.querySelectorAll('main > section:not(:first-child)');
    
    if (animatedSections.length > 0) {
        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedSections.forEach(section => {
            observer.observe(section);
        });
    }