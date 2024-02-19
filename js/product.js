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



const quantityItem = new CartQuantity(document.querySelector('.product__selectors'))

document.querySelector('.properties__btn-line').addEventListener('click', checkClick)

function checkClick(event) {
    if (event.target.closest('.properties__btn')) {
        changePropertiesPage(event.target.closest('.properties__btn'))
    }

}


function changePropertiesPage(btn) {
    Array.from(document.querySelectorAll('.properties__btn')).forEach((element) => {
        element.classList.remove('active')
    })
    Array.from(document.querySelectorAll('.properties__page')).forEach((element) => {
        element.classList.remove('active')
    })
    btn.classList.add('active')
    document.querySelector(`.properties__page[data-property="${btn.dataset.property}"]`).classList.add('active')
}