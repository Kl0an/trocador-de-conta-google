/**
 * @name Google Account Switcher
 * @version v1.0-beta
 * @description Um bookmarklet com interface gráfica para trocar ou adicionar contas Google.
 * @author Daniel Nunes Lima (user-github: Kl0an)
 * @warning A interface gráfica pode ser bloqueada em páginas com CSP estrito.
 */

(function() {
    // Estilos CSS para criar uma aparência moderna e leve, similar ao design do Google.
    const styles = `
        #kl0an-switcher-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.65); z-index: 99998;
            display: flex; justify-content: center; align-items: center;
            font-family: Roboto, Arial, sans-serif;
        }
        #kl0an-switcher-modal {
            background-color: #fff; padding: 24px; border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3); z-index: 99999;
            width: 90%; max-width: 400px; text-align: center;
        }
        #kl0an-switcher-modal h3 {
            margin: 0 0 10px 0; color: #202124; font-size: 22px; font-weight: 400;
        }
        #kl0an-switcher-input {
            width: 100%; padding: 12px 15px; border: 1px solid #ccc; border-radius: 4px;
            font-size: 16px; box-sizing: border-box; margin-top: 20px;
        }
        #kl0an-switcher-button { /* Botão principal */
            width: 100%; padding: 10px; border: none; border-radius: 4px;
            background-color: #1a73e8; color: white; font-size: 14px; font-weight: 500;
            cursor: pointer; margin-top: 20px; letter-spacing: .25px;
        }
        #kl0an-switcher-add { /* Botão secundário */
            width: 100%; padding: 10px; border: 1px solid #dadce0; border-radius: 4px;
            background-color: #fff; color: #1a73e8; font-size: 14px; font-weight: 500;
            cursor: pointer; margin-top: 10px; letter-spacing: .25px;
        }
        #kl0an-switcher-button:hover, #kl0an-switcher-add:hover { opacity: 0.9; }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Estrutura HTML do modal.
    const modalHTML = `
        <div id="kl0an-switcher-overlay">
            <div id="kl0an-switcher-modal">
                <h3>Trocar ou Adicionar Conta</h3>
                <input type="email" id="kl0an-switcher-input" placeholder="Digite o e-mail para ativar"/>
                <button id="kl0an-switcher-button">Ativar Conta</button>
                <button id="kl0an-switcher-add">Adicionar nova conta</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Seleciona os elementos da interface para adicionar lógica.
    const overlay = document.getElementById('kl0an-switcher-overlay');
    const input = document.getElementById('kl0an-switcher-input');
    const switchBtn = document.getElementById('kl0an-switcher-button');
    const addBtn = document.getElementById('kl0an-switcher-add');
    input.focus();

    // Função para TROCAR de conta (usa o método AccountChooser).
    function switchAccount() {
        const targetEmail = input.value;
        if (targetEmail && targetEmail.includes('@')) {
            const continueUrl = encodeURIComponent(window.location.href);
            const encodedEmail = encodeURIComponent(targetEmail);
            window.location.href = `https://accounts.google.com/AccountChooser?Email=${encodedEmail}&continue=${continueUrl}`;
        } else {
            alert("E-mail inválido.");
        }
    }

    // Função para ADICIONAR uma nova conta (usa o método AddSession).
    function addAccount() {
        const continueUrl = encodeURIComponent(window.location.href);
        window.location.href = `https://accounts.google.com/AddSession?continue=${continueUrl}`;
    }

    // Função para fechar o modal.
    function closeModal() {
        overlay.remove();
        styleSheet.remove();
    }

    // Associa as funções aos eventos de clique e teclado.
    switchBtn.addEventListener('click', switchAccount);
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            switchAccount();
        }
    });
    addBtn.addEventListener('click', addAccount);
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) { // Fecha apenas se clicar no fundo.
            closeModal();
        }
    });
})();
