function criCalculadora() {
    return {
        display: document.querySelector('.display'),

        resultado() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta invalida')
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert('Conta invalida')
            }
        },

        clearDisplay() {
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0 /** De onde a string termina ate o fim */, /** Tira um */-1);
        },

        inicia() {
            this.clickBotoes();
            this.pressionaEnter();
        },
        clickBotoes() {
            document.addEventListener('click', e => {
                const el = e.target; // Qual botão esta sendo clicado

                if (el.classList.contains('btn-num')) { // Pega o valor do botão.
                    this.btnParaDisplay(el.innerText); // valor armazenado no botão
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-dell')) {
                    this.apagaUm(el.innerText)
                }

                if (el.classList.contains('btn-iqual')) {
                    this.resultado();
                }

            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor; // Modificar o valor do display e não o innerHTML... pra falar a verda nem faz sentido pois innerText so acita valores 
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.resultado();
                }
            })
        }
    };
}

const calculadora = criCalculadora();

calculadora.inicia();