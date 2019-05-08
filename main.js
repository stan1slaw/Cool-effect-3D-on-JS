const cards = document.querySelectorAll('.card');

    for (i = 0; i < cards.length; i++) {
        const card = cards[i];
        cards[i].addEventListener('mousemove', rotate);
        cards[i].addEventListener('mouseout', reverse);
    }


function rotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfheight = cardItem.offsetHeight / 2;
    const halfwidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX('+-(event.offsetY - halfheight)/ 8 +'deg) rotateY(' + (event.offsetX - halfwidth) / 8 + 'deg)';

}
function reverse(event) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
}