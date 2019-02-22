/**
 * @author - Арсёнов И.Д.  Junior Frontend Developer
 * @description - class Calculator - описывает простую архитектуру самого простейшого калькулятора
 */

class Calculator {
    
    /**
     * @description - constructor нужен для того, чтобы взять айдишник поля
     * @return {undefined} - undefined
     */

    constructor () {
         this.input = document.getElementById('inp');
    }

    /**
     * @description - метод _clickAndAddValue нужен для того, чтобы суммировать значения
     * @param {e} e - элемент, на котором будет произведено событие
     * @return {undefined} - undefined
     */

    _clickAndAddValue(e) { if (e.target.classList.contains('col-3')) {this.input.value += e.target.textContent;} }

    /**
     * @description - метод _clickClear нужен для очистки поля
     * @param {e} e - элемент, на котором будет произведено событие
     * @return {undefined} - undefined 
     */

    _clickClear(e) { if (e.target.classList.contains('clear')){ this.input.value = ''; } }

    /**
     * @description - метод _calculate сердце приложения, с помощью метода eval, производит вычисления
     * @return {undefined} - undefined
     */

    _calculate() {
        let string = this.input.value.split(''); // Преобразовываем строку в массив
        // Фильтруем массив, убираем всё лишнее, оставляем всё нужное
        this.newString = string.filter(function (elem) {
            return Number(elem) || elem === '+' || elem === '-' || elem === '*' || elem === '/' || elem === '.' || elem === '0';
        }).join('');
        this.res = eval(this.newString); // С помощью метода eval производим калькуляцию значений
        this.input.value = this.res; // Вставляем результат в поле
    }

    /**
     * @description - метод _clickEqual нужен для того, чтобы по нажатию на кнопку Равно вызвать функцию калькуляции
     * @param {e} e - место, на котором будет произведено событие
     * @return {undefined} - undefined
     */

    _clickEqual(e) { if (e.target.classList.contains('equal')){ this._calculate();} }

    /**
     * @description - метод _tablo нужен для работы с кнопками Enter и Escape
     * @param {e} e - место, на котором будет произведено событие
     * @return {undefined} - undefined
     */

    _tablo (e) {
        if (e.keyCode === 13) { this._calculate(); } // Выводит резльтат
        if (e.keyCode === 27) { this.input.value = ''; } // Убирает результат
    }

    /**
     * @description - метод _events работает с событиями
     * @return {undefined} - undefined
     */

    _events () {
        document.body.addEventListener('click', (e) => this._clickAndAddValue(e));
        document.body.addEventListener('keyup', (e) => this._tablo(e));
        document.body.addEventListener('click', (e) => this._clickClear(e));
        document.body.addEventListener('click', (e) => this._clickEqual(e));
    }

    /**
     * @description - метод _init нужен для инициализации метода _events (событий с пользователем)
     * @return {undefined} - undefined
     */

    _init() {
        this._events();
    }
}

const calculator = new Calculator(); // Создаём экземпляр класса
calculator._init(); // Вызываем нашу работу