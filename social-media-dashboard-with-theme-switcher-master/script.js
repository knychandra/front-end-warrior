const toggler = document.querySelector('.toggler');
console.log(toggler);

toggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
})