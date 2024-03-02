const footerYear = document.querySelector('.year')

export const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerHTML = year
}