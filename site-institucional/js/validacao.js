// validação do formulário de cadastro -----------------------------------------------

/* enquanto o usuário digita um campo, uma validação (que está armazenada em uma função disparada por onkeyup) 
será acionada, caso todas as variáveis globais sejam iguais à TRUE, o usuário será cadastrado com sucesso,
caso contrário, será exibido uma mensagem de erro. */


let validado_nome = false;
let validado_email = false;
let validado_senha = false;
let validado_conf_senha = false;
let validado_cnpj = false;
let validado_tel = false;


function validacao_nome() {
    let nome_usuario = valida_nome.value.trim();
    msg = document.getElementById('mensagem_nome');

    msg.innerHTML = '';

    if (nome_usuario) {
        msg.innerHTML = 'Nome OK!';
        msg.style.color = '#008000';
        validado_nome = true;

    } else {
        msg.innerHTML = 'Digite seu nome.';
        msg.style.color = '#0078d7';

    }

}

function validacao_email() {
    let email = valida_email.value.trim();
    msg = document.getElementById('mensagem_email');

    msg.innerHTML = '';

    if (email) {
        for (let i = 0; i <= email.length - 1; i++) {

            if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0 && email.indexOf(' ') == -1) {
                msg.innerHTML = 'Email OK!';
                msg.style.color = '#008000';
                validado_email = true;

            } else {
                msg.innerHTML = 'Digite um email válido.';
                msg.style.color = '#0078d7';
            }
        }
    }
}

function validacao_senha() {
    let senha = valida_senha.value;
    msg = document.getElementById('mensagem_senha');

    msg.innerHTML = '';

    if (senha) {
        for (let i = 0; i <= senha.length - 1; i++) {

            if (senha.length >= 8) {
                msg.innerHTML = 'Senha OK!';
                msg.style.color = '#008000';
                validado_senha = true;

            } else {
                msg.innerHTML = 'Sua senha deve conter pelo menos 8 caracteres'
                msg.style.color = '#0078d7';
            }
        }
    }
}

function validarCNPJ() {
    let cnpj = input_cnpj_cad.value.trim();
    let msg = document.getElementById('mensagem_cnpj');

    msg.innerHTML = '';

    if (cnpj) {
        for (let i = 0; i <= cnpj.length - 1; i++) {

            if (cnpj.length == 18) {
                msg.innerHTML = 'CNPJ OK!'
                msg.style.color = '#008000';
                validado_cnpj = true;
            }
            else {
                msg.innerHTML = 'Digite o CNPJ de sua empresa'
                msg.style.color = '#0078d7';
            }
        }
    }
}

function validarTel() {
    let telefone = input_telefone.value.trim();
    let msg = document.getElementById('mensagem_tel');

    if (telefone) {
        msg.innerHTML = 'Telefone OK!';
        msg.style.color = '#008000';
        validado_tel = true;

    } else {
        msg.innerHTML = 'Digite seu telefone';
        msg.style.color = '#0078d7';

    }

}


// CADASTRO

function cadastrar(event) {
    event.preventDefault();

    mensagem_erro.innerHTML = '';

    let name = valida_nome.value;
    let email = valida_email.value;
    let password = valida_senha.value;
    let conf_senha = confirma_senha.value;
    let senha_valida = password == conf_senha;

    // confirmação de senha

    if (conf_senha) {
        if (senha_valida) {
            validado_conf_senha = true;

        } else {
            confirma_senha.value = '';
        }
    }

    // validação final dos dados

    if (validado_nome == false || valida_email == false || validado_senha == false || validado_conf_senha == false || validado_cnpj == false || validado_tel == false) {

        mensagem_erro.innerHTML = 'Por favor, preencha os campos corretamente conforme orientações';

        document.getElementById("modal-cadastro").className = "modal-container";

    } else {

        // mensagem para o usuário
        sucesso.classList.add("fadeIn");
        sucesso.style.display = 'block'
        formulario_cad.style.display = 'none';


        // CÓDIGO PARA ENVIO DE INFORMAÇÕES AO BANCO DE DADOS
    }
}
let form_cad = document.getElementById("formulario_cad")
form_cad.addEventListener("submit", cadastrar);

