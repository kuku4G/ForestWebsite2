export const cardAnimation = () => {
    //scrollspy
    window.onload = function () {
        scrollSpy('nav', {
            sectionSelector: '.section',
            targetSelector: 'a',
            offset: 200,
            activeClass: 'choosen' 
        });
    }
    
    // MIT License
    // Copyright (c) 2020 Siddharth Subramanian

    //animation cards
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.boundingClientRect.top >= 0) {
                    entry.target.classList.add('show');
                    entry.target.classList.remove('hidden');
                } else {
                    entry.target.classList.remove('show');
                    entry.target.classList.remove('hidden');
                }
            }
        });
    });
    
    hiddenElements.forEach((el) => observer.observe(el));
}