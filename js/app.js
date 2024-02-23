/**
 * declaracao de variaveis globais
 */

var originalText = document.querySelector('textarea');
var encriptedText = document.getElementById('main_encripted');
var initialInfo = document.getElementById('initial_info');
const change = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]


/**
 * funcao encripta um texto em um campo html textarea
 */
const cript = () => {

    removePreParagraph()

    var textReplace = originalText.value;

    change.map((item) => {
        textReplace = textReplace.replaceAll(item[0],item[1]);
    })

    var paragraph = createParagraph(textReplace);
    encriptedText.appendChild(paragraph);

    document.getElementById('copy').style.display = 'flex';
    
    
} 

/**
 * Funcao que decripta um texto que foi criptografado.
 */
const decript = () => {
    removePreParagraph()

    var textReplace = originalText.value;

    change.map((item) => {
        textReplace = textReplace.replaceAll(item[1],item[0]);
    })

    var paragraph = createParagraph(textReplace);
    encriptedText.appendChild(paragraph);

    document.getElementById('copy').style.display = 'flex';
}

const copyText = () => {

    var copyText = document.getElementById("text_encripted");

    navigator.clipboard.writeText(copyText.innerHTML);
    
}

/**
 * funcao para fomartar texto em um campo html textarea
 * nao permitindo que seja adionado letra maiuscula ou acentos
 */
const formatText = () =>  {
    var text = originalText.value;
    text = onlyLowerCase(text);
    text = notAccentuation(text);
    originalText.value = text;
}

/**
 * funcao que formata para letras minusculas
 * @param {string} txt 
 * @returns Uma string contendo apenas letras minusculas.
 */
const onlyLowerCase = (txt) => {
    return txt.toLowerCase();
}

/**
 * funcao que formata para letras sem acento
 * Formato de Normalização Canônico de Composição. (NFD)
 * @param {string} txt 
 * @returns Uma string contendo a Forma de Normalização Unicode da string dada.
 */
const notAccentuation = (txt) => {
   return txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

}


/**
 * funcao para apagar um paragrafo pre existente
 */
const removePreParagraph = () => {
    var toRemove = document.querySelector('.main__encripted');
    if(toRemove !== null) {
        toRemove.remove();
    }
}

/**
 * Funcao que cria um paragrafo e insere um texto.
 * @param {string} textReplace 
 * @returns objeto com dados HTML de um paragrafo ( <p></p> )
 */
const createParagraph = (textReplace) => {
    encriptedText.classList.remove('main__container');
    encriptedText.classList.add('main__container_encripted');

    initialInfo.innerHTML = '';
    var paragraph = document.createElement('p');
    paragraph.classList.add('main__encripted');
    paragraph.setAttribute('id', 'text_encripted');
    paragraph.appendChild(document.createTextNode(textReplace));

    return paragraph;
}