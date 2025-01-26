document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('inputCNPJ').addEventListener('input', function (e) {
    var valor = e.target.value.replace(/\D/g, '');
    var formatado = '';

    // Primeiro bloco de números
    formatado += valor.substr(0, 2);

    // Segundo bloco
    if (valor.length >= 3) {
      formatado += '.' + valor.substr(2, 3);
    }

    // Terceiro bloco
    if (valor.length >= 6) {
      formatado += '.' + valor.substr(5, 3);
    }

    // Quarto bloco
    if (valor.length >= 9) {
      formatado += '/' + valor.substr(8, 4);
    }

    // Dígitos verificadores
    if (valor.length >= 13) {
      formatado += '-' + valor.substr(12, 2);
    }

    e.target.value = formatado;
  });
});

document.addEventListener('DOMContentLoaded', function () {
    // Inicialização do controle de ícones
    var iconesAtuais = {
        'card-i1': 1,
        'card-i2': 1,
        'card-i3': 1,
        'card-i4': 1,
        'card-i5': 1
    };

    // Função para mudar o ícone
    window.mudarSvg = function (elemento) {
        var id = elemento.id;
        
        iconesAtuais[id]++;
        if (iconesAtuais[id] > 5) {
            iconesAtuais[id] = 1;
        }

        var novoIcone = "iconecard" + iconesAtuais[id] + ".svg";
        elemento.src = novoIcone;
    };
});


