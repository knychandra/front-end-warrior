const shareBox = document.querySelector('.share-box')
const shareButton = document.querySelector('.share-icon');
const shareImg = document.querySelector('.share-image');


console.log(shareButton);
shareButton.addEventListener('click', function() {
    shareBox.classList.toggle('show');
    shareButton.classList.toggle('changeColor');
    shareImg.classList.toggle('brightness');
    
    // // shareBox.classList.toggle('show');
    // shareButton.style.backgroundColor = '#6d8199';
    // shareImg.style.filter = 'brightness(200%)';
})

