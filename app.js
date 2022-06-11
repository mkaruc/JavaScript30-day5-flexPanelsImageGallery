const panels=document.querySelectorAll(".panel");
function opening() {
    this.classList.toggle('open');
}
function actived(e) {
    if(e.propertyName.includes("flex")){
        console.log("hello")
        this.classList.toggle('open-active');
    }
    
}
panels.forEach(element => element.addEventListener('click',opening));
panels.forEach(element =>element.addEventListener('transitionend',actived));
;