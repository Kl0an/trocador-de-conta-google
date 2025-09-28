# Google Account Switcher - v1.2-beta (Híbrido)

Um bookmarklet inteligente e universal para trocar ou adicionar contas Google. Ele automaticamente escolhe a melhor interface para você.

## 🚀 Funcionalidade Híbrida

Este script é a versão definitiva do projeto. Ele combina o melhor dos dois mundos:

1.  **Tenta abrir uma interface gráfica moderna** para uma experiência de usuário agradável.
2.  Se a página tiver uma política de segurança (CSP) que bloqueie a interface, o script **automaticamente recorre a uma caixa de diálogo simples** (`prompt`), garantindo que a ferramenta funcione em 100% dos serviços Google.

Com um único favorito, você tem a melhor aparência possível e a garantia de que ele sempre funcionará.

## Como Instalar

1.  Abra a barra de favoritos do seu navegador.
2.  Clique com o botão direito e selecione **"Adicionar favorito"**.
3.  No campo **Nome**, digite `Trocar Conta Google`.
4.  No campo **URL**, cole o código de linha única abaixo:

    ```
    javascript:(function(){try{const t=`#kl0an-switcher-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.65);z-index:99998;display:flex;justify-content:center;align-items:center;font-family:Roboto,Arial,sans-serif}#kl0an-switcher-modal{background-color:#fff;padding:24px;border-radius:8px;box-shadow:0 5px 15px rgba(0,0,0,0.3);z-index:99999;width:90%;max-width:400px;text-align:center}#kl0an-switcher-modal h3{margin:0 0 10px 0;color:#202124;font-size:22px;font-weight:400}#kl0an-switcher-input{width:100%;padding:12px 15px;border:1px solid #ccc;border-radius:4px;font-size:16px;box-sizing:border-box;margin-top:20px}#kl0an-switcher-button{width:100%;padding:10px;border:none;border-radius:4px;background-color:#1a73e8;color:white;font-size:14px;font-weight:500;cursor:pointer;margin-top:20px;letter-spacing:.25px}#kl0an-switcher-add{width:100%;padding:10px;border:1px solid #dadce0;border-radius:4px;background-color:#fff;color:#1a73e8;font-size:14px;font-weight:500;cursor:pointer;margin-top:10px;letter-spacing:.25px}#kl0an-switcher-button:hover,#kl0an-switcher-add:hover{opacity:0.9}`;const e=document.createElement("style");e.innerText=t;document.head.appendChild(e);const n=`<div id="kl0an-switcher-overlay"><div id="kl0an-switcher-modal"><h3>Trocar ou Adicionar Conta</h3><input type="email" id="kl0an-switcher-input" placeholder="Digite o e-mail para ativar"/><button id="kl0an-switcher-button">Ativar Conta</button><button id="kl0an-switcher-add">Adicionar nova conta</button></div></div>`;document.body.insertAdjacentHTML("beforeend",n);const o=document.getElementById("kl0an-switcher-overlay"),c=document.getElementById("kl0an-switcher-input"),i=document.getElementById("kl0an-switcher-button"),d=document.getElementById("kl0an-switcher-add");c.focus();function r(){const t=c.value;if(t&&t.includes("@")){const n=encodeURIComponent(window.location.href),o=encodeURIComponent(t);window.location.href=`https://accounts.google.com/AccountChooser?Email=${o}&continue=${n}`}else{alert("E-mail inválido.")}}function a(){const t=encodeURIComponent(window.location.href);window.location.href=`https://accounts.google.com/AddSession?continue=${t}`}function l(){o.remove();e.remove()}i.addEventListener("click",r);c.addEventListener("keydown",(function(t){"Enter"===t.key&&r()}));d.addEventListener("click",a);o.addEventListener("click",(function(t){t.target===o&&l()}))}catch(t){console.warn("Interface gráfica bloqueada pela página. Usando modo de compatibilidade (prompt). Erro:",t);const e=prompt("Interface gráfica bloqueada.\n\nDigite o e-mail da conta Google para ativar:");if(e&&e.includes("@")){const n=encodeURIComponent(window.location.href),o=encodeURIComponent(e);window.location.href=`https://accounts.google.com/AccountChooser?Email=${o}&continue=${n}`}else if(e)alert("E-mail inválido. Ação cancelada.")}})();
    ```

5.  Salve o favorito.

## 👨‍💻 Como Usar

É simples:
1.  Clique no favorito em qualquer página do Google.
2.  Se a interface gráfica aparecer, use-a.
3.  Se a página for muito segura e bloquear a interface, uma caixa de diálogo simples aparecerá automaticamente. Use-a.

Você não precisa mais de dois favoritos diferentes. Este único script se adapta à situação.

## 📄 Licença

Este projeto é distribuído sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
_Criado por Daniel Nunes Lima (Kl0an)_
