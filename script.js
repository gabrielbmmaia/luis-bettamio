document.addEventListener('DOMContentLoaded', function() {
    // Datas importantes
    const datas = {
        'aula': new Date('2025-06-22T00:00:00'),
        'crm': new Date('2025-07-07T00:00:00'),
        'colacao': new Date('2025-09-19T00:00:00'),
        'festa': new Date('2025-09-20T00:00:00')
    };

    // Elementos dos contadores
    const countdowns = {
        'aula': document.getElementById('countdown-aula'),
        'crm': document.getElementById('countdown-crm'),
        'colacao': document.getElementById('countdown-colacao'),
        'festa': document.getElementById('countdown-festa')
    };

    // Função para calcular o tempo restante
    function calcularTempoRestante(dataFinal) {
        const agora = new Date();
        const diferenca = dataFinal - agora;

        // Se já passou a data
        if (diferenca < 0) {
            return {
                dias: '00',
                horas: '00',
                minutos: '00',
                segundos: '00',
                passou: true
            };
        }

        // Cálculos de tempo
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Formatação com dois dígitos
        return {
            dias: dias.toString().padStart(2, '0'),
            horas: horas.toString().padStart(2, '0'),
            minutos: minutos.toString().padStart(2, '0'),
            segundos: segundos.toString().padStart(2, '0'),
            passou: false
        };
    }

    // Função para atualizar os contadores
    function atualizarContadores() {
        for (const [chave, data] of Object.entries(datas)) {
            const tempoRestante = calcularTempoRestante(data);
            const contador = countdowns[chave];
            
            if (contador) {
                // Atualizar valores nos elementos HTML
                const elementosDias = contador.querySelector('.days');
                const elementosHoras = contador.querySelector('.hours');
                const elementosMinutos = contador.querySelector('.minutes');
                const elementosSegundos = contador.querySelector('.seconds');
                
                if (elementosDias) elementosDias.textContent = tempoRestante.dias;
                if (elementosHoras) elementosHoras.textContent = tempoRestante.horas;
                if (elementosMinutos) elementosMinutos.textContent = tempoRestante.minutos;
                if (elementosSegundos) elementosSegundos.textContent = tempoRestante.segundos;
                
                // Obter o cartão pai
                const cartao = contador.closest('.event-card');
                
                if (cartao) {
                    // Verificar estado do evento
                    if (tempoRestante.passou) {
                        cartao.classList.add('expired');
                    } else {
                        cartao.classList.remove('expired');
                    }
                }
            }
        }
    }

    // Inicializar os contadores
    atualizarContadores();
    
    // Atualizar a cada segundo
    setInterval(atualizarContadores, 1000);

    // Efeito ao rolar a página
    function revelarAoRolar() {
        const elementos = document.querySelectorAll('.event-card, .quotes-section');
        
        elementos.forEach(elemento => {
            const posicaoElemento = elemento.getBoundingClientRect().top;
            const alturaJanela = window.innerHeight;
            
            if (posicaoElemento < alturaJanela - 100) {
                elemento.classList.add('visible');
            }
        });
    }

    // Adicionar classe visible aos elementos no início da página
    window.addEventListener('load', revelarAoRolar);
    
    // Verificar ao rolar
    window.addEventListener('scroll', revelarAoRolar);

    // Adicionar estilos para animação de entrada
    const styleScroll = document.createElement('style');
    styleScroll.textContent = `
        .quotes-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .quotes-section.visible, .event-card.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(styleScroll);
}); 