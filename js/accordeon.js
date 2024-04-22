if (document.querySelector('[data-accordeon="main"]')) {
    const accordeon = document.querySelector('[data-accordeon="main"]')
    accordeon.addEventListener('click', checkAccordeonClick)
}


function checkAccordeonClick(event) {
    if (event.target.closest('[data-accordeon="btn"]')) {
        event.target.closest('[data-accordeon="btn"]').classList.toggle('hide')
        event.target.closest('[data-accordeon="btn"]').parentNode.querySelector('[data-accordeon="hiddenContent"]').classList.toggle('hide')
        event.target.closest('[data-accordeon="btn"]').parentNode.querySelector('[data-accordeon="indicator"]').classList.toggle('hide')
    }
}


const burgerAccordeon = document.querySelector('[data-burger="main"]')
burgerAccordeon.addEventListener('click', checkBurgerAccordeonClick)


function checkBurgerAccordeonClick(event) {
    if (event.target.closest('[data-burger="btn"]')) {
        event.target.closest('[data-burger="btn"]').classList.toggle('hide')
        event.target.closest('[data-burger="btn"]').parentNode.querySelector('[data-burger="hiddenContent"]').classList.toggle('hide')
        event.target.closest('[data-burger="btn"]').parentNode.querySelector('[data-burger="indicator"]').classList.toggle('hide')
    }
}