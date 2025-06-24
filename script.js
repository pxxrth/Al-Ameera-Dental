/*=============== SHOW/HIDE MOBILE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

// Hide menu when a link is clicked
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
        }
    });
});


/*=============== CHANGE HEADER BACKGROUND ON SCROLL ===============*/
function scrollHeader() {
    const header = document.querySelector('.header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if (this.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', scrollHeader);


/*=============== FAQ ACCORDION ===============*/
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const header = item.querySelector('.faq__header');
    header.addEventListener('click', () => {
        const openItem = document.querySelector('.faq__item.active');
        
        // Toggle the active class on the clicked item
        item.classList.toggle('active');

        // Close the previously opened item if it's not the one being clicked
        if (openItem && openItem !== item) {
            openItem.classList.remove('active');
        }
    });
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
}, {
    threshold: 0.1 // Reveal when 10% of the element is visible
});

revealElements.forEach(element => {
    // Add the data-reveal attribute to all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        revealObserver.observe(section);
    });
});


/*=============== APPOINTMENT FORM LOGIC (Placeholder) ===============*/
const appointmentForm = document.querySelector('.appointment-form');

if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission for this demo
        alert('Thank you! Your request has been received. We will contact you shortly.');
        appointmentForm.reset();
        // Also reset the date picker
        if(fp) fp.clear();
    });
}

// Initialize Flatpickr
const fp = flatpickr("#date", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});

/*=============== ACTIVE NAV LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        if (!current) return;
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (sectionId && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            if(link) link.classList.add('active-link');
        } else {
            const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            if(link) link.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);


/*=============== HORIZONTAL SCROLL FOR SERVICES (REMOVED) ===============*/
// All code for the horizontal scroll has been removed as per the new design.
