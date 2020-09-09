// MODAL DE AUTENTICAÇÃO-----------------------------------------------

function iniciaModal(modalID) {

    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar'); //ativar classe .mostrar 
    modal.addEventListener('click', (event) => {
        if (event.target.id == modalID || event.target.className == 'fechar') {
            modal.classList.remove('mostrar'); //desativar classe .mostrar 
        }
    })
}

// login
const logar_menu = document.getElementById('loginAcesso'); // id do elemento clicável 
logar_menu.addEventListener('click', function () {
    iniciaModal('modal-login') // id do modal
})

// cadastro
const cadastrar_menu = document.getElementById('cadastroAcesso');
cadastrar_menu.addEventListener('click', function () {
    loginAcesso.classList.remove('mostrar')
    iniciaModal('modal-cadastro')
})
