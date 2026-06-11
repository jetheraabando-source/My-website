 /**
 * 1. SCROLL-TRIGGERED REVEAL
 * Makes sections "unfold" as the visitor scrolls down.
 */
const observerOptions = { threshold: 0.2 };

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.scripture-card, .prayer-section, .services-section').forEach(section => {
  revealObserver.observe(section);
});

/**
 * 2. PRAYER INPUT FOCUS
 * Adds a subtle 'active' state when a user clicks to pray.
 */
const prayerInput = document.querySelector('.prayer-input');
if (prayerInput) {
  prayerInput.addEventListener('focus', () => {
    prayerInput.style.borderBottomColor = '#FFF';
    prayerInput.style.opacity = '1';
  });
  
  prayerInput.addEventListener('blur', () => {
    prayerInput.style.borderBottomColor = '#A68966';
  });
}

/**
 * 3. SMOOTH ANCHOR NAVIGATION
 * Ensures that clicking 'About' or 'Contact' doesn't jump, but glides.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/**
 * 4. INTERACTIVE BENEDICTION
 * A simple console log to confirm the sanctuary is ready.
 */
window.addEventListener('load', () => {
  console.log("JNC Worship Sanctuary Initialized. Peace be with you.");
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Give the drawing animation time to play
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000); // Wait for the fade-out
    }, 2500); 
  });
