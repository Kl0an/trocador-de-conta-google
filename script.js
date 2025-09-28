/**
 * @name Alternador de Contas do Google - Híbrido
 * @version v1.2-beta
 * @description Um bookmarklet inteligente que tenta usar uma interface gráfica para trocar/adicionar contas Google e, se bloqueado, usa um prompt como alternativa.
 * @author Daniel Nunes Lima (user-github: Kl0an)
 */

(function() {
    try {
        // TENTA executar o código da interface gráfica.
        // Se a página tiver uma Política de Segurança (CSP), esta parte vai gerar um erro.

        const styles = `
            #kl0an-switcher-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.65);z-index:99998;display:flex;justify-content:center;align-items:center;font-family:Roboto,Arial,sans-serif}
            /* ... (resto do CSS) ... */
            #kl0an-switcher-button:hover,#kl0an-switcher-add:hover{opacity:0.9}`;
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        const modalHTML = `
            <div id="kl0an-switcher-overlay">
                <div id="kl0an-switcher-modal">
                    <h3>Trocar ou Adicionar Conta</h3>
                    <input type="email" id="kl0an-switcher-input" placeholder="Digite o e-mail para ativar"/>
                    <button id="kl0an-switcher-button">Ativar Conta</button>
                    <button id="kl0an-switcher-add">Adicionar nova conta</button>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const overlay = document.getElementById('kl0an-switcher-overlay');
        const input = document.getElementById('kl0an-switcher-input');
        const switchBtn = document.getElementById('kl0an-switcher-button');
        const addBtn = document.getElementById('kl0an-switcher-add');
        input.focus();

        function switchAccount() {
            const targetEmail = input.value;
            if (targetEmail && targetEmail.includes('@')) {
                const continueUrl = encodeURIComponent(window.location.href);
                const encodedEmail = encodeURIComponent(targetEmail);
                window.location.href = `https://accounts.google.com/AccountChooser?Email=${encodedEmail}&continue=${continueUrl}`;
            } else { alert("E-mail inválido."); }
        }

        function addAccount() {
            const continueUrl = encodeURIComponent(window.location.href);
            window.location.href = `https://accounts.google.com/AddSession?continue=${continueUrl}`;
        }
        
        function closeModal() {
            overlay.remove();
            styleSheet.remove();
        }

        switchBtn.addEventListener('click', switchAccount);
        input.addEventListener('keydown', function(event) { if (event.key === 'Enter') { switchAccount(); } });
        addBtn.addEventListener('click', addAccount);
        overlay.addEventListener('click', function(event) { if (event.target === overlay) { closeModal(); } });

    } catch (error) {
        // SE O 'try' FALHAR, o código pula para este bloco 'catch'.

        console.warn("Interface gráfica bloqueada pela página. Usando modo de compatibilidade (prompt). Erro:", error);
        
        const targetEmail = prompt("Interface gráfica bloqueada.\n\nDigite o e-mail da conta Google para ativar:");

        if (targetEmail && targetEmail.includes('@')) {
            const continueUrl = encodeURIComponent(window.location.href);
            const encodedEmail = encodeURIComponent(targetEmail);
            window.location.href = `https://accounts.google.com/AccountChooser?Email=${encodedEmail}&continue=${continueUrl}`;
        } else if (targetEmail) {
            alert("E-mail inválido. Ação cancelada.");
        }
    }
})();
