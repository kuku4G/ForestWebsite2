const hamburgerBtn = document.querySelector('.hamburger-icon');
const navItemList = document.querySelector('.menu__item-list');
const navItem = document.querySelectorAll('.menu__link');
let mediaQuery = window.matchMedia("(min-width: 768px)");

 export const handleNav = () => {
	hamburgerBtn.addEventListener('click', () => {
		if (navItemList.style.display === 'block') {
			navItemList.style.display = 'none';
			handleMediaQueryChange(mediaQuery);
		} else {
			navItemList.style.display = 'block';

			navItem.forEach((item) => {
				item.addEventListener('click', () => {
					navItemList.style.display = 'none';
				})
			})
		}
	});

	function handleMediaQueryChange(mediaQuery) {
        if (mediaQuery.matches) {
            // Warunek media query jest spełniony (szerokość ekranu większa niż 768px)
			navItemList.style.display = 'flex';
        } else {
            // Warunek media query nie jest spełniony (szerokość ekranu mniejsza niż 768px)
			navItemList.style.display = 'none';
        }
    }
	// Dodanie nasłuchiwania zmian w warunku media query
	mediaQuery.addListener(handleMediaQueryChange);

};

// handleNav();

