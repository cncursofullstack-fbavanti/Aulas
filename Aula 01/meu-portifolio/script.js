// Alternar entre modo claro e escuro
const temaBtn = document.querySelector('#temaBtn');
let modoEscuro = false;

temaBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modoEscuro = !modoEscuro;
    temaBtn.textContent = modoEscuro ? 'Modo Claro' : 'Modo Escuro';
});

// Botão Mostrar Mais nos Projetos
const mostrarMaisBtn = document.querySelector('#mostrarMaisBtn');
const extra = document.querySelector('#extra');

mostrarMaisBtn.addEventListener('click', () => {
    extra.classList.toggle('oculto');
    mostrarMaisBtn.textContent = extra.classList.contains('oculto') ? 'Mostrar Mais' : 'Mostrar Menos';
});

// Adicionar novos projetos dinamicamente (somente em memória)
document.getElementById('adicionarBtn').addEventListener('click', () => {
    const nomeProjeto = document.getElementById('nomeProjeto');
    const descricaoProjeto = document.getElementById('descricaoProjeto');

    if (nomeProjeto && descricaoProjeto) {  
        const grid = document.querySelector('.projetos-grid');
        
        const novoProjeto = document.createElement('div');
        novoProjeto.classList.add('projeto-card');
        novoProjeto.innerHTML = `
            <h3>${nomeProjeto.value}</h3>
            <p class="projeto-descricao">${descricaoProjeto.value}</p>
            <ul class="projeto-tags">
                <li class="tag">HTML</li>
                <li class="tag">CSS</li>
                <li class="tag">JS</li>
            </ul>
            <div class="projeto-links">
                <button href="#" class="btn-secundario">Ver Demo</button>
                <button href="#" class="btn-secundario">Código Fonte</button>
            </div>
        `;

        grid.appendChild(novoProjeto);

        nomeProjeto.value = '';
        descricaoProjeto.value = '';
    } else {
        alert('Por favor, preencha o nome e a descrição do projeto.');
    }
});