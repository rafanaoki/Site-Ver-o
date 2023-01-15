import Cards from "./Card.js";


window.onload = () => {
    let animaCards = new Cards();
    document.addEventListener('scroll', animaCards.calculoScroll.bind(animaCards))
}