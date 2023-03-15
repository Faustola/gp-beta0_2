let iconeSofa = document.querySelector(".sofa");
let iconeColchao = document.querySelector(".colchao");
let iconeCadeira = document.querySelector(".cadeira");
let iconeTapete = document.querySelector(".tapete");
let iconeGota = document.querySelector(".gota");
let navBar = document.querySelector(".nav-bar");
let botaoHamburgao = document.querySelector(".hamburgao");
let i = 0;


//animação botão menu
botaoHamburgao.addEventListener('click', function() {
    if (i == 0) {
        botaoHamburgao.classList.add('anim-botao-menu');
        function removeAnimation() {
            botaoHamburgao.classList.remove('anim-botao-menu');
        }
        function trocaImg() {
            botaoHamburgao.src="imagens/x.png"
        };
        setTimeout(trocaImg, 200);
        setTimeout(removeAnimation, 400);

        iconeSofa.style.cssText="opacity: 1; top: 50px";
        iconeColchao.style.cssText="opacity: 1; top: 72px";
        iconeCadeira.style.cssText="opacity: 1; top: 105px";
        iconeTapete.style.cssText="opacity: 1; top: 138px";
        iconeGota.style.cssText="opacity: 1; top: 167px";
        i = 1;
        }else {
            botaoHamburgao.classList.add('anim-botao-menu');
        function removeAnimation() {
            botaoHamburgao.classList.remove('anim-botao-menu');
        }
        function trocaImg() {
            botaoHamburgao.src="imagens/botao-menu.png"
        };
        setTimeout(trocaImg, 200);
        setTimeout(removeAnimation, 400)

            iconeSofa.style.cssText="top: 20px; opacity: 0;";
            iconeColchao.style.cssText="top: 20px; opacity: 0;";
            iconeCadeira.style.cssText="top: 20px; opacity: 0;";
            iconeTapete.style.cssText="top: 20px; opacity: 0;";
            iconeGota.style.cssText="top: 20px; opacity: 0;";
            i = 0;
        }
});

