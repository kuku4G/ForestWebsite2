
function myFunction() {
    let clickOnBtn = document.querySelectorAll('.menu__item');
    let x = document.querySelector('.menu__item-list');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }

    clickOnBtn.forEach(item => {
        item.addEventListener('click', () => {
            x.style.display = 'none';
        })
    })
}