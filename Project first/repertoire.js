const cards = document.querySelectorAll(".card")

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener("mousemove", startRotate)
    card.addEventListener("mouseout", stopRotate)
}

function startRotate (event) {
    const cardImg = this.querySelector(".img-rep");
    const halfHeight = cardImg.offsetHeight / 2
    cardImg.style.transform = 'rotateX('+- (event.offsetY - halfHeight) / 20 + 
    'deg) rotateY(' + (event.offsetX - halfHeight) / 20 +'deg)'
}
 
function stopRotate() {
    const cardImg = this.querySelector(".img-rep");
    cardImg.style.transform = 'rotate(0)'
}

