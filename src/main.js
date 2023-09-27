document.addEventListener('DOMContentLoaded',(e)=>{
    const buttons = document.querySelectorAll('[data-tab-button]');

    

    for(let i=0; i<buttons.length; i++ ){
        buttons[i].addEventListener('click', (botao)=>{
            const abaAlvo = botao.target.dataset.tabButton; //pega o botão que o usuario clicou
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`) //pega as propriedades do botão clicado pelo usuario
            //[data-tab-id=${abaAlvo}] todas as abas que contem o id do botao clicado ex: 
            //abaAlvo botao1 = ID1, botao2 = ID2 botao3 = ID3 "o usuario clica no botao3 que contem o id 3 a aba muda o valor para 3 pegando todas as propriedades do botao com o id" 
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeButtonActive();
            botao.target.classList.add('shows__tabs__button--is-active'); 
        })
    }
    
})

function removeButtonActive(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i=0; i<buttons.length; i++ ){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas(){

    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i =0; i<tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}