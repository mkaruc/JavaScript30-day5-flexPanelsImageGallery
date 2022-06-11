const panels=document.querySelectorAll(".panel");
function opening() {
    this.classList.toggle("open");
}
function actived() {
    this.classList.toggle("open-active");
}
panels.forEach(element => {
    element.addEventListener('click',opening);
    element.addEventListener('transitioned',actived);
});