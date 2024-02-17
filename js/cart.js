/**************************** Количество товара *********************************/

class CartQuantity {
    constructor($cartItem) {
        this.card = $cartItem;
        this.btnBlock = this.card.querySelector('.cart-list__quantity')
        this.input = this.card.querySelector('.cart-list__quantity input')
        this.decrementBtn = this.card.querySelector('.cart-list__quantity-btn_minus')
        this.incrementBtn = this.card.querySelector('.cart-list__quantity-btn_plus')
        this.init()
    }
    init() {
        this.btnBlock.addEventListener('click', this.checkClick.bind(this))
    }
    checkClick(event) {
        if (event.target == this.decrementBtn) {
            if (Number(this.input.value > 1))
                this.input.value = Number(this.input.value) - 1
        }
        else if (event.target == this.incrementBtn) {
            this.input.value = Number(this.input.value) + 1
        }
    }
}


const itemsArr = document.querySelectorAll('.cart-list__item')

if (Array.from(itemsArr).length > 0) {
    Array.from(itemsArr).forEach((element) => {
        const cartObj = new CartQuantity(element)
    })
}

/************************Список select*******************************/

// data-select="main" - родительский блок
// data-select="input" - input для ввода (необязательный)
// data-select="title" - блок заголовка выбранного элемена списка (необязательный)
// data-select="list" - скрывающийся блок содержащий список ratio или checkbox элементов
// data-select="btn" - кнопка открытия/закрытия списка


class SelectList {
    constructor(selectElement, type = 'radio') {
        this.selectBlock = selectElement;
        this.type = type;
        this.btn = this.selectBlock.querySelector('[data-select = "btn"]')
        this.list = this.selectBlock.querySelector('[data-select = "list"]')
        this.listArr = this.list.querySelectorAll('input')
        this.input = this.selectBlock.querySelector('[data-select = "input"]')
        this.title = this.selectBlock.querySelector('[data-select = "title"]')
        this.isOpen = false
        this.init()
    }

    init() {
        this.list.addEventListener('change', this.changeTitle.bind(this))
    }

    open() {
        this.btn.classList.add('open')
        this.list.classList.add('open')
        this.selectBlock.classList.add('active')
        this.isOpen = true
    }
    close() {
        this.btn.classList.remove('open')
        this.list.classList.remove('open')
        this.selectBlock.classList.remove('active')
        this.isOpen = false


    }
    toggle() {
        this.btn.classList.toggle('open')
        this.list.classList.toggle('open')
        this.selectBlock.classList.toggle('active')
        if (this.isOpen) {
            this.isOpen = false
        }
        else {
            this.isOpen = true

        }

    }

    changeTitle() {
        const checkedElement = Array.from(this.listArr).find((element) => {
            return element.checked
        })
        const titleText = Array.from(this.list.querySelectorAll('label')).find((element) => { return element.getAttribute('for') == checkedElement.id }).textContent
        console.log(titleText);
        if (this.title) {
            this.title.textContent = titleText
        }
        else if (this.input) {
            this.input.value = titleText
        }

        if (this.type == 'radio') {
            this.close
        }
    }
}


const selectArr = Array.from(document.querySelectorAll('[data-select="main"]')).map((element) => {
    const item = new SelectList(element)
    return item
})

document.addEventListener('click', checkClick)

function checkClick(event) {
    let activeSelect
    parentElem = event.target.closest('[data-select="main"]')
    if (selectArr.find((element) => {
        return parentElem == element.selectBlock
    })) {
        activeSelect = selectArr.find((element) => {
            return parentElem == element.selectBlock
        })

        if (event.target.closest('[data-select="btn"]') && activeSelect.isOpen) {
            activeSelect.close()
        }
        else {
            closeAllSelect()
            activeSelect.open()
        }
    } else {
        closeAllSelect()
    }
}

function closeAllSelect() {
    selectArr.forEach((element) => { element.close() })
}


/************************Способ доставки*******************************/

const hiddenBlockArr = document.querySelectorAll('.cart-forms__hidden-block')
const checkboxArr = document.querySelectorAll('.cart-forms__delivery .cart-forms__checkbox input')

Array.from(checkboxArr).forEach((element) => {
    element.addEventListener('change', changeDeliveryType)
})

function changeDeliveryType(event) {
    Array.from(hiddenBlockArr).forEach((element) => {
        element.classList.remove('active')
    })
    event.target.closest('.cart-forms__hidden-block').classList.add('active')
}

