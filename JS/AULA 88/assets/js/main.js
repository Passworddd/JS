const request = (obj) => {
    return new Promise ((resolve,reject)=>{
        const xhr = new XMLHttpRequest;
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status);
            }
        });  
    });
}

document.addEventListener('click',(e)=>{
    const el = e.target; // el recebe o elemento que foi clicado no caso o link
    const tag = el.tagName.toLowerCase(); // Tag recebe o nome da Tag el esta contido

    if(tag === 'a'){
        e.preventDefault();
        carregarPagina(el);
    }
});

async function carregarPagina(link) {
    const href = link.getAttribute('href'); // href vai receber o elemento que está contida dentro do atributo href do elemento link que tem a tag 'a';
    const obj = {
        method: 'GET',
        url: href,
    }
    
    try {
        const response = await request(obj);
        resultado(response);
    } catch (e) {
        console.log(e);
    }
}
    

function resultado(linkInterno){

    const sec = document.querySelector('.resultado');

    sec.innerHTML = linkInterno;
}