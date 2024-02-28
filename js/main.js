const footerYear = document.querySelector('.year')

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerHTML = year
}

handleCurrentYear()