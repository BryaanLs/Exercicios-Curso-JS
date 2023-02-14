function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = function () {
        this.cliqueBtns();
        this.pressEnter();
    };


    this.clearDisplay = function () {
        this.display.value = '';
    };

    this.apagaUm = function () {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = function () {
        let conta = this.display.value;
        try {
            conta = eval(conta);
            if (!conta) {
                alert('Conta invalida!');
                return;
            }

            this.display.value = conta
        } catch (e) {
            alert('Conta invalida!');
        }
    };

    this.pressEnter = function () {
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.realizaConta();
            }
        })
    }

    this.cliqueBtns = function () {
        document.addEventListener('click', function (e) {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
                this.display.focus();
            }
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.apagaUm();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        }.bind(this));
    };

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };

};

const calculadora = new Calculadora();

calculadora.inicia();


