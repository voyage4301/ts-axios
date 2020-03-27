type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === 'ease-in') {
        } else if (easing === 'ease-in-out') {
        } else if (easing === 'ease-out') {
        } else {

        }
    }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in-out')
// button.animate(0, 0, null) // 类型“"unhealth"”的参数不能赋给类型“Easing”的参数。
// button.animate(0, 0, 'unhealth') // 类型“"unhealth"”的参数不能赋给类型“Easing”的参数。