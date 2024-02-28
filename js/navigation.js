
function myFunction() {
    let clickOnBtn = document.querySelectorAll('.menu__item');
    let x = document.querySelector('.menu__item-list');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }

    //obsługa kliknięcia myszy
    clickOnBtn.forEach(item => {
        item.addEventListener('click', () => {
            x.style.display = 'none';
        })
    })

    //obsługa dotyku na urządzeniach mobilnych
    clickOnBtn.forEach(item => {
        item.addEventListener('touchstart', () => {
            x.style.display = 'none';
        });
    });
}