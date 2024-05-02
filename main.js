const frm = document.querySelector("form");
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    const raizQuadrada = Math.sqrt(numero);

    if (Number.isInteger(raizQuadrada)) {
        resp1.innerText =  "A Raiz " +raizQuadrada + " é Exata!";
    } else {
        resp1.innerText = "A Raiz " + numero + ". Não é Exata!";
    }  
});
