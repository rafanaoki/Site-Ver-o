class Cards{
    constructor() {
        this.posicaoSectionDicas = document.querySelector('#section-dicas');
        this.cardEsquerda = document.querySelector('.card-esq').style.transform
        this.cardDireita = document.querySelector('.card-dir').style.transform
    }
    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y']
        console.log(posicao)
        if (posicao >= 25) {
            console.log('chegou')
            this.cardEsquerda = `translate(-${posicao}%)`;
            this.cardDireita = `translate(${posicao}%)`;
        }
    }
}

export default Cards