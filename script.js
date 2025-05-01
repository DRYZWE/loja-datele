const produtos = [
    { nome: "Amendoim", preco: 2.00, img: "img/amendoim.png", tipo: "doce" },
    { nome: "Fini", preco: 1.50, img: "img/fini.webp", tipo: "doce" },
    { nome: "Pirulito", preco: 0.75, img: "img/pirulito.jpg", tipo: "doce" },
    { nome: "Paçoca", preco: 0.50, img: "img/paçoca.webp", tipo: "doce" },
    { nome: "Mentos", preco: 2.00, img: "img/mentos.jpg", tipo: "doce" },
    { nome: "Tortuguita", preco: 1.50, img: "img/tortuguita.png", tipo: "doce" },
    { nome: "Bala", preco: 0.15, img: "img/bala.jpg", tipo: "doce" },
    { nome: "Pingo de Leite", preco: 1.00, img: "img/pingo de leite.jpg", tipo: "doce" },
    { nome: "Pé de Moça", preco: 1.50, img: "img/pe de moca.jpg", tipo: "doce" },
    { nome: "Café Espresso", preco: 3.00, img: "img/espressso.jpg", tipo: "bebida" },
    { nome: "Nescau", preco: 3.00, img: "img/nescau.jpg", tipo: "bebida" },
    { nome: "Galak", preco: 3.00, img: "img/galak.png", tipo: "bebida" },
    { nome: "Chococcino", preco: 4.50, img: "img/chococcino.png", tipo: "bebida" },
    { nome: "Capuccino", preco: 4.50, img: "img/cappucino.jpg", tipo: "bebida" },
    { nome: "Café com Leite", preco: 3.00, img: "img/cafe com leite.jpg", tipo: "bebida" }
  ];
  
  function criarCards(tipo, containerId) {
    const container = document.getElementById(containerId);
    let delay = 0;
    produtos.filter(p => p.tipo === tipo).forEach(p => {
      const el = document.createElement("div");
      el.className = "card fade-in";
      el.style.animationDelay = `${delay}s`;
      el.innerHTML = `
        <img src="${p.img}" alt="${p.nome}" />
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
      `;
      el.onclick = () => modal.classList.remove("hidden");
      container.appendChild(el);
      delay += 0.1;
    });
  }
  
  criarCards("bebida", "grid-bebidas");
  criarCards("doce", "grid-doces");
  
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  closeBtn.onclick = () => modal.classList.add("hidden");
  window.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  };
  
  // Modal instruções café
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const instrucoesCafe = document.getElementById("instrucoes-cafe");
  
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
  
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove("show");
    }
  });
  
  function abrirCafe() {
    instrucoesCafe.classList.remove("hidden");
    sidebar.classList.remove("show");
  }
  
  function fecharCafe() {
    instrucoesCafe.classList.add("hidden");
  }
  
  // Fechar modal do café clicando fora
  window.addEventListener("click", (e) => {
    if (e.target === instrucoesCafe) {
      fecharCafe();
    }
  });
  
  function fecharMenu() {
    sidebar.classList.remove("show");
  }
  
  function copiarPix() {
    const chave = "(21) 98846-3718";
    navigator.clipboard.writeText(chave).then(() => {
      const botao = document.querySelector(".copy-btn");
      botao.innerText = "Copiado!";
      setTimeout(() => botao.innerText = "Copiar", 2000);
    });
  }
  