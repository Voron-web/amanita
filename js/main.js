const citySelectBtn = document.querySelector('.city-select')
const searchPanel = document.querySelector('.header__search-panel')


document.addEventListener('click', checkClick)

function checkClick(event) {
    if (event.target.closest('.city-select')) {
        openCityList()
        closeSearchPanel()
    }

    else if (event.target.closest('.header__search-cancel ')) {
        closeSearchPanel()
    }
    else if (event.target.closest('.header__main-search') || event.target.closest('.header__search-panel')) {
        closeCitylist()
        openSearchPanel()
    }
    else {
        closeCitylist()
        closeSearchPanel()
    }
}

function openCityList() {
    citySelectBtn.classList.add('active')
}

function closeCitylist() {
    citySelectBtn.classList.remove('active')
}

function openSearchPanel() {
    searchPanel.classList.add('active')
}

function closeSearchPanel() {
    searchPanel.classList.remove('active')
}



/*******************************modal********************************/
if (document.querySelector('.modal')) {
    const modal = document.querySelector('.modal')
    const supportBtn = document.querySelector('.support__btn')

    supportBtn.addEventListener('click', () => {
        modal.classList.add('active')
        modal.addEventListener('click', checkModalClick)
    })

    function checkModalClick(event) {
        if (!event.target.closest('.modal__window')) {
            modal.classList.remove('active')
            modal.removeEventListener('click', checkModalClick)
        }
    }
}
