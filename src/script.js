// Scroll To
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        const marginTop = parseInt(window.getComputedStyle(section).marginTop);
        const offset = 10; // Adjust this value as needed
        window.scrollTo({
            top: section.offsetTop - marginTop - offset,
            behavior: 'smooth'
        });
    }
}