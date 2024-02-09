function validarTexto(texto) {

    texto = texto.replace(/\s/g, '')

    if (/^[a-z]+$/g.test(texto)) {
        return true;
    } else {
        return false;
    }
}

function criptografar() {
    let textArea = document.getElementById('textoOriginal');
    let texto = textArea.value
    
    if (!validarTexto(texto)) {
        return alert('O texto inserido deve conter apenas letras minúsculas sem acentos e sem caracteres especiais!');
    }
    
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    
    mostrarResposta(texto)
    
}

function mostrarResposta(resposta) {
    areaDeResposta = document.getElementById('areaParaResposta');

    let respostaFormatada = '<textarea class="corpo__ladoDireito__resposta" rows="20" readonly>'
        + resposta + 
 '   </textarea>'

    areaDeResposta.innerHTML = respostaFormatada

}

function descriptografar() {
    let textArea = document.getElementById('textoOriginal');
    let texto = textArea.value

    if (!validarTexto(texto)) {
        return alert('O texto inserido deve conter apenas letras minúsculas e sem acento!');
    }

    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    mostrarResposta(texto)

}
