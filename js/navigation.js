// function myFunction() {
//     let clickOnBtn = document.querySelectorAll('.menu__item');
//     let x = document.querySelector('.menu__item-list');
//     if (x.style.display === 'block') {
//         x.style.display = 'none';
//     } else {
//         x.style.display = 'block';
//     }

//     //obsługa kliknięcia myszy
//     clickOnBtn.forEach(item => {
//         item.addEventListener('click', () => {
//             x.style.display = 'none';
//         })
//     })

//     //obsługa dotyku na urządzeniach mobilnych
//     clickOnBtn.forEach(item => {
//         item.addEventListener('touchstart', () => {
//             x.style.display = 'none';
//         });
//     });
// // do HTML
// // onclick="myFunction()"
// // 					ontouchstart="myFunction()"
// }

const nav = document.querySelector('.menu');
const hamburgerBtn = document.querySelector('.hamburger-icon');
const navItemList = document.querySelector('.menu__item-list');
const navItem = document.querySelectorAll('.menu__link')

const handleNav = () => {
	// nav.classList.toggle('menu--active');
	// console.log(nav);

	// hamburgerBtn.style.display = 'block';

	hamburgerBtn.addEventListener('click', () => {
		if (navItemList.style.display === 'block') {
			navItemList.style.display = 'none';
		} else {
			navItemList.style.display = 'block';

			navItem.forEach((item) => {
				item.addEventListener('click', () => {
					navItemList.style.display = 'none';
				})
			})
		}
	});
};

handleNav();
