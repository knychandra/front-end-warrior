const toggler = document.querySelector('.slider')
const monthly = document.querySelectorAll('.monthly')
const anually = document.querySelectorAll('.anually')
const numbers = document.querySelectorAll('.numbers');

console.log(toggler);
console.log(monthly.length);
console.log(anually[0].innerText);

toggler.addEventListener('click', () => {

    
    

    for(let i = 0; i < monthly.length; i++) {
            monthly[i].innerText = anually[i].innerText
        }

    if(toggler.classList.contains('clicked')) {
        monthly[0].innerText = '$19.99';
        monthly[1].innerText = '$29.99';
        monthly[2].innerText = '$39.99';
    }

    toggler.classList.toggle('clicked');
})