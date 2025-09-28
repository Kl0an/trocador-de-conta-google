# trocador-de-conta-google
Um script #bookmarklet (Marcador de página com script) para trocar rapidamente a conta ativa em qualquer site do Google.

---------------------------------------------------------------------------------------------------------------

# Google Account Switcher - v1.0-beta

Um bookmarklet com uma interface gráfica moderna para trocar rapidamente ou adicionar contas Google em qualquer serviço da plataforma (YouTube, Drive, Gmail, etc.).

Este projeto evoluiu de um simples `prompt` para um modal interativo, facilitando ainda mais o gerenciamento de múltiplas contas no dia a dia.

## ✨ Funcionalidades Principais

* **Interface Gráfica:** Substitui a caixa de diálogo padrão do navegador por um modal limpo e intuitivo.
* **Troca Rápida de Conta:** Digite o e-mail desejado e clique em "Ativar Conta" para trocar o usuário ativo naquela aba, usando o fluxo de autenticação oficial do Google.
* **Adicionar Nova Conta:** Inclui um botão de atalho ("Adicionar nova conta") que te leva diretamente à página de login do Google para adicionar uma nova conta, retornando para sua página de origem após o processo.

## ⚠️ Aviso Importante: Política de Segurança (CSP)

> Em algumas páginas de alta segurança do Google (como configurações de conta, login, etc.), a Política de Segurança de Conteúdo (CSP) do site pode **bloquear a exibição desta interface gráfica** para proteger contra ataques.
>
> **Recomendação:** Tenha também a [versão sem interface](https-seu-link-para-a-versao-simples-se-quiser) como um favorito de backup, pois ela é 100% à prova de falhas.

## 🚀 Como Instalar

1.  Abra a barra de favoritos do seu navegador.
2.  Clique com o botão direito do mouse na barra e selecione **"Adicionar favorito"** (ou "Adicionar página").
3.  No campo **Nome**, digite algo fácil de lembrar, como `Gerenciar Contas Google`.
4.  No campo **URL**, cole o código de linha única abaixo:

    ```
    javascript:(function(){const t=`#kl0an-switcher-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.65);z-index:99998;display:flex;justify-content:center;align-items:center;font-family:Roboto,Arial,sans-serif}#kl0an-switcher-modal{background-color:#fff;padding:24px;border-radius:8px;box-shadow:0 5px 15px rgba(0,0,0,0.3);z-index:99999;width:90%;max-width:400px;text-align:center}#kl0an-switcher-modal h3{margin:0 0 10px 0;color:#202124;font-size:22px;font-weight:400}#kl0an-switcher-input{width:100%;padding:12px 15px;border:1px solid #ccc;border-radius:4px;font-size:16px;box-sizing:border-box;margin-top:20px}#kl0an-switcher-button{width:100%;padding:10px;border:none;border-radius:4px;background-color:#1a73e8;color:white;font-size:14px;font-weight:500;cursor:pointer;margin-top:20px;letter-spacing:.25px}#kl0an-switcher-add{width:100%;padding:10px;border:1px solid #dadce0;border-radius:4px;background-color:#fff;color:#1a73e8;font-size:14px;font-weight:500;cursor:pointer;margin-top:10px;letter-spacing:.25px}#kl0an-switcher-button:hover,#kl0an-switcher-add:hover{opacity:0.9}`;const e=document.createElement("style");e.innerText=t;document.head.appendChild(e);const n=`<div id="kl0an-switcher-overlay"><div id="kl0an-switcher-modal"><h3>Trocar ou Adicionar Conta</h3><input type="email" id="kl0an-switcher-input" placeholder="Digite o e-mail para ativar"/><button id="kl0an-switcher-button">Ativar Conta</button><button id="kl0an-switcher-add">Adicionar nova conta</button></div></div>`;document.body.insertAdjacentHTML("beforeend",n);const o=document.getElementById("kl0an-switcher-overlay"),c=document.getElementById("kl0an-switcher-input"),i=document.getElementById("kl0an-switcher-button"),d=document.getElementById("kl0an-switcher-add");c.focus();function r(){const t=c.value;if(t&&t.includes("@")){const n=encodeURIComponent(window.location.href),o=encodeURIComponent(t);window.location.href=`https://accounts.google.com/AccountChooser?Email=${o}&continue=${n}`}else{alert("E-mail inválido.")}}function a(){const t=encodeURIComponent(window.location.href);window.location.href=`https://accounts.google.com/AddSession?continue=${t}`}function l(){o.remove();e.remove()}i.addEventListener("click",r);c.addEventListener("keydown",function(t){"Enter"===t.key&&r()});d.addEventListener("click",a);o.addEventListener("click",function(t){t.target===o&&l()})})();
    ```

5.  Salve o favorito.

## 👨‍💻 Como Usar

1.  Em qualquer página de um serviço Google, clique no favorito que você criou.
2.  A interface gráfica aparecerá no centro da tela.
3.  **Para trocar de conta:** Digite o e-mail completo no campo de texto e clique no botão **"Ativar Conta"** (ou pressione Enter).
4.  **Para adicionar uma conta:** Clique no botão **"Adicionar nova conta"**.

## 📄 Licença

Este projeto é distribuído sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
_Criado por Daniel Nunes Lima (Kl0an)_
