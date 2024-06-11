let ferramenta = 'juntar';

function juntarPDF(ferramenta) {
    var titulo = document.getElementById('TituloMudar');
    titulo.textContent = 'Juntar PDF';
    ferramenta = 'juntar';
    
    
}

function dividirPDF(ferramenta) {
    var titulo = document.getElementById('TituloMudar');
    titulo.textContent = 'Dividir PDF';
    ferramenta = 'dividir';
    
}
function converterPDF(ferramenta) {
    var titulo = document.getElementById('TituloMudar');
    titulo.textContent = 'Converter PDF';
    ferramenta = 'converter';
    
    
}

function buscarArquivo() {
    document.getElementById('fileInput').click();
    
}

function modificador(event){
    var file = event.target.files[0]
    if (ferramenta ==='juntar') {
        
    } else if (ferramenta ==='dividir') {
        
        if (file) {
            if (file.type === "application/pdf") {
                console.log('é pdf')
            } else {
                console.log('Não é arquivo')
            }


        }
    } else if (ferramenta ==='converter') {
        console.log('funcionou')
    }

} 
    