document.addEventListener('DOMContentLoaded', function () {
    var linha2Switch = document.getElementById('linha2-switch');
    var linha2 = document.querySelectorAll('.card-info')[1]; // Ajuste o índice conforme necessário para selecionar LINHA 2

    // Define o estado padrão de LINHA 2 como oculto
    linha2.style.display = 'none';

    linha2Switch.addEventListener('change', function () {
        if (this.checked) {
            linha2.style.display = 'block'; // Mostra LINHA 2
        } else {
            linha2.style.display = 'none'; // Esconde LINHA 2
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var switchPrincipal2 = document.getElementById('switch-principal-2');
    var card2 = document.getElementById('card-2');
    var switchDependenteContainer2 = document.getElementById('switch-dependente-container-2');
    var switchDependente2 = document.getElementById('switch-dependente-2');
    var card2linha2 = card2.querySelectorAll('.card-info')[1]; // Seleciona o segundo elemento .card-info que é LINHA 2

    // Esconde os elementos no carregamento da página
    card2.style.display = 'none';
    switchDependenteContainer2.style.display = 'none';
    card2linha2.style.display = 'none';

    // Event listener para o switch-principal-2
    switchPrincipal2.addEventListener('change', function () {
        if (this.checked) {
            card2.style.display = 'flex'; // ou 'block', dependendo da sua estrutura CSS
            switchDependenteContainer2.style.display = 'flex';
        } else {
            card2.style.display = 'none';
            switchDependenteContainer2.style.display = 'none';
            switchDependente2.checked = false; // Desmarca o switch-dependente-2
            card2linha2.style.display = 'none'; // Esconde LINHA 2
        }
    });

    // Event listener para o switch-dependente-2
    switchDependente2.addEventListener('change', function () {
        if (this.checked) {
            card2linha2.style.display = 'block'; // Mostra LINHA 2
        } else {
            card2linha2.style.display = 'none'; // Esconde LINHA 2
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var switchPrincipal3 = document.getElementById('switch-principal-3');
    var card3 = document.getElementById('card-3');
    var switchDependenteContainer3 = document.getElementById('switch-dependente-container-3');
    var switchDependente3 = document.getElementById('switch-dependente-3');
    var card3linha2 = card3.querySelectorAll('.card-info')[1]; // Seleciona o segundo elemento .card-info que é LINHA 2 de card 3

    // Esconde os elementos no carregamento da página
    card3.style.display = 'none';
    switchDependenteContainer3.style.display = 'none';
    card3linha2.style.display = 'none';

    // Event listener para o switch-principal-3
    switchPrincipal3.addEventListener('change', function () {
        if (this.checked) {
            card3.style.display = 'flex'; // ou 'block', dependendo da sua estrutura CSS
            switchDependenteContainer3.style.display = 'flex';
        } else {
            card3.style.display = 'none';
            switchDependenteContainer3.style.display = 'none';
            switchDependente3.checked = false; // Desmarca o switch-dependente-3
            card3linha2.style.display = 'none'; // Esconde LINHA 2
        }
    });

    // Event listener para o switch-dependente-3
    switchDependente3.addEventListener('change', function () {
        if (this.checked) {
            card3linha2.style.display = 'block'; // Mostra LINHA 2
        } else {
            card3linha2.style.display = 'none'; // Esconde LINHA 2
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var switchPrincipal4 = document.getElementById('switch-principal-4');
    var card4 = document.getElementById('card-4');
    var switchDependenteContainer4 = document.getElementById('switch-dependente-container-4');
    var switchDependente4 = document.getElementById('switch-dependente-4');
    var card4linha2 = card4.querySelectorAll('.card-info')[1]; // Seleciona o segundo elemento .card-info que é LINHA 2 de card 4

    // Esconde os elementos no carregamento da página
    card4.style.display = 'none';
    switchDependenteContainer4.style.display = 'none';
    card4linha2.style.display = 'none';

    // Event listener para o switch-principal-4
    switchPrincipal4.addEventListener('change', function () {
        if (this.checked) {
            card4.style.display = 'flex'; // ou 'block', dependendo da sua estrutura CSS
            switchDependenteContainer4.style.display = 'flex';
        } else {
            card4.style.display = 'none';
            switchDependenteContainer4.style.display = 'none';
            switchDependente4.checked = false; // Desmarca o switch-dependente-4
            card4linha2.style.display = 'none'; // Esconde LINHA 2
        }
    });

    // Event listener para o switch-dependente-4
    switchDependente4.addEventListener('change', function () {
        if (this.checked) {
            card4linha2.style.display = 'block'; // Mostra LINHA 2
        } else {
            card4linha2.style.display = 'none'; // Esconde LINHA 2
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var switchPrincipal5 = document.getElementById('switch-principal-5');
    var card5 = document.getElementById('card-5');
    var switchDependenteContainer5 = document.getElementById('switch-dependente-container-5');
    var switchDependente5 = document.getElementById('switch-dependente-5');
    var card5linha2 = card5.querySelectorAll('.card-info')[1]; // Seleciona o segundo elemento .card-info que é LINHA 2 de card 5

    // Esconde os elementos no carregamento da página
    card5.style.display = 'none';
    switchDependenteContainer5.style.display = 'none';
    card5linha2.style.display = 'none';

    // Event listener para o switch-principal-5
    switchPrincipal5.addEventListener('change', function () {
        if (this.checked) {
            card5.style.display = 'flex'; // ou 'block', dependendo da sua estrutura CSS
            switchDependenteContainer5.style.display = 'flex';
        } else {
            card5.style.display = 'none';
            switchDependenteContainer5.style.display = 'none';
            switchDependente5.checked = false; // Desmarca o switch-dependente-5
            card5linha2.style.display = 'none'; // Esconde LINHA 2
        }
    });

    // Event listener para o switch-dependente-5
    switchDependente5.addEventListener('change', function () {
        if (this.checked) {

            card5linha2.style.display = 'block'; // Mostra LINHA 2
        } else {
            card5linha2.style.display = 'none'; // Esconde LINHA 2
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // ...outros códigos...

    var botaoImprimir = document.getElementById('botao-imprimir');
    var secaoConfig = document.querySelector('.config'); // Certifique-se de que o seletor corresponda à sua classe de configuração

    if (botaoImprimir && secaoConfig) {
        botaoImprimir.addEventListener('click', function () {
            // Adiciona uma classe para ocultar a seção de configuração
            secaoConfig.classList.add('ocultar-na-impressao');

            // Dispara a impressão
            window.print();

            // Espera um pouco antes de remover a classe (por exemplo, 500 milissegundos)
            setTimeout(function () {
                secaoConfig.classList.remove('ocultar-na-impressao');
            }, 500);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var inputNaturezaJuridica = document.getElementById('inputNaturezaJuridica');
    var inputCNPJ = document.getElementById('inputCNPJ');
    var displayNaturezaJuridica = document.getElementById('displayNaturezaJuridica');
    var displayCNPJ = document.getElementById('displayCNPJ');

    // Função para atualizar o conteúdo da natureza jurídica
    inputNaturezaJuridica.addEventListener('input', function () {
        displayNaturezaJuridica.textContent = this.value;
    });

    // Função para atualizar o conteúdo do CNPJ
    inputCNPJ.addEventListener('input', function () {
        displayCNPJ.textContent = this.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var perfis = {
        perfil1: { nome: "Chams Assessoria", imagem: "perfil1.png" },
        perfil2: { nome: "ASJ Assessoria", imagem: "perfil2.png" },
        perfil3: { nome: "Banco BTG", imagem: "perfil3.png" }
    };

    var perfilAtual = 1;
    var totalPerfis = Object.keys(perfis).length;

    function trocarPerfil() {
        perfilAtual++;
        if (perfilAtual > totalPerfis) {
            perfilAtual = 1;
        }
        
        var perfilSelecionado = perfis['perfil' + perfilAtual];
        document.getElementById('perfil-imagem').src = perfilSelecionado.imagem;
        document.getElementById('perfil-nome').textContent = perfilSelecionado.nome;
    }

    var elementoTrocaPerfil = document.getElementById('trocaPerfil');
    if (elementoTrocaPerfil) {
        elementoTrocaPerfil.addEventListener('click', trocarPerfil);
    }
});
