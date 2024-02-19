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
        this.selectBlock.addEventListener('click', this.open.bind(this))
        this.list.addEventListener('change', this.changeTitle.bind(this))
        this.changeTitle()
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
            this.close()
        }
    }
}
const catalogSelect = new SelectList(document.querySelector('[data-select="main"]'))

document.addEventListener('click', checkClick, true)

function checkClick(event) {
    parentElem = event.target.closest('[data-select="main"]')
    if (parentElem == catalogSelect.selectBlock) {

        if (event.target.closest('[data-select="btn"]') && catalogSelect.isOpen) {
            event.stopPropagation()
            catalogSelect.close()
        }
        else {
            catalogSelect.open()
        }
    } else {
        catalogSelect.close()
    }
    if (!event.target.closest('.filter')) {
        closeFilterMenu()
    }
}



const itemName = new MoveSlider('.catalog-grid__grid')
itemName.init()


const filterBtnOpen = document.querySelector('.catalog-grid__filter-btn-mobile')
const filterBtnClose = document.querySelector('.filter__close-btn')
const filterMenu = document.querySelector('.filter')


filterBtnOpen.addEventListener('click', openFilterMenu)

function openFilterMenu() {
    filterMenu.classList.add('open')
    filterBtnClose.addEventListener('click', closeFilterMenu)

}

function closeFilterMenu() {
    filterMenu.classList.remove('open')
    filterBtnClose.removeEventListener('click', closeFilterMenu)

}