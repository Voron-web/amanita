/* Для работы необходимо создать HTML разметку

    <div class="any-class-slider">
        ...
        //Блок-оболочка с изображениями
        <div class="move-slider__container">
            <img src="... .jpg" alt="">
            <img src="... .jpg" alt="">
        </div>
        
        //Блок-оболочка с изображениями
        <div class="move-slider__container">
            <img src="... .jpg" alt="">
            <img src="... .jpg" alt="">
        </div>
    </div>

    */

/* Создать экземпляр MoveSlider в js файле и вызвать метод init()

    const itemName = new MoveSlider('.any-class-slider')
    itemName.init()

*/


class MoveSliderItem {
    constructor(block) {
        this.imageBox = block;
        this.imageArr = block.querySelectorAll('img');
    }
    build() {
        const blockWidth = this.imageBox.getBoundingClientRect().width
        // создание блока контроллеров
        this.controlBlock = document.createElement('div');
        this.controlBlockArr = []
        this.controlBlock.classList.add('move-slider__control')
        for (let index = 0; index < Array.from(this.imageArr).length; index++) {
            const item = document.createElement('div')
            item.classList.add('move-slider__control-item')
            item.style.width = `${blockWidth / Array.from(this.imageArr).length}px`
            this.controlBlock.insertAdjacentElement('beforeend', item)
            this.controlBlockArr.push(item)
        }
        // создание блока индикаторов
        this.indaicatorBlock = document.createElement('div');
        this.indaicatorBlockArr = [];
        this.indaicatorBlock.classList.add('move-slider__indicator')
        for (let index = 0; index < Array.from(this.imageArr).length; index++) {
            const item = document.createElement('div')
            item.classList.add('move-slider__indicator-item')
            if (index == 0) {
                item.classList.add('active')
            }
            // item.style.width = `${blockWidth / Array.from(this.imageArr).length - 2}px`
            this.indaicatorBlock.insertAdjacentElement('beforeend', item)
            this.indaicatorBlockArr.push(item)
        }

        this.imageBox.insertAdjacentElement('beforeend', this.controlBlock)
        this.imageBox.insertAdjacentElement('beforeend', this.indaicatorBlock)

        //инициализация изображений
        Array.from(this.imageArr).forEach((element) => {
            element.style.zIndex = -1
        })
        this.imageArr[0].style.zIndex = 0
    }

    changeSlide(controlTarget) {
        const index = this.controlBlockArr.findIndex((element) => {
            return controlTarget == element
        })
        Array.from(this.imageArr).forEach((element) => {
            element.style.zIndex = -1
        })
        this.imageArr[index].style.zIndex = 0

        this.indaicatorBlockArr.forEach((element) => {
            element.classList.remove('active')
        })
        this.indaicatorBlockArr[index].classList.add('active')
    }

}

class MoveSlider {
    constructor(baseClass) {
        this.baseBlock = document.querySelector(baseClass);
        this.imageBlocksArr = this.baseBlock.querySelectorAll('.move-slider__container')
    }
    init() {
        this.itemsArr = Array.from(this.imageBlocksArr).map((block) => {
            const i = new MoveSliderItem(block)
            return i
        })
        this.itemsArr.forEach((element) => {
            element.build()
        })

        this.baseBlock.addEventListener('pointermove', this.eventCheck.bind(this))
    }
    eventCheck(event) {
        let activeItem
        if (event.target.closest('.move-slider__control-item')) {
            activeItem = this.itemsArr.find((element) => {
                return event.target.closest('.move-slider__control-item') == element.controlBlockArr.find((controlElement) => {
                    return controlElement == event.target.closest('.move-slider__control-item')
                })
            })
            activeItem.changeSlide(event.target.closest('.move-slider__control-item'))
        }
    }
}