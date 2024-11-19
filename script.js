function toggleTheme() {
    // Alterna entre o modo escuro e claro
    document.body.classList.toggle('white-mod');
}

function changeLanguage(language) {
    // Seleciona todos os elementos que têm atributos de idioma
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-pt]');

    elements.forEach(element => {
        // Altera o texto do elemento de acordo com o idioma selecionado
        if (language === 'en') {
            element.textContent = element.getAttribute('data-lang-en');
        } else {
            element.textContent = element.getAttribute('data-lang-pt');
        }
    });
}
