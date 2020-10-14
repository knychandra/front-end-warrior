const collapsibles = document.getElementsByClassName('collapsibles');
const panel = document.querySelectorAll('.panel');


for (i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener('click', function() {
        this.classList.toggle('active');
        this.classList.toggle('bold');
        var arrow = this.lastElementChild;
        arrow.classList.toggle('rotate');
    
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            
        } else {
            panel.style.display = "block";
        }
        });
}